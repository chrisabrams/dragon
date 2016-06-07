'use strict'

/**
 * Polyfills
 *
 * @ignore
 */
import '../lib/polyfills/element.remove'
import '../lib/polyfills/node.prependchild'
import '../lib/polyfills/nodelist.queryselectorall'
import '../lib/polyfills/nodelist.remove'
import '../lib/polyfills/Array.from'

import Application         from './dragon/application'
import Collection          from './dragon/collections'
import CollectionView      from './dragon/views/collection-view'
import Component           from './dragon/components'
import Controller          from './dragon/controllers'
import Dispatcher          from './dragon/router/dispatcher'
import EventEmitter        from './dragon/events'
import EventSourceMediator from './dragon/event-source'
import Mediator            from './dragon/mediator'
import Model               from './dragon/models'
import Router              from './dragon/router'
import Store               from './dragon/models/store'
import Utils               from './dragon/utils'
import View                from './dragon/views'

var Dragon = {
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Application,
  Collection,
  CollectionView,
  Component,
  Controller,
  Dispatcher,
  EventEmitter,
  EventSource: EventSourceMediator,
  Mediator,
  Model,
  Router,
  Store,
  Utils,
  View
}

export {Application}
export {Collection}
export {CollectionView}
export {Component}
export {Controller}
export {Dispatcher}
export {EventEmitter}
export {EventSourceMediator}
export {Mediator}
export {Model}
export {Router}
export {Store}
export {Utils}
export {View}

export default Dragon
