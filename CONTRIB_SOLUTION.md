# Contribute a PACT Conforming Solution

To contribute a PACT Conforming Solution, please follow these steps:

### 1. Clone the `pact-catalog` repository to your local machine

Open a terminal window and run

```sh
git clone git@github.com:sine-fdn/pact-catalog.git
```

### 2. Checkout a new branch with your institution's name

Run

```sh
git checkout -b <your-name>
```

### 3. Create a new `json` file in the `solutions` directory

From the parent directory of your local repository run

```sh
touch catalog/solutions/<your-solution-id>.json
```

### 4. Fill in your solution's details

Open the `json` file created in step 3. and fill it adapting the following structure:

```json
{
  "id": "<your-solution-id>",
  "name": "<solution-name>",
  "website": "<solution-website>",
  "provider": "<your-name>",
  "summary": "<summary>"
}
```

(The `"summary"` field is optional but highly recommended.)

If your solution supports Industry Specific Extensions, please include also the field `"extensions"`, based on the following structrue:

```json
  "extensions": [
    { "id": "<extension-id>", "version": "<extension-version>" },
  ],
```

If your solution was conceived to be used in specific industries — and especially if it supports Industry Specific Extensions — please include the field `"industries"`, based on the following structure:

```json
  "industries": ["<industry>"],
```

There is no limit to the number of extensions and industries.

### 5. Create a new `json` file in the `conformance-tests` directory

> **_NOTE:_** If your solution has not yet been tested for conformance, please jump to step `7.`

From the parent directory of your local repository run

```sh
touch catalog/conformance-tests/result-<your-solution-id>.json
```

### 6. Fill in the conformance test details

Open the `json` file created in step 5. and fill it adapting the following structure:

```json
{
  "system_under_test": "<your-solution-id>",
  "system_tester": "<tester-solution-id>",
  "test_result": "PACT conformant",
  "test_date": "<date>"
}
```

If your solution was tested for specific extensions, please add also the field `"tests"`, based on the following structure:

```json
  "tests": [
    {
      "extension": "<extension-id>",
      "version": "<extension-version>"
    }
  ]
```

### 7. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add <solution-id> solution"
git push origin <your-name>
```

### 8. Open a Pull Request

Go to [the pact-catalog branches page]https://github.com/sine-fdn/pact-catalog/branches and open a Pull Request for your branch, adding any further information you might find relevant.

<strong>Please note:</strong> All values between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>` and `<solution-id>` remain consistent and that no whitespaces or special characters are used.

Your Pull Request will be reviewed and added to the PACT Online Catalog as soon as possible.
