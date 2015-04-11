require('../lib/polyfills/Array.from')
require('../lib/polyfills/element.remove')
require('../lib/polyfills/node.prependchild')
require('../lib/polyfills/nodelist.queryselectorall')
require('../lib/polyfills/nodelist.remove')
require('../lib/polyfills/Object.assign')

var Dragon = {
  //Application    : require('./dragon/application'),
  //CollectionView : require('./dragon/views/collectionView'),
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //Controller     : require('./dragon/controllers/controller'),
  //Dispatcher     : require('./dragon/router/dispatcher'),
  //EventBroker    : require('./dragon/lib/eventBroker'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Layout         : require('./dragon/views/layout'),
  //Route          : require('./dragon/router/route'),
  //Router         : require('./dragon/router/router'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  Collection     : require('./dragon/collections/base'),
  Events         : require('./dragon/events'),
  Model          : require('./dragon/models/base'),
  Utils          : require('./dragon/utils'),
  View           : require('./dragon/views/base')
}

module.exports = Dragon
