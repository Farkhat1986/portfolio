"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.programController = void 0;

var _model = require("../model/model.js");

var _uuid = require("uuid");

var _path = require("path");

var _ApiError = require("../error/ApiError.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProgramController =
/*#__PURE__*/
function () {
  function ProgramController() {
    _classCallCheck(this, ProgramController);
  }

  _createClass(ProgramController, [{
    key: "create",
    value: function create(req, res, next) {
      var _req$body, name, description, price, categoriesId, tehnoId, image, fileName, program;

      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, categoriesId = _req$body.categoriesId, tehnoId = _req$body.tehnoId;
              image = req.files.image;
              fileName = (0, _uuid.v4)() + '.jpg';
              image.mv((0, _path.resolve)((0, _path.resolve)((0, _path.dirname)('')), 'static', fileName));
              _context.next = 7;
              return regeneratorRuntime.awrap(_model.Program.create({
                name: name,
                description: description,
                price: price,
                categoriesId: categoriesId,
                tehnoId: tehnoId,
                image: fileName
              }));

            case 7:
              program = _context.sent;
              return _context.abrupt("return", res.json(program));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(_ApiError.ApiError.badRequest(_context.t0.message)));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "getAll",
    value: function getAll(req, res) {
      var _req$query, categoriesId, tehnoId, limit, page, offset, program;

      return regeneratorRuntime.async(function getAll$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$query = req.query, categoriesId = _req$query.categoriesId, tehnoId = _req$query.tehnoId, limit = _req$query.limit, page = _req$query.page;
              page = page || 1;
              limit = limit || 10;
              offset = page * limit - limit;

              if (!(!categoriesId && !tehnoId)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 7;
              return regeneratorRuntime.awrap(_model.Program.findAndCountAll());

            case 7:
              program = _context2.sent;

            case 8:
              if (!(!categoriesId && tehnoId)) {
                _context2.next = 12;
                break;
              }

              _context2.next = 11;
              return regeneratorRuntime.awrap(_model.Program.findAndCountAll({
                where: {
                  tehnoId: tehnoId
                },
                limit: limit,
                offset: offset
              }));

            case 11:
              program = _context2.sent;

            case 12:
              if (!(categoriesId && !tehnoId)) {
                _context2.next = 16;
                break;
              }

              _context2.next = 15;
              return regeneratorRuntime.awrap(_model.Program.findAndCountAll({
                where: {
                  categoriesId: categoriesId
                },
                limit: limit,
                offset: offset
              }));

            case 15:
              program = _context2.sent;

            case 16:
              if (!(categoriesId && tehnoId)) {
                _context2.next = 20;
                break;
              }

              _context2.next = 19;
              return regeneratorRuntime.awrap(_model.Program.findAndCountAll({
                where: {
                  categoriesId: categoriesId,
                  tehnoId: tehnoId
                },
                limit: limit,
                offset: offset
              }));

            case 19:
              program = _context2.sent;

            case 20:
              return _context2.abrupt("return", res.json(program));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getOne",
    value: function getOne(req, res) {
      var id, program;
      return regeneratorRuntime.async(function getOne$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_model.Program.findOne({
                where: {
                  id: id
                }
              }));

            case 3:
              program = _context3.sent;
              return _context3.abrupt("return", res.json(program));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return ProgramController;
}();

var programController = new ProgramController();
exports.programController = programController;
//# sourceMappingURL=programController.dev.js.map
