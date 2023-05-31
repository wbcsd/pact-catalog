# Contribute a PACT Conformant Solution

To contribute a PACT Conformant Solution, please follow these steps:

> **_NOTE:_** The following steps presuppose that you have already forked and cloned the `pact-catalog` repository. If that is not the case, please go back to the [main instructions](/README.md) and follow them in order.

### 1. Create a new solution path in the `solutions` directory

From the parent directory of your local repository run

```sh
mkdir -p catalog/solutions/<your-solution-id>/<your-solution-version>
```

### 2. Create a new `json` file in your solution's directory

From the parent directory of your local repository run

```sh
touch catalog/solutions/<your-solution-id>/<your-solution-version>/solution.json
```

### 3. Fill in your solution's details

Open the `json` file created in step 4. and fill it by adapting the following structure:

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-user-id>`, `<your-solution-id>` and `<your-solution-version>` only include <strong>lowercase letters and dashes</strong> (instead of whitespace). The value replacing `<your-solution-version>` should follow the `X.Y.Z` format. Please make sure that these remain consistent.

```javascript
{
  "id": "<your-solution-id>", // e.g. 'Example Solution' has solution id "example-solution"
  "name": "<Your Solution Name>", // e.g. "Example Solution"
  "version": "<your-solution-version>", // e.g. "0.0.0"
  "website": "<your-solution-website>",
  "provider": "<your-user-id>", // e.g. 'ABC Corp' has user id "abc" or "abc-corp"
  "summary": "<summary>"
}
```

Note: The `"summary"` field is optional but highly recommended.

If your solution supports Data Model Extensions, please include also the field `"extensions"`, based on the following structure:

```javascript
  "extensions": [
    {
      "namespace": "@<user-id>", // the id of the user that developed the extension
      "extension_name": "<extension-id>",
      "version": "<extension-version>"
    },
  ],
```

If your solution was conceived to be used in specific industries — and especially if it supports Data Model Extensions — please include the field `"industries"`, based on the following structure:

```javascript
  "industries": ["<industry>"],
```

Please refer to [this example](./catalog/examples/solutions/example-solution/0.0.0/solution.json) to see how your `solution.json` file should look like.

### 4. Contribute a Conformance Test Result

> **_NOTE:_** If your solution has not yet been tested for conformance, please skip this step.

If have already tested your solution for conformance with the Pathfinder Framework, please contribute a <strong>Conformance Test Result</strong> by following [these instructions](./CONTRIB_TEST.md).

### 5. Commit your branch, push it, and open a Pull Request

Please continue from [step 6 of the main instructions](/README.md#4-commit-and-push-your-branch).

Your Pull Request will be reviewed and your solution added to the PACT Online Catalog as soon as possible.

> **_NOTE:_** By submitting a Conformant Solution you acknowledge that you have read and accepted the Catalog's [Terms and Conditions](/catalog/legal/TERMSANDCONDITIONS.md).
