import axios from "axios";

import config from "../../../../../config";

class HTTPRequesterAxios {
  constructor() {

  }

  async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HTTPRequesterAxios;
