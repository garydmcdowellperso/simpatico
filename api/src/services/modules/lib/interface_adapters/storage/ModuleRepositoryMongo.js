import { MongoClient } from "mongodb";

import Module from "../../entities/Module";
import config from "../../../../../config";

class ModuleRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("modules");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "modules" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    console.log("_getValueForNextSequence", sequenceDoc.value.sequence_value);
    return sequenceDoc.value.sequence_value;
  }

  async persist(pageEntity) {
    const augmentedEntity = {
      ...pageEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge(page) {
    return this.collection.replaceOne({ id: page.id }, page);
  }

  remove(page) {
    return this.collection.replaceOne({ id: page.id }, page);
  }

  get(pageId) {
    return this.collection.findOne({ id: pageId });
  }

  getByTitle(name) {
    return this.collection.findOne({ title });
  }

  findByDebateId(debateId) {
    console.log('debateId', )
    return this.collection.find({ debateId }).toArray();
  }

  find() {
    return this.collection.find({}).toArray();
  }

}

export default ModuleRepositoryMongo;
