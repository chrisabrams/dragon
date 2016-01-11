'use strict';

import EventEmitter from 'chrisabrams-eventemitter'

var eventEmitter = new EventEmitter()

class Events {}

Events.prototype.emit  = eventEmitter.emitEvent.bind(eventEmitter)
Events.prototype.on    = eventEmitter.addListener.bind(eventEmitter)
Events.prototype.once  = eventEmitter.addOnceListener.bind(eventEmitter)
Events.prototype.off   = eventEmitter.removeListener.bind(eventEmitter)

export default Events
