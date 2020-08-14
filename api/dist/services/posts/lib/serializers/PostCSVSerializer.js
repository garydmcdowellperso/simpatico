"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _csvWriter = require("csv-writer");

var PostCSVSerializer =
/*#__PURE__*/
function () {
  function PostCSVSerializer() {
    (0, _classCallCheck2["default"])(this, PostCSVSerializer);
  }

  (0, _createClass2["default"])(PostCSVSerializer, [{
    key: "serialize",
    value: function serialize(data, fields, filename) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (!fields) {
        throw new Error('Expect fields to be not undefined nor null');
      }

      if (!filename) {
        throw new Error('Expect filename to be not undefined nor null');
      }

      var keys = Object.keys(fields);
      var values = Object.values(fields);
      var fieldsLength = values.length;
      var header = [];

      for (var i = 0; i < fieldsLength; i += 1) {
        if (values[i]) {
          header.push({
            id: keys[i],
            title: keys[i]
          });
        }
      }

      var csvWriter = (0, _csvWriter.createObjectCsvWriter)({
        path: "/tmp/".concat(filename, ".csv"),
        header: header
      });
      console.log('data', data);
      return csvWriter.writeRecords(data);
    }
  }]);
  return PostCSVSerializer;
}();

var _default = PostCSVSerializer;
exports["default"] = _default;