/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * BajoCommonDb class
   *
   * @class
   */
  class BajoCommonDb extends this.app.pluginClass.base {
    static alias = 'cdb'

    constructor () {
      super(pkgName, me.app)
      this.config = {
        title: 'Common Database'
      }
    }
  }

  return BajoCommonDb
}

export default factory
