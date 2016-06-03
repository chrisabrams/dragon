'use strict'

/**
 * Module Dependencies
 *
 * @ignore
 */
import Dispatcher from '../router/dispatcher'
import mixin      from '../mixin'
import Router     from '../router/index'
import utils      from '../utils'

/**
 * Application Class
 *
 * @public
 * @class Application
 */
class Application {

  /**
   * Application constructor
   *
   * @public
   * @constructor
   * @param {Object} options
   */
  constructor(options = {}) {
    /**
     * Application UID
     *
     * @private
     * @type {String}
     */
    this.uid = utils.uniqueId(this)

    /**
     * Disposed
     *
     * @private
     * @type {Object}
     */
    this.disposed = false

    /**
     * Options
     *
     * @private
     * @type {Object}
     */
    this.options = options

    if(!this.options.router.routes) return console.error('Application requires routes', this.options)

    /**
     * Router.
     *
     * @private
     * @type {Object}
     */
    this.router = new Router({
      routes: this.options.router.routes
    })

    /**
     * Dispatcher.
     *
     * @private
     * @type {Object}
     */
    var dispatcher = this.dispatcher = new Dispatcher({
      app: this,
      getController: options.dispatcher.getController
    })

    this.router.on('match', function routeMatchCallback(route, params, options) {

      dispatcher.dispatch(route, params, options)

    })

  }

  /**
   * Dispose of the application
   *
   * @example
   *   application.dispose()
   *
   * @public
   */
  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

  /**
   * Start the application
   *
   * @example
   *   application.start()
   *
   * @public
   */
  start() {

    this.router.start()

  }

}

Object.assign(Application.prototype, {mixin})

export default Application
