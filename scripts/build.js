const fs = require('fs')
const fse = require('fs-extra')
const glob = require('glob')
const sassFile = /\.s[ac]ss$/i
const srcFolder = 'src/pages/'
const outFolder = 'dist/'
const slashes = /[\\\/]/g


const cwd = `${process.cwd()}\\`
const log = (...a) => console.log(...['[build]', ...a])
const recwd = new RegExp(cwd.replace(/\\/g, '\\\\'), 'g')


const sass = require('sass')

const includePaths = [
  'src/scss',
  './node_modules/bootstrap/scss'
]

const renderSassFile = (options = {}) => new Promise((resolve, reject) => {
  let { file, outFile } = options
  if (!outFile) {
    outFile = file.replace(slashes, '/')
      .replace(includePaths[0], 'assets/css')
      .replace(sassFile, '.css')
  }
  log(`render ${file}`)
  sass.render({ ...options, includePaths, outFile, sourceMap: true }, (err, result) => {
    if (err) reject(err)
    else {
      writeFile(outFile, result.css)
      writeFile(`${outFile}.map`, result.map)
      resolve(result)
    }
  }) 
})

const writeFile = (file, data) => {
  fs.mkdirSync(file.split(slashes).slice(0, -1).join('/'), { recursive: true })
  fs.writeFileSync(file, data)
  log(`saved ${file}`)
}

const watch = (path, fn) => {
  const timeouts = {}
  fs.watch(path, { recursive: true }, (event, file) => {
    if (event !== 'change') return
    let x = `${event}${file}`
    let f = `${path}/${file}`.replace(slashes, '/')
    clearTimeout(timeouts[x])
    timeouts[x] = setTimeout(() => fn(f), 10)
  })
}

Object.assign(exports, {
  renderSassFile,
  watch,
})

if (!module.parent) {
  let [build] = process.argv.slice(2)
  if (build) data.build = build
  
  renderSassFile({ file: 'src/scss/usptostrap.scss' })
  .then(() => log(`sass = success`))
  .catch(e => log(`sass error = ${e}`)) 

}