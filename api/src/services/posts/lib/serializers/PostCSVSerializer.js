import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

class PostCSVSerializer {
  serialize(data, fields, filename) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (!fields) {
      throw new Error('Expect fields to be not undefined nor null');
    }
    if (!filename) {
      throw new Error('Expect filename to be not undefined nor null');
    }

    const keys = Object.keys(fields);
    const values = Object.values(fields);

    const fieldsLength = values.length;
    const header = [];
    for(let i = 0; i < fieldsLength; i +=1) {
      if (values[i]) {
        header.push({
          id: keys[i],
          title: keys[i]  
        })
      }
    }

    const csvWriter = createCsvWriter({
      path: `/tmp/${filename}.csv`,
      header
    });

    console.log('data', data)
    return csvWriter.writeRecords(data);
  }
}

export default PostCSVSerializer;
