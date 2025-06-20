async function factory (pkgName) {
  const me = this

  return class BajoCommonDb extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'cdb'
      this.config = {
        title: 'Common Database'
      }
    }
  }
}

export default factory
