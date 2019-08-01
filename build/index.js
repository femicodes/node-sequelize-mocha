"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _debug = _interopRequireDefault(require("debug"));

var _morgan = _interopRequireDefault(require("morgan"));

var _BookRoutes = _interopRequireDefault(require("./routes/BookRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/api/v1/books', _BookRoutes["default"]);
var port = process.env.PORT || 6000;
var debugged = (0, _debug["default"])('express');
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to this API.'
  });
});
app.listen(port, function () {
  debugged("Server running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;