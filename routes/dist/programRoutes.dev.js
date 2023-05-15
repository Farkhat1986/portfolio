"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.programRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _programController = require("../controllers/programController.js");

var _checkRoleMiddleware = require("../middlewware/checkRoleMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var programRoutes = (0, _express["default"])();
exports.programRoutes = programRoutes;
programRoutes.post('/', (0, _checkRoleMiddleware.checkRoleMiddleware)("ADMIN"), _programController.programController.create);
programRoutes.get('/', _programController.programController.getAll);
programRoutes.get('/:id', _programController.programController.getOne);
//# sourceMappingURL=programRoutes.dev.js.map
