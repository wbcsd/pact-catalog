import * as fs from "fs";
import * as path from "path";
import {
  ExtensionJsonSchema,
  ExtensionParser,
  SolutionJsonSchema,
  SolutionParser,
  TestResultParser,
  UserParser,
  validateSchemaJson,
  WorkingGroupParser,
} from "./frontend/lib/catalog-types.schema";

async function validateExtension(
  namespace: string,
  name: string,
  version: string,
  extensionDir: string
): Promise<number> {
  console.log(`checking ${extensionDir}`);
  try {
    const extensionFile = path.join(extensionDir, "extension.json");
    const extension: ExtensionJsonSchema = ExtensionParser.parse(JSON.parse(fs.readFileSync(extensionFile, "utf8")));

    if (extension.id.namespace !== namespace) {
      console.error(
        `The namespace ${extension.id.namespace} does not match the directory ${namespace}`
      );
      return 1;
    }
    if (extension.id.extension_name !== name) {
      console.error(
        `The extension_name ${extension.id.extension_name} does not match the directory ${extension}`
      );
      return 1;
    }
    if (extension.id.version !== version) {
      console.error(
        `The version ${extension.id.version} does not match the directory ${version}`
      );
      return 1;
    }
  } catch (error) {
    console.error(error);
    return 1;
  }

  try {
    const schemaFile = path.join(extensionDir, "schema.json");
    const schema = fs.readFileSync(schemaFile, "utf8");
    let validated = validateSchemaJson(schema);
    if (!validated.validSchemaJson) {
      let { message } = validated;
      console.error(message);
      return 1;
    }
  } catch (error) {
    console.error(error);
    return 1;
  }
  return 0;
}

async function validateAllExtensions(): Promise<void> {
  const extensionsDir = "./catalog/data-model-extensions";
  let errorCode = 0;

  for (const publisher of fs.readdirSync(extensionsDir)) {
    const publisherDir = path.join(extensionsDir, publisher);
    if (!fs.statSync(publisherDir).isDirectory()) {
      continue;
    }
    for (const extension of fs.readdirSync(publisherDir)) {
      const extensionDir = path.join(publisherDir, extension);
      if (!fs.statSync(extensionDir).isDirectory()) {
        continue;
      }
      for (const version of fs.readdirSync(extensionDir)) {
        const versionDir = path.join(extensionDir, version);
        if (!fs.statSync(versionDir).isDirectory()) {
          continue;
        }
        const subdirErrorCode = await validateExtension(
          publisher,
          extension,
          version,
          versionDir
        );
        if (subdirErrorCode !== 0) {
          errorCode = 1;
          console.error(`${versionDir} is not a valid extension`);
        }
      }
    }
  }
  if (errorCode !== 0) {
    process.exit(errorCode);
  }
}

async function validateSolution(
  id: string,
  version: string,
  solutionDir: string
): Promise<number> {
  console.log(`checking ${solutionDir}`);
  try {
    const solutionFile = path.join(solutionDir, "solution.json");
    const solution: SolutionJsonSchema = SolutionParser.parse(JSON.parse(fs.readFileSync(solutionFile, "utf8")));

    if (solution.id !== id) {
      console.error(
        `The version ${solution.id} does not match the directory ${id}`
      );
      return 1;
    }
    if (solution.version !== version) {
      console.error(
        `The version ${solution.version} does not match the directory ${version}`
      );
      return 1;
    }
  } catch (error) {
    console.error(error);
    return 1;
  }
  return 0;
}

async function validateAllSolutions(): Promise<void> {
  const solutionsDir = "./catalog/solutions";
  let errorCode = 0;

  for (const solution of fs.readdirSync(solutionsDir)) {
    const solutionDir = path.join(solutionsDir, solution);
    if (!fs.statSync(solutionDir).isDirectory()) {
      continue;
    }
    for (const version of fs.readdirSync(solutionDir)) {
      const versionDir = path.join(solutionDir, version);
      if (!fs.statSync(versionDir).isDirectory()) {
        continue;
      }
      const subdirErrorCode = await validateSolution(
        solution,
        version,
        versionDir
      );
      if (subdirErrorCode !== 0) {
        errorCode = 1;
        console.error(`${versionDir} is not a valid solution`);
      }
    }
  }
  if (errorCode !== 0) {
    process.exit(errorCode);
  }
}

async function validateTestResult(testResultFile: string): Promise<number> {
  try {
    const solutionsDir = path.join(process.cwd(), "catalog/solutions");
    const solutionsList: string[] = [];
    for (const solution of fs.readdirSync(solutionsDir)) {
      const solutionPath = path.join(solutionsDir, solution);

      if (fs.statSync(solutionPath).isDirectory()) {
        const solutionVersions = fs.readdirSync(solutionPath);

        for (const version of solutionVersions) {
          solutionsList.push(`${solution}/${version}`);
        }
      }
    }

    const testResultJson = TestResultParser.parse(JSON.parse(fs.readFileSync(testResultFile, "utf8")));
    const { solution_id, version } = testResultJson.tested_solution;

    if (!solutionsList.includes(`${solution_id}/${version}`)) {
      if (!fs.readdirSync(solutionsDir).includes(solution_id)) {
        console.error(
          `There is no solution with id ${solution_id} in the catalog. Please make sure the conformance test json is correct.`
        );
        return 1;
      } else {
        console.error(
          `The version ${version} of solution ${solution_id} is not yet in the catalog.`
        );
        return 1;
      }
    }
  } catch (error) {
    console.error(error);
    return 1;
  }

  return 0;
}

async function validateAllTestResults(): Promise<void> {
  let errorCode = 0;

  const conformanceTestDir = path.join(
    process.cwd(),
    "catalog/conformance-tests"
  );
  const conformanceTests = fs.readdirSync(conformanceTestDir);

  for (const conformanceTest of conformanceTests) {
    const conformanceTestFile = path.join(conformanceTestDir, conformanceTest);
    const subdirErrorCode = await validateTestResult(conformanceTestFile);
    if (subdirErrorCode !== 0) {
      errorCode = 1;
    }
  }

  if (errorCode !== 0) {
    return Promise.reject("At least 1 conformance test is not valid.")
  }

}

async function validateAll(): Promise<void> {
  await validateAllExtensions();
  await validateAllSolutions();
  await validateAllTestResults();
  for (const { dir, parser } of [
    { dir: "./catalog/conformance-tests", parser: TestResultParser },
    { dir: "./catalog/users", parser: UserParser },
    { dir: "./catalog/working-groups", parser: WorkingGroupParser },
  ]) {
    for (const file of fs.readdirSync(dir).filter((file) => {
      return path.extname(file).toLowerCase() === ".json";
    })) {
      const jsonFile = path.join(dir, file);
      console.log(`checking ${jsonFile}`);
      try {
        const json = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
        parser.parse(json);
      } catch (error) {
        console.error(error);
        console.error(`${file} is invalid!`);
        process.exit(1);
      }
    }
  }
}

if (require.main === module) {
  validateAll().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
