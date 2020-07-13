class HTTPRequester {
  constructor(httpRequester) {
    this.httpRequester = httpRequester;
  }

  get(url) {
    return this.httpRequester.get(url);
  }
}

export default HTTPRequester;
