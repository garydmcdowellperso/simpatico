import { MongoClient } from "mongodb";

import Account from "../../entities/Account";
import config from "../../../../../config";

class AccountRepositoryMongo {
  constructor() {
    const { url } = config.db;

    const client = new MongoClient(url);

    client.connect(err => {
      if (err) {
        console.log(err, 'Error connecting to Mongo');
        throw new Error("Error connecting to Mongo");
      }
      this.db = client.db(config.db.dbname);
      this.collection = this.db.collection("accounts");
      this.sequences = this.db.collection("sequences");
    });
  }

  async _getValueForNextSequence() {
    const sequenceDoc = await this.sequences.findOneAndUpdate(
      { _id: "accounts" },
      { $inc: { sequence_value: 1 } },
      { returnOriginal: false }
    );

    console.log("_getValueForNextSequence", sequenceDoc.value.sequence_value);
    return sequenceDoc.value.sequence_value;
  }

  async persist(accountEntity) {
    const augmentedEntity = {
      ...accountEntity,
      id: await this._getValueForNextSequence()
    };

    await this.collection.insertOne(augmentedEntity);

    return augmentedEntity;
  }

  merge(account) {
    return this.collection.replaceOne({ id: account.id }, account);
  }

  remove(account) {
    return this.collection.replaceOne({ id: account.id }, account);
  }

  get(accountId) {
    return this.collection.findOne({ id: accountId });
  }

  getByName(name) {
    return this.collection.findOne({ name });
  }

  find() {
    return this.collection.find().toArray();
  }
}

export default AccountRepositoryMongo;
