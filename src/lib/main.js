'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _app = require('./app.vue');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  入口文件

var vm = new _vue2.default({
  render: function render(e) {
    return e(_app2.default);
  }
}).$mount("#app");