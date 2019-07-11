let Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    layouts    = require('metalsmith-layouts'),
    stylus     = require('metalsmith-stylus')
    serve      = require('metalsmith-serve'),
    watch      = require('metalsmith-watch');

Metalsmith(__dirname)
.source('./src')
.destination('../scott-fryxell.github.io/')
.use(stylus())
.use(markdown())
.use(layouts({
  default: "layout.hbs",
  directory: "src",
  pattern: "**/*.html"
}))
.use(serve({
  port: 8080,
  verbose: true
}))
.use(watch({
  suppressNoFilesError: true,
  pattern: '**/*',
  livereload: true,
  paths: {
    "${source}/**/*": true
  }
}))
.build(err => {
  if (err) throw err;
  console.log('Site build complete!');
})
