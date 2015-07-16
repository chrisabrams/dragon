module.exports = (Handlebars) => {

  Handlebars.registerHelper('capitalize', (s) => {

    return s.charAt(0).toLowerCase() + s.slice(1)

  })

}
