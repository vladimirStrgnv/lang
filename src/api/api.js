import store from "../global-store/store";

class Api {
  constructor(store) {
    this.state = store.getState();
  }

  getWords() {
    console.log(this.state.auth.token)
  }
}


export default new Api(store);
;