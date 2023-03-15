# Contribute an Industry Specific Extension

To contribute an Industry Specific Extension, please follow these steps:

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

### 3. Create a new folder in the `data-model-extensions` directory

From the parent directory of your local repository run

```sh
mkdir -p catalog/data-model-extensions/@<your-name>/<extension-id>/<extension-version>
```

### 4. Populate your extension's directory with the necessary files

From the parent directory of your local repository run

```sh
cd catalog/data-model-extensions/@<your-name>/<extension-id>/<extension-version>
touch index.js && touch LICENSE && touch package.json && touch schema.json
```

Fill the `schema.json` with your extension (see [the Pathfinder Technical Specification about Data Model Extensions](https://wbcsd.github.io/data-model-extensions/guidance/#catalog-data-attributes) for further details).

It is optional, but highly recommended, that you include also a `README.md` file. If so, please include it in a subdirectory called `documentation`:

```sh
cd catalog/data-model-extensions/@<your-name>/<extension-id>/<extension-version>
mkdir documentation
touch README.md
```

### 5. Fill in your extension's details in the `package.json` file

Open the `package.json` file created in step 4. and fill it adapting the following structure:

```json
{
  "name": "@<your-name>/<extension-id>",
  "version": "<extension-version>",
  "description": "<Short Description of the Extension>",
  "files": ["schema.json"],
  "author": {
    "name": "<Institution's name>",
    "email": "<email>",
    "url": "<website>"
  },
  "license": "<license-type>",
  "catalog_info": {
    "summary": "<Summary of the Extension>",
    "status": "draft",
    "authors": ["<your-name>"]
  },
  "industries": ["<industry>"]
}
```

### 6. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add <extension-id> extension"
git push origin <your-name>
```

### 7. Open a Pull Request

Go to your forked repository, click on the `Pull requests` tab and then on the `New pull request` button. At the top, make sure the Pull Request is trying to merge `<your-name>` branch of your the `<your-github-id>/pact-catalog` repository into the `main` branch of the `sine-fdn/pact-catalog` repository. Click on the `Create pull request` button and add any information you might find relevant.


<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>`, `<extension-id>`, and `<extension-version>` remain consistent and that no whitespaces or special characters are used.

Your Pull Request will be reviewed and added to the PACT Online Catalog as soon as possible.
