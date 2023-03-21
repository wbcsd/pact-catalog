# Contribute a PACT Conforming Solution

To contribute a PACT Conforming Solution, please follow these steps:

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

### 3. Create a new solution path in the `solutions` directory

From the parent directory of your local repository run

```sh
mkdir -p catalog/solutions/<your-solution-id>/<your-solution-version>
```

### 4. Create a new `json` file in your solution's directory

From the parent directory of your local repository run

```sh
touch catalog/solutions/<your-solution-id>/<your-solution-version>/solution.json
```

### 5. Fill in your solution's details

Open the `json` file created in step 4. and fill it by adapting the following structure:

```json
{
  "id": "<your-solution-id>",
  "name": "<your-solution-name>",
  "version": "<your-solution-version>",
  "website": "<your-solution-website>",
  "provider": "<your-name>",
  "summary": "<summary>"
}
```

Note: The `"summary"` field is optional but highly recommended.

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

Please refer to [this example](./catalog/solutions/steel-industry-solution/1.0.0/solution.json) to see how your `solution.json` file should look like.

### 6. Contribute a Conformance Test Result

> **_NOTE:_** If your solution has not yet been tested for conformance, please skip thi step.

If have already tested your solution for conformance with the Pathfinder Framework, please contribute a <strong>Conformance Test Result</strong> by following [these instructions](./CONTRIB_TEST.md)

### 7. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add <your-solution-id> solution"
git push origin <your-name>
```

### 9. Open a Pull Request

Go to the original [pact-catalog repository](https://github.com/sine-fdn/pact-catalog), choose the `Pull requests` tab and click the `New pull request` button.
Open a Pull Request to merge the branch `<your-name>` from your forked repository into the `main` branch of the `pact-catalog` repository. Instructions on how to open Pull Requests accross forks can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>`, `<your-solution-id>` and `<your-solution-version>` remain consistent. None should contain whitespaces and `<your-solution-version>` should follow the `X.Y.Z` format.

Your Pull Request will be reviewed and your solution added to the PACT Online Catalog as soon as possible.
