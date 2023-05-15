"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _categoryController = require("../controllers/categoryController.js");

var _checkRoleMiddleware = require("../middlewware/checkRoleMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var categoryRouter = (0, _express["default"])();
exports.categoryRouter = categoryRouter;
categoryRouter.get('/', _categoryController.categoryController.getAll);
categoryRouter.post('/', _categoryController.categoryController.create); //*checkRoleMiddleware("ADMIN")/
//# sourceMappingURL=categoryRoutes.dev.js.map
