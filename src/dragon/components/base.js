'use strict';

import utils from '../utils'

class DragonComponent {

  constructor(options = {}) {
    this.uid = utils.uniqueId(this)

    this.options = options

  }

  dispose() {

    if(!this.disposed) {

      utils.dispose(this)

    }

  }

}

DragonComponent.prototype.disposed = false

export default DragonComponent
