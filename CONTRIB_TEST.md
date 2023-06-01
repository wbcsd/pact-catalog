# Contribute a Conformance Test Result

To contribute a Conformance Test Result, please follow these steps:

> **_NOTE:_** The following steps presuppose that you have already forked and cloned the `pact-catalog` repository. If that is not the case, please go back to the [main instructions](/README.md) and follow them in order.

### 1. Create a new `json` file in the `conformance-tests` directory

From the parent directory of your local repository run

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-user-id>`, `<your-solution-id>`, `<your-solution-version>` only include <strong>lowercase letters and dashes</strong> (instead of whitespace). The value replacing `<your-solution-version>` should follow the `X.Y.Z` format. The value replacing `<test-number>` should only include three digits from 0 to 9. Please make sure that these remain consistent.

```sh
touch catalog/conformance-tests/result-<your-solution-id>-<test-number>.json
```

The `<test-number>` should follow the `XYZ` format. If this is the first test for a particular solution, please replace it with `001`.

### 2. Fill in the conformance test details

Open the `json` file created in step 5. and fill it adapting the following structure:

```javascript
{
  "tested_solution": {
    "solution_id": "<your-solution-id>", // e.g. 'Example Solution' has solution id "example-solution"
    "version": "<your-solution-version>" // e.g. "0.0.0"
  },
  "tested_by": {
    "solution_name": "<Solution Name>", // e.g. "Another Solution"
    "version": "<solution-version>",
    "solution_id": "<solution-id>" // e.g. "another-solution"
  },
  "test_result": "passed",
  "test_date": "<date>",
  "pathfinder_version": "<pathfinder-framework-version>" // "1.0.1" or "2.0.1"
}
```

The `"solution_id"` property of the `"tested_by"` attribute is optional, but highly recommended. All other fields are mandatory.

In case your solution did not pass the test but you nevertheless want to add the conformance test result to the catalog, replace the value of the `"test_result"` field by `"failed"`.

The `<pathfinder-framework-version` can be either `1.0.1` or `2.0.1`.

If your solution was tested for specific extensions, please add also the field `"tests"`, based on the following structure:

```javascript
  "extensions_tested": [
    {
      "namespace": "@<user-id>",
      "extension_name": "<extension-id>",
      "version": "<extension-version>"
    }
  ]
```

Please refer to [this example](./catalog/examples/conformance-tests/result-example-solution-001.json) to see how your conformance test `json` should look like.

### 3. Commit your branch, push it, and open a Pull Request

Please continue from [step 6 of the main instructions](/README.md#4-commit-and-push-your-branch).

Your Pull Request will be reviewed and your conformance test result added to the PACT Online Catalog as soon as possible.

> **_NOTE:_** Conformance test results are shown in the `Conformance` tab of a specific solution's page. If you have not yet added the tested solution to the catalog, then the data about the test results will not be visible. It will, nevertheless, be included in the catalog, and will become visible as soon as the tested solution is also added.

> **_NOTE:_** By submitting a Conformance Test Result you acknowledge that you have read and accepted the Catalog's [Terms and Conditions](/catalog/legal/TERMSANDCONDITIONS.md).
