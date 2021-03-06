import { MongoClient } from "mongodb";

import Debate from "../../entities/Debate";
import config from "../../../../../config";

class DebateRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("debates");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "debates" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    return sequenceDoc.value.sequence_value;
  }

  async persist(debateEntity) {
    const augmentedEntity = {
      ...debateEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge(debate) {
    return this.collection.replaceOne({ id: debate.id }, debate);
  }

  remove(debate) {
    return this.collection.replaceOne({ id: debate.id }, debate);
  }

  get(debateId) {
    return this.collection.findOne({ id: debateId, deleted: false });
  }

  getByName(name) {
    return this.collection.findOne({ name, deleted: false });
  }

  getByAccountId(id) {
    return this.collection.find({ accountId: id, deleted: false }).toArray();
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default DebateRepositoryMongo;
