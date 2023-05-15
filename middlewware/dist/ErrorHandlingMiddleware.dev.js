"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = errorHandler;

var _ApiError = require("../error/ApiError.js");

var apiError = new _ApiError.ApiError();

function errorHandler(err, req, res, next) {
  if (err instanceof _ApiError.ApiError) {
    return res.status(err.status).json({
      message: err.message
    });
  }

  return res.status(500).json({
    message: 'ЧТО ТО ПОШЛО НЕ ТАК !!!'
  });
}
//# sourceMappingURL=ErrorHandlingMiddleware.dev.js.map
