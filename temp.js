var detective = require('detective'),
    fs   = require('fs'),
    path = require('path'),
    resolve = require('resolve')

var filePath = path.join(process.cwd(), './foo.js')
var file = fs.readFileSync(filePath, 'utf8')
//var evalObj = eval('(function() { ' + file + '  })();');

//console.log(evalObj)
console.log("filePath", filePath)
var requires = detective(file)
console.log("requires", requires)
filePath = filePath.split('/')
filePath.pop()
filePath = filePath.join('/')
console.log("filePath", filePath)

requires.forEach(function(item) {
  console.log(path.join(filePath, item))
})
//console.dir(requires);

var res = resolve.sync('./foo', { basedir: path.resolve(__dirname) })
console.log("res", res)
