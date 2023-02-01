mkdir frontend
git clone --branch repo-split git@github.com:sine-fdn/pact-catalog-web-app.git frontend
cp -r -f ./frontend/app/* ./frontend
npm install next
npm install
npm install --global vercel@latest
vercel build --cwd frontend
vercel deploy
