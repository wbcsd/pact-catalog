# PACT Online Catalog

This repository holds the [PACT Online Catalog](https://pact-catalog.sine.dev).

## Contribute

To contribute to the PACT Online Catalog with an <strong>Data Model Extension</strong>, a <strong>Conformant Solution</strong>, or a <strong>Conformance Test Result</strong>, please follow these steps:

### 1. Fork the `pact-catalog` repository and clone it into your local machine

If you have GitHub CLI tools installed, open a terminal window and run

```sh
gh repo fork https://github.com/sine-fdn/pact-catalog.git --clone
```

Otherwise, navigate to the [pact-catalog repository](https://github.com/sine-fdn/pact-catalog.git) and fork it in your browser (instructions can be found [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository)).

Then, open a terminal window and run

```sh
git clone git@github.com:<your-github-id>/pact-catalog.git
```

### 2. Checkout a new branch with your institution's name

Run

```sh
git checkout -b <your-name>
```

### 3. Follow the contribution-specific tests

If you want to contribute an <strong>Data Model Extension</strong>, please follow [these steps](/CONTRIB_EXTENSION.md).

If you want to contribute a <strong>Conformant Solution</strong>, please follow [these steps](/CONTRIB_SOLUTION.md).

If you want to contribute a <strong>Conformance Test Result</strong>, please follow [these steps](/CONTRIB_TEST.md).

Once you have done that, please proceed to the next step.

### 4. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: <commit-message>"
git push origin <your-name>
```

Please replace `<commit-message>` with a short description, such as `add <extension-id> extension`, `add <your-solution-id> solution`, or `add <tested-solution-id> test result`.

## 5. Open a Pull Request

Go to the original [pact-catalog repository](https://github.com/sine-fdn/pact-catalog), choose the `Pull requests` tab and click the `New pull request` button.
Open a Pull Request to merge the branch `<your-name>` from your forked repository into the `main` branch of the `pact-catalog` repository. Instructions on how to open Pull Requests accross forks can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>`, `<extenion-id>`, `<extension-version>`,`<your-solution-id>`, and `<your-solution-version>` remain consistent. None should contain whitespaces and `<your-solution-version>` should follow the `X.Y.Z` format.

Your Pull Request will be reviewed and your solution added to the PACT Online Catalog as soon as possible.

> **_NOTE:_** Conformance test results are shown in the `Conformance` tab of a specific solution's page. If the tested solution has not yet been added to the catalog, the test data will not be visible. Rest assured, however, that it is included in the catalog and will become visible as soon as the tested solution is added.
