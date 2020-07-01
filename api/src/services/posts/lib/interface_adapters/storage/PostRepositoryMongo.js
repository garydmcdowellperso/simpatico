import { MongoClient } from "mongodb";

import Post from "../../entities/Post";
import config from "../../../../../config";

class PostRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("posts");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "posts" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    console.log("_getValueForNextSequence", sequenceDoc.value.sequence_value);
    return sequenceDoc.value.sequence_value;
  }

  async persist(postEntity) {
    const augmentedEntity = {
      ...postEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge(post) {
    return this.collection.replaceOne({ id: post.id }, post);
  }

  remove(post) {
    return this.collection.replaceOne({ id: post.id }, post);
  }

  get(postId) {
    return this.collection.findOne({ id: postId });
  }

  fetchPostsForModule(module, page, sort) {
    if (sort == 'Sort Ascending') {
      return this.collection.find({ module, deleted: false }).skip((page-1) * 5).limit(5).sort({timestamp:1}).toArray();
    }
    if (sort == 'Sort Descending') {
      return this.collection.find({ module, deleted: false }).skip((page-1) * 5).limit(5).sort({timestamp:-1}).toArray();
    }
    if (sort == 'Likes') {
      return this.collection.find({ module, deleted: false }).skip((page-1) * 5).limit(5).sort({likes:-1}).toArray();
    }
    if (sort == 'Dislikes') {
      return this.collection.find({ module, deleted: false }).skip((page-1) * 5).limit(5).sort({dislikes:-1}).toArray();
    }
    if (sort == 'Shares') {
      return this.collection.find({ module, deleted: false }).skip((page-1) * 5).limit(5).sort({shares:-1}).toArray();
    }
  }

  fetchAllPostsForModule(module, sort) {
    if (sort == 'Sort Ascending') {
      return this.collection.find({ module, deleted: false }).sort({timestamp:1}).toArray();
    }
    if (sort == 'Sort Descending') {
      return this.collection.find({ module, deleted: false }).sort({timestamp:-1}).toArray();
    }
    if (sort == 'Likes') {
      return this.collection.find({ module, deleted: false }).sort({likes:-1}).toArray();
    }
    if (sort == 'Dislikes') {
      return this.collection.find({ module, deleted: false }).sort({dislikes:-1}).toArray();
    }
    if (sort == 'Shares') {
      return this.collection.find({ module, deleted: false }).sort({shares:-1}).toArray();
    }
  }

  countPostsForModule(module) {
    return this.collection.countDocuments({ module, deleted: false });
  }

  fetchPosts(id) {
    return this.collection.find({ accountId: id, deleted: false }).toArray();
  }

  fetchFetchTopContributors(id) {
    return this.collection.aggregate([
      {"$group" : {_id:"$user", count:{$sum:1}}},
      {$sort:{"count":-1}}
    ]).toArray();
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default PostRepositoryMongo;
