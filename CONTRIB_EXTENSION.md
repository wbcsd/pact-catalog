# Contribute an Industry Specific Extension

To contribute an Industry Specific Extension, please follow these steps:

### 1. Clone the `pact-catalog` repository to your local machine

Open a terminal window and run

```sh
git clone git@github.com:sine-fdn/pact-catalog.git
```

### 2. Checkout a new branch with your institution's name

Run

```sh
git checkout -b [your-name]
```

### 3. Create a new folder in the `data-mode-extensions` directory

From the parent directory of your local repository run

```sh
mkdir -p catalog/data-model-extensions/@[your-name]/[extension-id]/[extension-version]
```

### 4. Populate your extension's directory with the necessary files

From the parent directory of your local repository run

```sh
cd catalog/data-model-extensions/@[your-name]/[extension-id]/[extension-version]
touch index.js && touch LICENSE && touch package.json && schema.json
```

It is optional, but highly recommended, that you include also a `README.md` file. If so, please include it in a subdirectory called `documentation`:

```sh
cd catalog/data-model-extensions/@[your-name]/[extension-id]/[extension-version]
mkdir documentation
touch README.md
```

### 5. Fill in your extension's details in the `package.json` file

Open the `package.json` file created in step 4. and fill it adapting the following structure:

```json
{
  "name": "@[your-name]/[extension-id]",
  "version": "[extension-version]",
  "description": "[Short Description of the Extension]",
  "files": [
    "schema.json"
  ],
  "author": {
    "name": "[Institution's name]",
    "email": "[email]",
    "url": "[website]"
  },
  "license": "[license-type]",
  "catalog_info": {
    "summary": "[Summary of the Extension]",
    "status": "draft",
    "authors": [
      "[your-name]",
    ]
  },
  "industries": [
    "[industry]"
  ]
}
```

### 6. Commit and push your branch

From the parent directory of the repository, run

```sh
git add .
git commit -m "feat: add [extension-id] extension"
git push origin [your-name]
```

### 7. Open a Pull Request

Go to [the pact-catalog branches page]https://github.com/sine-fdn/pact-catalog/branches and open a Pull Request for your branch, adding any further information you might find relevant.

<strong>Please note:</strong> All values between square brackets (`[ ]`) should be replaced by actual values. Please make sure that the values replacing `[your-name]`, `[extension-id]`, and `[extension-version]` remain consistent and that no whitespaces or special characters are used)

Your Pull Request will be reviewed and added to the PACT Online Catalog as soon as possible.
