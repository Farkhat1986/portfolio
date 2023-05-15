"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryController = void 0;

var _model = require("../model/model.js");

var _ApiError = require("../error/ApiError.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CategoryController =
/*#__PURE__*/
function () {
  function CategoryController() {
    _classCallCheck(this, CategoryController);
  }

  _createClass(CategoryController, [{
    key: "create",
    value: function create(req, res) {
      var name, categories;
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = req.body.name;
              _context.next = 3;
              return regeneratorRuntime.awrap(_model.Categories.create({
                name: name
              }));

            case 3:
              categories = _context.sent;
              return _context.abrupt("return", res.json(categories));

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
      var categoriesList;
      return regeneratorRuntime.async(function getAll$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_model.Categories.findAll());

            case 2:
              categoriesList = _context2.sent;
              return _context2.abrupt("return", res.json(categoriesList));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getOne",
    value: function getOne(req, res, next) {
      var id, category;
      return regeneratorRuntime.async(function getOne$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_model.Categories.findOne({
                where: {
                  id: id
                }
              }));

            case 3:
              category = _context3.sent;

              if (category) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", next(res.json(_ApiError.ApiError.badRequest("Нет такой фигни"))));

            case 6:
              return _context3.abrupt("return", res.json(category));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return CategoryController;
}();

var categoryController = new CategoryController();
exports.categoryController = categoryController;
//# sourceMappingURL=categoryController.dev.js.map
