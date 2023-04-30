import store from "../global-store/store";

class Api {
  constructor(store) {
    this.state = store.getState();
  }

  async getWords(group, page) {
    const response = await fetch(`http://localhost:2000/words/?group=${group}&page=${page}`);
    const data = await response.json();
    return data;
  }
}


export default new Api(store);
