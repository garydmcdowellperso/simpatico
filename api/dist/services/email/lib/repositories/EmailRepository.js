"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EmailRepository =
/*#__PURE__*/
function () {
  function EmailRepository(repository) {
    (0, _classCallCheck2["default"])(this, EmailRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(EmailRepository, [{
    key: "persist",
    value: function persist(debateEntity) {
      return this.repository.persist(debateEntity);
    }
  }]);
  return EmailRepository;
}();

var _default = EmailRepository;
exports["default"] = _default;