// https://github.com/plopjs/plop
// plop 能生成相应的模板代码

const component = require('./plop-templates/component/prompt.js')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('component', component)
  plop.setGenerator('store', storeGenerator)
}
