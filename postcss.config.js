const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
    // etc.
  ],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },

      // Specify all of the extensions of your template files
      extensions: ['html', 'vue', 'jsx' /* etc. */]
    }
  ]
})

let plugs = [require('tailwindcss'), require('autoprefixer')]

if (process.env.NODE_ENV === 'production') plugs.push(purgecss)

module.exports = {
  plugins: plugs
}
