module.exports = (server) => {

  server.get(/^[^.]+$|\.(?!(css|gif|ico|jpg|js|mp4|tiff|woff)$)([^.]+$)/, (req, res) => {

    res.render('index', {
      layout: false
    })

  })

}
