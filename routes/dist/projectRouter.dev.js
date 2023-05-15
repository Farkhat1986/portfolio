"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _projectController = require("../controllers/projectController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectRouter = (0, _express["default"])();
exports.projectRouter = projectRouter;
projectRouter.get('/', _projectController.projectController.getAll);
projectRouter.post('/', _projectController.projectController.create);
//# sourceMappingURL=projectRouter.dev.js.map
