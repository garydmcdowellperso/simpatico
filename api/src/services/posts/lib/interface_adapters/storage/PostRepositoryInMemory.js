class PostRepositoryInMemory {
  _dataAsArray() {
    return Object.keys(this.data).map(key => this.data[key]);
  }

  constructor() {
    this.index = 0;
    this.data = [];
  }

  persist(postEntity) {
    const row = { ...postEntity };
    const rowId = (this.index += 1);
    row.id = rowId;
    this.data[rowId-1] = row;
    return Promise.resolve(row);
  }

  merge(postEntity) {
    const row = this.data[postEntity.id];
    Object.assign(row, postEntity);
    return Promise.resolve(row);
  }

  remove(postId) {
    delete this.data[postId];
    return Promise.resolve();
  }

  get(postId) {
    return Promise.resolve(this.data[postId]);
  }

  getAllPosts() {
    return Promise.resolve(this.data);
  }

  find() {
    return Promise.resolve(this._dataAsArray());
  }
}

export default PostRepositoryInMemory;
