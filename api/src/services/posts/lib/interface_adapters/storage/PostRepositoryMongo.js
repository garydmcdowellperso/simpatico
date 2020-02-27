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

  merge() {
    throw new Error("Post not found");
  }

  remove(postId) {
    return this.collection.findOneAndDelete({ id: postId });
  }

  get(postId) {
    return this.collection.findOne({ id: postId });
  }

  fetchPostsForThread(thread) {
    return this.collection.find({ thread }).toArray();
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default PostRepositoryMongo;
