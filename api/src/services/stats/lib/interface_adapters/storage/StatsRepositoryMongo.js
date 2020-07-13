import { MongoClient } from "mongodb";

import Stats from "../../entities/Stats";
import config from "../../../../../config";

class StatsRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("stats");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "stats" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    return sequenceDoc.value.sequence_value;
  }

  async persist(statsEntity) {
    const augmentedEntity = {
      ...statsEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge(stats) {
    return this.collection.replaceOne({ id: stats.id }, stats);
  }

  remove(stats) {
    return this.collection.replaceOne({ id: stats.id }, stats);
  }

  getByAccountId(accountId) {
    return this.collection.find({ accountId }).toArray();
  }

  getLatestByAccountId(accountId) {
    return this.collection.findOne({ accountId }).sort({ _id: -1 });
  }

  getByDebateId(debateId) {
    return this.collection.find({ debateId }).toArray();
  }

  getLatestByDebateId(debateId) {
    return this.collection.find({ debateId }).sort({ _id: -1 }).toArray();
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default StatsRepositoryMongo;
