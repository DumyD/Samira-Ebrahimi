# **Kindling**

**A static site toolchain built in tandem with WoodChippr**

WoodChippr is my personal wordpress development toolchain, Kindling is the FED part of that toolchain picked off and bundled into its' own little package. Hey, maybe I should think of making Kindling a dependency of WoodChippr 🤔

## **Who should use this project?**

Anyone wanting a quick, functioning front end development build chain.

## Features:
- [Sass](http://sass-lang.com/) compilation via [Gulp](https://gulpjs.com/)
- Javascript compilation via [Webpack](https://webpack.js.org) (Why not Gulp? Good question. The truthful answer is it was more convenient to set up at the time.)
- Default, optional automated [Modernizr](https://modernizr.com/) builds using [modernizr-loader](https://www.npmjs.com/package/modernizr-loader) and .modernizrrc
- Default, optional ECMAScript 6 feature support using [Babel](https://babeljs.io/)
- Minimal [sticky footer](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) implementation, some helper css classes, [Normalize.css](https://necolas.github.io/normalize.css/) (needs updating) and a very minimal CSS Grid
- [Autoprefixer](https://github.com/postcss/autoprefixer) support

## System requirements:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation:

- Checkout or download this repository
- `npm install`
- Optionally rename/copy `sample.env` to `.env` and overwrite the default options. Default options are:

### Build tool settings
`DEV_FILES_DIR`: The directory where your development files like sass, svg's and javascript files live
`JS_DIR`: The subdirectory for your js files
`SCSS_DIR`: The subdirectory for your sass files
`SVG_DIR`: The subdirectory for your SVG files
`USE_BABEL`: Enable new fangled ecmascript syntax features like `import` and arrow functions
`USE_MODERNIZR`: Enable Modernizr
`AUTOPREFIX_ARGS`: Arguments to send to Autoprefixer

### Disable gulp desktop notifications
`DISABLE_NOTIFIER`: prevent Kindling from notifying you when the build updates

### Run node server to host files
`RUN_SERVER`: Open a new node server for your in progress development work

## Commands:

- `npm run dev`: Create a development build of your project and watch for changes, optionally open a local node server to see your site.
- `npm start`: Create a production build of your project and watch for changes, optionally open a local node server to see your site.
- `npm run build`: Create a production build of your project.

This is a work in progress. Questions? Send me an issue!
# Samira-Ebrahimi
# Samira-Ebrahimi
