import { MongoClient } from "mongodb";

import User from "../../entities/User";
import config from "../../../../../config";

class UserRepositoryInMemory {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("iam");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "iam" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    console.log("_getValueForNextSequence", sequenceDoc.value.sequence_value);
    return sequenceDoc.value.sequence_value;
  }

  async persist(userEntity) {
    const augmentedEntity = {
      ...userEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge() {
    throw new Error("User not found");
  }

  remove(userId) {
    return this.collection.findOneAndDelete({ id: userId });
  }

  get(userId) {
    return this.collection.findOne({ id: userId });
  }

  getByEmail(userEmail) {
    return this.collection.findOne({ email: userEmail });
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default UserRepositoryInMemory;
