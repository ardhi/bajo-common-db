async function beforeResourceMerge (plugin, lng, content) {
  const { eachPlugins, readConfig, importPkg } = this.bajo.helper
  const { merge } = await importPkg('lodash-es')
  if (plugin !== 'bajoDb') return
  await eachPlugins(async function ({ file }) {
    const item = await readConfig(file)
    merge(content, item)
  }, { glob: `i18n/${lng}.json`, ns: 'bajoDb' })
}

export default beforeResourceMerge
