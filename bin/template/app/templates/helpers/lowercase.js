module.exports = (Handlebars) => {

  Handlebars.registerHelper('lowerCase', (s) => {

    return s.charAt(0).toLowerCase() + s.slice(1)

  })

}
