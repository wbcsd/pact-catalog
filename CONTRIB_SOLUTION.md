# Contribute a PACT Conforming Solution

To contribute a PACT Conforming Solution, please follow these steps:

### 1. Fork the `pact-catalog` repository and clone it into your local machine

If you have GitHub CLI tools installed, open a terminal window and run

```sh
gh repo fork https://github.com/sine-fdn/pact-catalog.git --clone
```

Otherwise, navigate to the [pact-catalog repository](https://github.com/sine-fdn/pact-catalog.git) and fork it in your browser (instructions can be found [here](https://github.com/sine-fdn/pact-catalog.git)).

Then, open a terminal window and run

```sh
git clone git@github.com:<your-github-id>/pact-catalog.git
```

(Note: this assumes you have not changed the name of the repository when you forked it.)

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
touch catalog/conformance-tests/result-<your-solution-id>-001.json
```

(Note: if this is not the first conformance test you are submitting, please replace `001` with the adequate number.)

### 6. Fill in the conformance test details

Open the `json` file created in step 5. and fill it adapting the following structure:

```json
{
  "tested_solution": {
    "solution_id": "<your-solution-id>",
    "version": "<your-solution-version>"
  },
  "tested_by": {
    "solution_name": "<solution-name>",
    "version": "<solution-version>",
    "solution_id": "<solution-id>"
  },
  "test_result": "PACT conformant",
  "test_date": "<date>",
  "pathfinder_version": "2.0.0"
}
```

Note: the `"solution_id"` property of the `"tested_by"` attribute is optional, but highly recommended. All other fields are mandatory.

If your solution was tested for specific extensions, please add also the field `"tests"`, based on the following structure:

```json
  "extensions_tested": [
    {
      "extension": "<extension-id>",
      "version": "<extension-version>"
    }
  ]
```

Please refer to [this example](./catalog/conformance-tests/result-001.json){:target="\_blank"} to see how your conformance test `json` should look like.

### 7. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add <solution-id> solution"
git push origin <your-name>
```

### 8. Open a Pull Request

Go to your forked repository, click on the `Pull requests` tab and then on the `New pull request` button. At the top, make sure the Pull Request is trying to merge `<your-name>` branch of your the `<your-github-id>/pact-catalog` repository into the `main` branch of the `sine-fdn/pact-catalog` repository. Click on the `Create pull request` button and add any information you might find relevant.

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>` and `<solution-id>` remain consistent and that no whitespaces or special characters are used.

Your Pull Request will be reviewed and added to the PACT Online Catalog as soon as possible.
