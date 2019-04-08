import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import './index.css'

const requireComponent = require.context(
  // The relative path from current folder
  './',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /TW[A-Z]\w+\.(vue|js)$/
)

const found = {};

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  found[componentName]= componentConfig.default || componentConfig
})

export default found