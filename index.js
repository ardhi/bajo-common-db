async function factory (pkgName) {
  const me = this

  return class BajoCommonDb extends this.app.pluginClass.base {
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
