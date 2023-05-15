"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tehnoController = void 0;

var _model = require("../model/model.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TehnoController =
/*#__PURE__*/
function () {
  function TehnoController() {
    _classCallCheck(this, TehnoController);
  }

  _createClass(TehnoController, [{
    key: "create",
    value: function create(req, res) {
      var name, tehno;
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = req.body.name;
              _context.next = 3;
              return regeneratorRuntime.awrap(_model.Tehno.create({
                name: name
              }));

            case 3:
              tehno = _context.sent;
              return _context.abrupt("return", res.json(tehno));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getAll",
    value: function getAll(req, res) {
      var tehno;
      return regeneratorRuntime.async(function getAll$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_model.Tehno.findAll());

            case 2:
              tehno = _context2.sent;
              return _context2.abrupt("return", res.json(tehno));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return TehnoController;
}();

var tehnoController = new TehnoController();
exports.tehnoController = tehnoController;
//# sourceMappingURL=tehnoController.dev.js.map
