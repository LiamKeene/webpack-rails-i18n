import chai from "chai"
import WebpackRailsI18n from "../lib/index.js"

const expect = chai.expect

describe("WebpackRailsI18n", () => {
  it("is an instance of VirtualModulePlugin", () => {
    const VirtualModulePlugin = require("virtual-module-webpack-plugin")
    expect(Object.getPrototypeOf(WebpackRailsI18n)).to
      .equal(VirtualModulePlugin)
  })
})
