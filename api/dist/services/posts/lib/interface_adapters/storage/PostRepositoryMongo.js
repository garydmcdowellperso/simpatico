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

var _Post = _interopRequireDefault(require("../../entities/Post"));

var _config = _interopRequireDefault(require("../../../../../config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PostRepositoryMongo =
/*#__PURE__*/
function () {
  function PostRepositoryMongo() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, PostRepositoryMongo);
    var url = _config["default"].db.url;
    var client = new _mongodb.MongoClient(url);
    client.connect(function (err) {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }

      _this.db = client.db(_config["default"].db.dbname);
      _this.collection = _this.db.collection("posts");
      _this.sequences = _this.db.collection("sequences");
    });
  }

  (0, _createClass2["default"])(PostRepositoryMongo, [{
    key: "_getValueForNextSequence",
    value: async function _getValueForNextSequence() {
      var sequenceDoc = await this.sequences.findOneAndUpdate({
        _id: "posts"
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
    value: async function persist(postEntity) {
      var augmentedEntity = _objectSpread({}, postEntity, {
        id: await this._getValueForNextSequence()
      });

      await this.collection.insertOne(augmentedEntity);
      return augmentedEntity;
    }
  }, {
    key: "merge",
    value: function merge(post) {
      return this.collection.replaceOne({
        id: post.id
      }, post);
    }
  }, {
    key: "remove",
    value: function remove(post) {
      return this.collection.replaceOne({
        id: post.id
      }, post);
    }
  }, {
    key: "get",
    value: function get(postId) {
      return this.collection.findOne({
        id: postId
      });
    }
  }, {
    key: "fetchPostsForModule",
    value: function fetchPostsForModule(module, page, sort) {
      if (sort == 'Sort Ascending') {
        return this.collection.find({
          module: module,
          deleted: false
        }).skip((page - 1) * 5).limit(5).sort({
          timestamp: 1
        }).toArray();
      }

      if (sort == 'Sort Descending') {
        return this.collection.find({
          module: module,
          deleted: false
        }).skip((page - 1) * 5).limit(5).sort({
          timestamp: -1
        }).toArray();
      }

      if (sort == 'Likes') {
        return this.collection.find({
          module: module,
          deleted: false
        }).skip((page - 1) * 5).limit(5).sort({
          likes: -1
        }).toArray();
      }

      if (sort == 'Dislikes') {
        return this.collection.find({
          module: module,
          deleted: false
        }).skip((page - 1) * 5).limit(5).sort({
          dislikes: -1
        }).toArray();
      }

      if (sort == 'Shares') {
        return this.collection.find({
          module: module,
          deleted: false
        }).skip((page - 1) * 5).limit(5).sort({
          shares: -1
        }).toArray();
      }
    }
  }, {
    key: "fetchAllPostsForModule",
    value: function fetchAllPostsForModule(module, sort) {
      if (sort == 'Sort Ascending') {
        return this.collection.find({
          module: module,
          deleted: false
        }).sort({
          timestamp: 1
        }).toArray();
      }

      if (sort == 'Sort Descending') {
        return this.collection.find({
          module: module,
          deleted: false
        }).sort({
          timestamp: -1
        }).toArray();
      }

      if (sort == 'Likes') {
        return this.collection.find({
          module: module,
          deleted: false
        }).sort({
          likes: -1
        }).toArray();
      }

      if (sort == 'Dislikes') {
        return this.collection.find({
          module: module,
          deleted: false
        }).sort({
          dislikes: -1
        }).toArray();
      }

      if (sort == 'Shares') {
        return this.collection.find({
          module: module,
          deleted: false
        }).sort({
          shares: -1
        }).toArray();
      }
    }
  }, {
    key: "countPostsForModule",
    value: function countPostsForModule(module) {
      return this.collection.countDocuments({
        module: module,
        deleted: false
      });
    }
  }, {
    key: "fetchPosts",
    value: function fetchPosts(id) {
      return this.collection.find({
        accountId: id,
        deleted: false
      }).toArray();
    }
  }, {
    key: "fetchFetchTopContributors",
    value: function fetchFetchTopContributors(id) {
      return this.collection.aggregate([{
        "$group": {
          _id: "$user",
          count: {
            $sum: 1
          }
        }
      }, {
        $sort: {
          "count": -1
        }
      }]).toArray();
    }
  }, {
    key: "find",
    value: function find() {
      return this.collection.find().toArray();
    }
  }]);
  return PostRepositoryMongo;
}();

var _default = PostRepositoryMongo;
exports["default"] = _default;