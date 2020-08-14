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

var _User = _interopRequireDefault(require("../../entities/User"));

var _config = _interopRequireDefault(require("../../../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UserRepositoryInMemory =
/*#__PURE__*/
function () {
  function UserRepositoryInMemory() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, UserRepositoryInMemory);
    var url = _config["default"].db.url;
    var client = new _mongodb.MongoClient(url);
    client.connect(function (err) {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }

      _this.db = client.db(_config["default"].db.dbname);
      _this.collection = _this.db.collection("iam");
      _this.sequences = _this.db.collection("sequences");
    });
  }

  (0, _createClass2["default"])(UserRepositoryInMemory, [{
    key: "_getValueForNextSequence",
    value: async function _getValueForNextSequence() {
      var sequenceDoc = await this.sequences.findOneAndUpdate({
        _id: "iam"
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
    value: async function persist(userEntity) {
      var augmentedEntity = _objectSpread({}, userEntity, {
        id: await this._getValueForNextSequence()
      });

      await this.collection.insertOne(augmentedEntity);
      return augmentedEntity;
    }
  }, {
    key: "merge",
    value: function merge(user) {
      return this.collection.replaceOne({
        id: user.id
      }, user);
    }
  }, {
    key: "remove",
    value: function remove(userId) {
      return this.collection.findOneAndDelete({
        id: userId
      });
    }
  }, {
    key: "get",
    value: function get(userId) {
      return this.collection.findOne({
        id: userId
      });
    }
  }, {
    key: "getByAccountId",
    value: function getByAccountId(id) {
      return this.collection.find({
        accountId: id
      }).toArray();
    }
  }, {
    key: "getByUserIdAccountId",
    value: function getByUserIdAccountId(userId, accountId) {
      return this.collection.findOne({
        accountId: accountId,
        id: userId
      });
    }
  }, {
    key: "getByEmail",
    value: function getByEmail(userEmail) {
      return this.collection.findOne({
        email: userEmail
      });
    }
  }, {
    key: "getByToken",
    value: function getByToken(token) {
      return this.collection.findOne({
        token: token
      });
    }
  }, {
    key: "find",
    value: function find() {
      return this.collection.find().toArray();
    }
  }]);
  return UserRepositoryInMemory;
}();

var _default = UserRepositoryInMemory;
exports["default"] = _default;