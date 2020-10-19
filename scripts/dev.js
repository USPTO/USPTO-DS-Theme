const { renderSassFile, watch } = require('./build')

const log = (...a) => console.log(...['[dev]', ...a].map(String))

watch('src/scss', file => {
  renderSassFile({ file: 'src/scss/usptostrap.scss' }).catch(log)  
})


