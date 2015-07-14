var Brazier = require('brazier'),
    chalk   = require('chalk'),
    path    = require('path')

class BootController extends Brazier.Controller {

  initialize() {

    super.initialize()

    if(typeof this.options.argv != 'object') {
      throw new Error('options.argv is required for BootController.')
      return
    }

    if(typeof this.options.pkg != 'object') {
      throw new Error('options.pkg is required for BootController.')
      return
    }

    if(typeof this.options.routes != 'object') {
      throw new Error('options.routes is required for BootController.')
      return
    }

  }

  capitaliseFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1)

  }

  greeting() {

    var options = this.options

    var pkg     = options.pkg,
        name    = this.capitaliseFirstLetter(pkg.name),
        version = pkg.version

    var prompt = new Brazier.Prompt()

    prompt.line(chalk.green('\n%s command-line generator version %s\n'), name, version)

  }

  up() {

    var options = this.options

    var pkg     = options.pkg,
        name    = pkg.name

    this.greeting()

    var router = new Brazier.Router({
      appName: name,
      argv: options.argv,
      routes: options.routes
    })

    router.on('route:matched', function(data) {

      var dispatcher = new Brazier.Dispatcher({
        controllerPath: (options.controllerPath || path.join(__dirname, './'))
      })

      dispatcher.dispatch(data)

    })

    router.start()

  }

}

module.exports = BootController
