const path = require("path")

const VirtualModulePlugin = require("virtual-module-webpack-plugin")
const WebpackRailsI18nLoader = require("./webpack-rails-i18n-loader")

class WebpackRailsI18n extends VirtualModulePlugin {
  constructor({ localesPath, pattern, pathRoot = "", outputName = "translations" }) {
    const loader = WebpackRailsI18nLoader()

    super({
      moduleName: path.join(pathRoot, `${outputName}.json`),
      contents:   JSON.stringify(loader.loadTranslations({ localesPath, pattern }))
    })
  }
}

module.exports = WebpackRailsI18n
