const fs        = require("fs")
const glob      = require("glob")
const path      = require("path")
const yaml      = require("js-yaml")
const deepmerge = require("deepmerge")

const listLocaleFiles = ({ localesPath, pattern }) => glob.sync(pattern, { cwd: localesPath })

const readLocalFile = filePath => yaml.load(fs.readFileSync(filePath))

const loadTranslations = locale => ({ localesPath = "", pattern = "**/*.yml" }) => {
  let translations = {}

  listLocaleFiles({ localesPath, pattern }).map(file => {
    const contents = readLocalFile(path.join(localesPath, file))

    translations = deepmerge(translations, contents)
    return translations
  })
  return translations[locale]
}

const WebpackRailsI18nLoader = (locale = "en") => {
  return {
    loadTranslations: loadTranslations(locale)
  }
}

module.exports = WebpackRailsI18nLoader
