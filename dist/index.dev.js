"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _dotenv = require("dotenv");

var _database = require("./model/database.js");

var model = _interopRequireWildcard(require("./model/model.js"));

var _cors = _interopRequireDefault(require("cors"));

var _index = require("./routes/index.js");

var _ErrorHandlingMiddleware = require("./middlewware/ErrorHandlingMiddleware.js");

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _path = require("path");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mod = model;
(0, _dotenv.config)();
/** Инициализация сервера. */

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3333;
var HOST = process.env.HOST || 'localhost';
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"]["static"]((0, _path.resolve)('static')));
app.use((0, _expressFileupload["default"])());
app.use('/api', _index.rootRouter);
/** Обработка ошибок (последним). */

app.use(_ErrorHandlingMiddleware.errorHandler);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_database.sequelize.authenticate());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(_database.sequelize.sync());

        case 5:
          app.listen(PORT, HOST, function () {
            return console.log("Server started: http://".concat(HOST, ":").concat(PORT));
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

start();
//# sourceMappingURL=index.dev.js.map
