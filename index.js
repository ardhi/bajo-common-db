async function factory (pkgName) {
  const me = this

  return class BajoCommonDb extends this.lib.Plugin {
    static alias = 'cdb'

    constructor () {
      super(pkgName, me.app)
      this.config = {
        title: 'Common Database'
      }
    }
  }
}

export default factory
