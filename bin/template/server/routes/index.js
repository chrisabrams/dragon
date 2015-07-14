module.exports = (server) => {

  server.get('/', (req, res) => {

    res.render('index', {
      layout: false
    })

  })

}
