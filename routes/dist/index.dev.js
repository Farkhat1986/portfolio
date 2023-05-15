"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _projectRouter = require("./projectRouter.js");

var _tehnoRouter = require("./tehnoRouter.js");

var _categoryRoutes = require("./categoryRoutes.js");

var _programRoutes = require("./programRoutes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootRouter = (0, _express["default"])(); //*rootRouter.use('/user', userRouter);*/

exports.rootRouter = rootRouter;
rootRouter.use('/project', _projectRouter.projectRouter);
rootRouter.use('/program', _programRoutes.programRoutes);
rootRouter.use('/tehno', _tehnoRouter.tehnoRouter);
rootRouter.use('/category', _categoryRoutes.categoryRouter);
//# sourceMappingURL=index.dev.js.map
