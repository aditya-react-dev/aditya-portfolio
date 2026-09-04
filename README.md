# Aditya — Portfolio (React + Vite)

## 1. Edit your details
Open `src/data/content.js` and replace every placeholder (name, email, GitHub,
LinkedIn, phone, projects, experience). Drop your resume PDF into `public/`
as `resume.pdf`.

## 2. Run it locally
```
npm install
npm run dev
```
Opens at http://localhost:5173

## 3. Build for production
```
npm run build
```
This creates a `dist/` folder — that's what you deploy.

## 4. Deploy to GitHub Pages
```
npm install gh-pages --save-dev   # already in package.json
npm run build
npm run deploy
```
Then in your repo: Settings → Pages → set source branch to `gh-pages`.

If your repo is **not** named `YOUR_USERNAME.github.io`, open `vite.config.js`
and change `base: '/'` to `base: '/YOUR_REPO_NAME/'` before building.

## 5. (Easier alternative) Deploy to Vercel
Push this folder to a GitHub repo, go to vercel.com → New Project → import
the repo. Vercel auto-detects Vite, no config needed.
