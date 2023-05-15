"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRoleMiddleware = checkRoleMiddleware;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var secret = process.env.SECRET_KEY;
/** Проверка роли пользователя. */

function checkRoleMiddleware(role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      var token = req.headers.authorization.split(' ')[1]; //Bearer token

      if (!token) {
        return res.status(401).json({
          message: "НЕТ ДОСТУПА !!!"
        });
      }

      var decoded = _jsonwebtoken["default"].verify(token, secret);

      if (decoded.role !== role) {
        return res.status(403).json({
          message: "НЕТ ДОСТУПА !!!"
        });
      }

      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({
        message: "НЕТ ДОСТУПА !!!"
      });
    }
  };
}
//# sourceMappingURL=checkRoleMiddleware.dev.js.map
