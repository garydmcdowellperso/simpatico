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

var _Account = _interopRequireDefault(require("../../entities/Account"));

var _config = _interopRequireDefault(require("../../../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AccountRepositoryMongo =
/*#__PURE__*/
function () {
  function AccountRepositoryMongo() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, AccountRepositoryMongo);
    var url = _config["default"].db.url;
    var client = new _mongodb.MongoClient(url);
    client.connect(function (err) {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }

      _this.db = client.db(_config["default"].db.dbname);
      _this.collection = _this.db.collection("accounts");
      _this.sequences = _this.db.collection("sequences");
    });
  }

  (0, _createClass2["default"])(AccountRepositoryMongo, [{
    key: "_getValueForNextSequence",
    value: async function _getValueForNextSequence() {
      var sequenceDoc = await this.sequences.findOneAndUpdate({
        _id: "accounts"
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
    value: async function persist(accountEntity) {
      var augmentedEntity = _objectSpread({}, accountEntity, {
        id: await this._getValueForNextSequence()
      });

      await this.collection.insertOne(augmentedEntity);
      return augmentedEntity;
    }
  }, {
    key: "merge",
    value: function merge(account) {
      return this.collection.replaceOne({
        id: account.id
      }, account);
    }
  }, {
    key: "remove",
    value: function remove(account) {
      return this.collection.replaceOne({
        id: account.id
      }, account);
    }
  }, {
    key: "get",
    value: function get(accountId) {
      return this.collection.findOne({
        id: accountId
      });
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      return this.collection.findOne({
        name: name
      });
    }
  }, {
    key: "find",
    value: function find() {
      return this.collection.find().toArray();
    }
  }]);
  return AccountRepositoryMongo;
}();

var _default = AccountRepositoryMongo;
exports["default"] = _default;