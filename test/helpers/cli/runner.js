require('6to5/register')
require('6to5/polyfill')

global.expect = require('chai').expect

var jsdom     = require('jsdom')
var $         = require('jquery')(jsdom.jsdom().parentWindow)

global.$      = $
