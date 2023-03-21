# Contribute an Industry Specific Extension

To contribute an Industry Specific Extension, please follow these steps:

> **_NOTE:_** The following steps pressupose that you have already forked and cloned the `pact-catalog` repository. If that is not the case, please go back to the [main instructions](/README.md) and follow them in order.

### 1. Create a new extension path in the `data-model-extensions` directory

From the parent directory of your local repository run

```sh
mkdir -p catalog/data-model-extensions/@<your-name>/<extension-id>/<extension-version>
```

### 2. Populate your extension's directory with the necessary files

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

### 3. Fill in your extension's details

#### 3.1 `package.json`

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
  "license": "<license>",
  "catalog_info": {
    "summary": "<Summary of the Extension>",
    "status": "draft",
    "authors": ["<your-name>"]
  },
  "industries": ["<industry>"]
}
```

Note: the value of `"license"` field must be either `"MIT"` or `"CC0"`.

#### 3.2 `schema.json`

Open the `schema.json` file created in step 4. and fill it with your extension. This must be a valid [JSON schema](https://json-schema.org) based on [the Pathfinder Technical Specification V2](https://pact-catalog-frontend.vercel.app/schemas/@wbcsd-product-footprint-2.0.0.schema.json)

#### 3.3 `LICENSE`

Open the `LICENSE` file created in step 4. and fill it according to your license choice, which must be either `MIT` or `CC0`.

You can use [this template](https://github.com/sine-fdn/pact-catalog-frontend/blob/main/frontend/utils/MIT.txt) for the `MIT` license and copy [this text](https://github.com/sine-fdn/pact-catalog-frontend/blob/main/frontend/utils/CC0.txt) for the `CC0` license.


### 4. Commit your branch, push it, and open a Pull Request

Please continue from [step 4 of the main instructions](/README.md#4-commit-and-push-your-branch).

<strong>Please note:</strong> All text between angle brackets (`< >`) should be replaced by actual values. Please make sure that the values replacing `<your-name>`, `<extension-id>`, and `<extension-version>` remain consistent and that no whitespaces or special characters are used.

Your Pull Request will be reviewed and added to the PACT Online Catalog as soon as possible.
