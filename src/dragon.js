require('../lib/polyfills/element.remove')
require('../lib/polyfills/node.prependchild')
require('../lib/polyfills/nodelist.queryselectorall')
require('../lib/polyfills/nodelist.remove')

var Dragon = {
  //Application    : require('./dragon/application'),
  //Collection     : require('./dragon/models/collection'),
  //CollectionView : require('./dragon/views/collectionView'),
  //Composer       : require('./dragon/composition/composer'),
  //Composition    : require('./dragon/composition/composition'),
  //Controller     : require('./dragon/controllers/controller'),
  //Dispatcher     : require('./dragon/router/dispatcher'),
  //EventBroker    : require('./dragon/lib/eventBroker'),
  //mediator       : require('./dragon/mediator/mediator'),
  //Model          : require('./dragon/models/model'),
  //Layout         : require('./dragon/views/layout'),
  //Route          : require('./dragon/router/route'),
  //Router         : require('./dragon/router/router'),
  //SyncMachine    : require('./dragon/models/syncMachine'),
  //utils          : require('./dragon/lib/utils'),
  View           : require('./dragon/views/base')
}

module.exports = Dragon
