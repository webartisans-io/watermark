const { mix } = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.sass('sass/app.scss', 'css');