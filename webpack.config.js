var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /**
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('/js/semantic', './node_modules/semantic-ui/dist/semantic.js')
    .addEntry('/js/background', './assets/js/background.js')
    .addEntry('/js/home', './assets/js/home.js')
    .addEntry('/js/navbar', './assets/js/navbar.js')
    .addEntry('/js/about', './assets/js/about.js')
    .addEntry('/js/projets', './assets/js/projets.js')
    .addStyleEntry('/css/semantic', './node_modules/semantic-ui/dist/semantic.css')
    .addStyleEntry('/css/background', './assets/css/background.css')
    .addStyleEntry('/css/home', './assets/css/home.css')
    .addStyleEntry('/css/navbar', './assets/css/navbar.css')
    .addStyleEntry('/css/semantic', './node_modules/semantic-ui/dist/semantic.css')
    .addStyleEntry('/css/about', './assets/css/about.css')
    .addStyleEntry('/css/projets', './assets/css/projets.css')

    /**
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

// enables Sass/SCSS support
//.enableSassLoader()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

var Encore = require('@symfony/webpack-encore');

module.exports = Encore.getWebpackConfig();
