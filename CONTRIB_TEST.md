# Contribute a Conformance Test Result

To contribute a Conformance Test Result, please follow these steps:

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

### 3. Create a new `json` file in the `conformance-tests` directory

From the parent directory of your local repository run

```sh
touch catalog/conformance-tests/result-<your-solution-id>-<test-number>.json
```

The `<test-number>` should follow the `XYZ` format. If this is the first test for a particular solution, please replace it with `001`.

### 4. Fill in the conformance test details

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
  "pathfinder_version": "<pathfinder-framework-version>"
}
```

The `"solution_id"` property of the `"tested_by"` attribute is optional, but highly recommended. All other fields are mandatory.

The `<pathfinder-framework-version` can be either `1.0.1` or `2.0.0`.

If your solution was tested for specific extensions, please add also the field `"tests"`, based on the following structure:

```json
  "extensions_tested": [
    {
      "extension": "<extension-id>",
      "version": "<extension-version>"
    }
  ]
```

Please refer to [this example](./catalog/conformance-tests/result-001.json) to see how your conformance test `json` should look like.

### 5. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add conformance test result <your-solution-id>-<test-number>"
git push origin <your-name>
```

### 6. Open a Pull Request

Go to the original [pact-catalog repository](https://github.com/sine-fdn/pact-catalog), choose the `Pull requests` tab and click the `New pull request` button.
Open a Pull Request to merge the branch `<your-name>` from your forked repository into the `main` branch of the `pact-catalog` repository. Instructions on how to open Pull Requests accross forks can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>`, `<your-solution-id>`, `<your-solution-version>`, and `<test-number>` remain consistent. None should contain whitespaces and `<your-solution-version>` should follow the `X.Y.Z` format.

Your Pull Request will be reviewed and your solution added to the PACT Online Catalog as soon as possible.
