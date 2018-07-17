const withSass = require('@zeit/next-sass')
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["static/sass/bootstrap/bootstrap.scss", './static/sass/bootstrap/bootstrap.scss'],
    outputStyle: 'compressed'
  },
  postcssLoaderOptions: {
    autoprefixer: true
  }
})