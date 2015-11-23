'use strict';

require('../lib/polyfills/Array.from')
require('../lib/polyfills/element.remove')
require('../lib/polyfills/node.prependchild')
require('../lib/polyfills/nodelist.queryselectorall')
require('../lib/polyfills/nodelist.remove')
require('../lib/polyfills/Object.assign')
require('object.observe')

var Dragon = {
  //CollectionView : require('./dragon/views/collectionView'),
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //Dispatcher     : require('./dragon/router/dispatcher'),
  //EventBroker    : require('./dragon/lib/eventBroker'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Application    : require('./dragon/application/base'),
  Collection     : require('./dragon/collections/base'),
  Component      : require('./dragon/components/base'),
  //ComponentAPI   : require('./dragon/components/api'),
  Controller     : require('./dragon/controllers/base'),
  Events         : require('./dragon/events'),
  Model          : require('./dragon/models/base'),
  Router         : require('./dragon/router/base'),
  Utils          : require('./dragon/utils'),
  View           : require('./dragon/views/base')
}

module.exports = Dragon
