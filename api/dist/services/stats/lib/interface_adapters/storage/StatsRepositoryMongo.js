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

var _Stats = _interopRequireDefault(require("../../entities/Stats"));

var _config = _interopRequireDefault(require("../../../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StatsRepositoryMongo =
/*#__PURE__*/
function () {
  function StatsRepositoryMongo() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, StatsRepositoryMongo);
    var url = _config["default"].db.url;
    var client = new _mongodb.MongoClient(url);
    client.connect(function (err) {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }

      _this.db = client.db(_config["default"].db.dbname);
      _this.collection = _this.db.collection("stats");
      _this.sequences = _this.db.collection("sequences");
    });
  }

  (0, _createClass2["default"])(StatsRepositoryMongo, [{
    key: "_getValueForNextSequence",
    value: async function _getValueForNextSequence() {
      var sequenceDoc = await this.sequences.findOneAndUpdate({
        _id: "stats"
      }, {
        $inc: {
          sequence_value: 1
        }
      }, {
        returnOriginal: false
      });
      return sequenceDoc.value.sequence_value;
    }
  }, {
    key: "persist",
    value: async function persist(statsEntity) {
      var augmentedEntity = _objectSpread({}, statsEntity, {
        id: await this._getValueForNextSequence()
      });

      await this.collection.insertOne(augmentedEntity);
      return augmentedEntity;
    }
  }, {
    key: "merge",
    value: function merge(stats) {
      return this.collection.replaceOne({
        id: stats.id
      }, stats);
    }
  }, {
    key: "remove",
    value: function remove(stats) {
      return this.collection.replaceOne({
        id: stats.id
      }, stats);
    }
  }, {
    key: "getByAccountId",
    value: function getByAccountId(accountId) {
      return this.collection.find({
        accountId: accountId
      }).toArray();
    }
  }, {
    key: "getLatestByAccountId",
    value: function getLatestByAccountId(accountId) {
      return this.collection.findOne({
        accountId: accountId
      }).sort({
        _id: -1
      });
    }
  }, {
    key: "getByDebateId",
    value: function getByDebateId(debateId) {
      return this.collection.find({
        debateId: debateId
      }).toArray();
    }
  }, {
    key: "getLatestByDebateId",
    value: function getLatestByDebateId(debateId) {
      return this.collection.find({
        debateId: debateId
      }).sort({
        _id: -1
      }).toArray();
    }
  }, {
    key: "find",
    value: function find() {
      return this.collection.find().toArray();
    }
  }]);
  return StatsRepositoryMongo;
}();

var _default = StatsRepositoryMongo;
exports["default"] = _default;