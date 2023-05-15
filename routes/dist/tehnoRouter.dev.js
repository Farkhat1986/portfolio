"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tehnoRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _tehnoController = require("../controllers/tehnoController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tehnoRouter = (0, _express["default"])();
exports.tehnoRouter = tehnoRouter;
tehnoRouter.get('/', _tehnoController.tehnoController.getAll);
tehnoRouter.post('/', _tehnoController.tehnoController.create);
//# sourceMappingURL=tehnoRouter.dev.js.map
