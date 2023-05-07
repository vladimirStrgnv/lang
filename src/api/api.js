import store from "../global-store/store";

class Api {
  constructor(store) {
    this.state = store.getState();
    
  }

  getWords =  async (group, page) => {
    const response = await fetch(`${this.state.baseUrl}/words/?group=${group}&page=${page}`);
    const data = await response.json();
    return data;
  }

  getWord = async (id) => {
    const response = await fetch(`${this.state.baseUrl}/words/${id}`);
    const data = await response.json();
    return data;
  }

  createUserWord = async (userId, wordId, difficulty = '' ) => {
    const response = await fetch(`${this.state.baseUrl}/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.state.auth.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({difficulty: difficulty}),
    });
    const data = await response.json();
    return data;
  }
}


export default new Api(store);
