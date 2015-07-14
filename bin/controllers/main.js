var Brazier  = require('brazier'),
    fs       = require('fs'),
    mkdirp   = require('mkdirp'),
    path     = require('path'),
    sh       = require('execSync'),
    util     = Brazier.util

class InitController extends Brazier.Controller {

  constructor() {
    super()
  }

  /*
  TODO: provide some validation that this is the project to destroy
  */
  destroy() {

    let cwd = process.cwd()

    sh.run(`rm -rf ${cwd}/*`)

  }

  init(options = {}) {

    this.prompt({
      key: 'appName',
      default: this.cwd.split('/').pop(),
      label: 'App Name'
    })

    var appName = this.store['appName']

    var dirPath = path.join(__dirname, '../template')

    var directories = this.getDirectories(dirPath)

    directories.forEach( (directory) => {

      var destPath = directory.replace(dirPath, process.cwd())

      mkdirp.sync(destPath)

    })

    var files = this.getFiles(dirPath)

    util.copyFiles({
      data: this.store,
      destCwd: process.cwd(),
      files,
      ignoreInPath: [
        'public',
        'vendor'
      ],
      srcCwd: dirPath
    })

  }

}

module.exports = InitController
