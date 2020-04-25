import { MongoClient } from "mongodb";

import Page from "../../entities/Page";
import config from "../../../../../config";

class PageRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("pages");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "pages" },
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

  getByName(name) {
    return this.collection.findOne({ name });
  }

  findByDebateId(debateId) {
    return this.collection.find({ debateId }).toArray();
  }
}

export default PageRepositoryMongo;
