cd frontend
# TO DO: remove the --branch flag and the branch name
git clone --branch repo-split git@github.com:sine-fdn/pact-catalog-web-app.git
echo "Moving files from .pact-catalog-web-app/app to ."
mv ./pact-catalog-web-app/app/* ./
echo "Moving .gitignore to ."
mv ./pact-catalog-web-app/.gitignore ./
echo "Deleting ./pact-catalog-web-app"
rm -f -r ./pact-catalog-web-app
