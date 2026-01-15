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
  class BajoCommonDb extends this.app.baseClass.Base {
    constructor () {
      super(pkgName, me.app)
      this.config = {
        title: 'Common Database'
      }
    }

    getCountryByMmsi = (mmsi, returnRec = false) => {
      if (!this.app.dobo) return
      // this won't use Dobo's model interface, it scans directly on memdb storage instead
      const head = parseInt(mmsi.slice(0, 3))
      const instance = this.app.dobo.getModel('CdbCountry', true)
      if (!instance) return
      const country = instance.driver.storage.CdbCountry.find(item => (item.mmsi ?? []).includes(head))
      if (returnRec) return country
      return country ? country._id : undefined
    }
  }

  return BajoCommonDb
}

export default factory
