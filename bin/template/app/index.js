var Dragon    = require('dragon'),
    routes    = require('./routes'),
    UserModel = require('./models/user')

var app = new Dragon.Application({
  routes
})

app.indisposable = true

app.models = {}

app.models.user = new UserModel()

app.start()
