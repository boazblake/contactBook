# Mithril Webpack Starter

This starter is based on [Yoeran Luteijn](https://github.com/yoeran/)'s [mithril-webpack-starter](https://github.com/yoeran/mithril-webpack-starter)

### About:
Functional-Mithril-Firebase-Webpack

* Dev server with live reloading, HMR
* Support for CSS/SCSS (with Autoprefixer), image assets
* Bundling and minification for deployment
* Lints all your JS before allowing you to push your code (skip this by adding `--no-verify` to your push command, not recommended though)


### Serve locally:
```
npm start
```

* Access app at `http://localhost:8080/`
* Get coding! The entry point file is `src/bootstrap.jsx`
* Browser will refresh automatically on any file changes..


### Build & bundle for prod:
```
npm run build
```

* Files are saved into the `/dist` folder
* To check it, open `dist/index.html`
