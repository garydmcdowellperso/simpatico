"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongodb = require("mongodb");

var _Module = _interopRequireDefault(require("../../entities/Module"));

var _config = _interopRequireDefault(require("../../../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ModuleRepositoryMongo =
/*#__PURE__*/
function () {
  function ModuleRepositoryMongo() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, ModuleRepositoryMongo);
    var url = _config["default"].db.url;
    var client = new _mongodb.MongoClient(url);
    client.connect(function (err) {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }

      _this.db = client.db(_config["default"].db.dbname);
      _this.collection = _this.db.collection("modules");
      _this.sequences = _this.db.collection("sequences");
    });
  }

  (0, _createClass2["default"])(ModuleRepositoryMongo, [{
    key: "_getValueForNextSequence",
    value: async function _getValueForNextSequence() {
      var sequenceDoc = await this.sequences.findOneAndUpdate({
        _id: "modules"
      }, {
        $inc: {
          sequence_value: 1
        }
      }, {
        returnOriginal: false
      });
      console.log("_getValueForNextSequence", sequenceDoc.value.sequence_value);
      return sequenceDoc.value.sequence_value;
    }
  }, {
    key: "persist",
    value: async function persist(pageEntity) {
      var augmentedEntity = _objectSpread({}, pageEntity, {
        id: await this._getValueForNextSequence()
      });

      await this.collection.insertOne(augmentedEntity);
      return augmentedEntity;
    }
  }, {
    key: "merge",
    value: function merge(page) {
      return this.collection.replaceOne({
        id: page.id
      }, page);
    }
  }, {
    key: "remove",
    value: function remove(page) {
      return this.collection.replaceOne({
        id: page.id
      }, page);
    }
  }, {
    key: "get",
    value: function get(pageId) {
      return this.collection.findOne({
        id: pageId
      });
    }
  }, {
    key: "getByTitle",
    value: function getByTitle(name) {
      return this.collection.findOne({
        title: title
      });
    }
  }, {
    key: "findByDebateId",
    value: function findByDebateId(debateId) {
      console.log('debateId');
      return this.collection.find({
        debateId: debateId
      }).toArray();
    }
  }, {
    key: "find",
    value: function find() {
      return this.collection.find({}).toArray();
    }
  }]);
  return ModuleRepositoryMongo;
}();

var _default = ModuleRepositoryMongo;
exports["default"] = _default;