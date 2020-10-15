const { renderSassFile, watch } = require('./build')

const log = (...a) => console.log(...['[dev]', ...a].map(String))

watch('src/assets/scss', file => {
  renderSassFile({ file: 'src/assets/scss/main.scss' }).catch(log)  
})


