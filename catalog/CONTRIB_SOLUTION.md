# Contribute a PACT Conforming Solution

To contribute a PACT Conforming Solution, please follow these steps:

## 1. Clone the `pact-catalog` repository to your local machine

Open a terminal window and run

```sh
git clone git@github.com:sine-fdn/pact-catalog.git
```

## 2. Checkout a new branch with your institution's name

Run

```sh
git checkout -b [your-name]
```

(replacing `[your-name]` by your institution's name, without whitespaces or special characters)

## 3. Create a new `json` file in the `solutions` directory

From the parent directory of your local repository run

```sh
touch catalog/solutions/[solution-id].json
```

(replacing `[solution-id]` by the desired id for your solution)

## 4. Fill in your solution's details

Open the `json` file created in step 3. and fill adapting the following structure:

```json
{
  "id": "[solution-id]",
  "name": "[solution-name]",
  "website": "[solution-website]",
  "provider": "[your-name]",
  "summary": "[summary]"
}
```

(The `"summary"` field is optional but highly recommended.)

If your solution supports Industry Specific Extensions, please include also the field `"extensions"`, based on the following structrue:

```json
  "extensions": [
    { "id": "[extension-id]", "version": "[extension-version]" },
  ],
```

If your solution was conceived to be used in specific industries — and especially if it supports Industry Specific Extensions — please include the field `"industries"`, based on the following structure:

```json
  "industries": ["[industry]"],
```

There is no limit to the number of extensions and industries.

(All values between square brackets (`[ ]`) should be replaced by actual values. Please make sure that the values replacing `[your-name]` and `[solution-id]` remain consistent)
