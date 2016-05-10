'use strict';

import EventEmitter from '../events'
import mixin       from '../mixin'
import Route       from './route'
import utils       from '../utils'

class DragonRouter {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)

    // TODO: figure out how to mixin this
    var eventEmitter = new EventEmitter()

    this.emit  = eventEmitter.emitEvent.bind(eventEmitter)
    this.on    = eventEmitter.addListener.bind(eventEmitter)
    this.once  = eventEmitter.addOnceListener.bind(eventEmitter)
    this.off   = eventEmitter.removeListener.bind(eventEmitter)

    this._currentHandler = null
    this._currentUrl     = null
    this._debug          = options.debug || false
    this._history        = window.history
    this._location       = window.location
    this._routes         = []
    this._started        = false

    this.options = options

    if(!this.options.routes) return console.error('Router needs routes')
    this.loadRoutes()

    document.addEventListener('click', this.onLinkClick.bind(this), false)

  }

  back() {
    window.history.back()
  }

  forward() {
    window.history.forward()
  }

  getPath() {

    //path.charAt(0) === '/' ? path.slice(1) : path;
    return window.location.pathname

  }

  get(pattern, options = {}) {

    var route = new Route(pattern)

    this._routes.push({route, options})

    /*let forwardPath = arguments[1]

    // Forward route
    if(typeof forwardPath == 'string') {

      this.navigate(forwardPath)
      return
    }

    return this.router.get(path, (req, next) => {

      this.currentHandler = handler

      handler.call(this.router, req, next)

    })*/

  }

  loadRoutes() {

    this.options.routes(this)

  }

  navigate(path, options = {}) {

    this._history[options.replace ? 'replaceState' : 'pushState']({}, document.title, path)
    this.onUrlChange()

  }

  onLinkClick(e) {

    var el = e.target

    if(el.nodeName == 'A') {

      if(this.isIgnoredLink(el)) return

      /*if(external) {
        window.open(href)
      }*/

      e.preventDefault()

      this.navigate(el.href)

    }

  }

  onUrlChange() {

    var matched = false,
        path    = this.getPath()

    for(var i = 0, l = this._routes.length; i < l; i++) {

      var item    = this._routes[i],
          options = item.options,
          route   = item.route

      if(route.regExp.test(path)) {

        var params = route.extractParams(path)

        this.emit('match', route, params, options)
        matched = true

        break
      }

    }

  }

  start(options = {}) {

    if(this._started) return console.error('Router already started.')

    this._started = true

    this._usePushState = true

    window.addEventListener('popstate', this.onUrlChange.bind(this), false)

    /*
    popstate doesn't fire on page load
    */
    this.onUrlChange()

  }

  stop() {

    if(!this._started) return

    window.removeEventListener('popstate', this.onUrlChange, false)

    this._started = false

  }

  use() {



  }

  dispose() {

    if(!this.disposed) {

      this.stop()

      document.removeEventListener('click', this.onLinkClick, false)

      utils.dispose(this)

    }

  }

}

Object.assign(DragonRouter.prototype, {mixin})

DragonRouter.prototype.disposed = false

DragonRouter.prototype.isIgnoredLink = function isIgnoredLink(el) {

  var href = el.getAttribute('href'),
      rel  = el.getAttribute('rel')

  if(!href || href == '' || href.charAt(0) == '#' || (rel && rel == 'external') || href.indexOf('//') > -1) return true

  return false

}

export {Route}
export default DragonRouter
