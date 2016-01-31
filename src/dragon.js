'use strict';

// Polyfills
// TODO: which of these are still needed?
import '../lib/polyfills/element.remove'
import '../lib/polyfills/node.prependchild'
import '../lib/polyfills/nodelist.queryselectorall'
import '../lib/polyfills/nodelist.remove'
import '../lib/polyfills/Object.assign'
import '../lib/polyfills/Array.from'

import Application  from './dragon/application/base'
import Collection   from './dragon/collections/base'
import Component    from './dragon/components/base'
import Controller   from './dragon/controllers/base'
import Dispatcher   from './dragon/router/dispatcher'
import EventEmitter from './dragon/events'
import Model        from './dragon/models/base'
import Router       from './dragon/router/base'
import Store        from './dragon/models/store'
import Utils        from './dragon/utils'
import View         from './dragon/views/base'

var Dragon = {
  //CollectionView : require('./dragon/views/collectionView'),
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Application,
  Collection,
  Component,
  Controller,
  Dispatcher,
  EventEmitter,
  Model,
  Router,
  Store,
  Utils,
  View
}

export {Application}
export {Collection}
export {Component}
export {Controller}
export {Dispatcher}
export {EventEmitter}
export {Model}
export {Router}
export {Store}
export {Utils}
export {View}
export default Dragon
