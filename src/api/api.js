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

  createUserWord = async (wordId, difficulty = '' ) => {
    const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId}/words/${wordId}`, {
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

   getUserWords = async () => {
    const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId}/words`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.auth.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

   getAggregatedWords = async (section, page, wordsPerPage = 20) => {
    try {
      const filter = `%7B%22$and%22%3A%5B%7B%22group%22%3A${section}%7D%2C%7B%22page%22%3A${page}%7D%5D%7D`;
      const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId}/aggregatedWords?wordsPerPage=${wordsPerPage}&filter=${filter}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.state.auth.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data[0].paginatedResults;
    } catch (e) {

    }
  }

  deleteUserWord = async (wordId) => {
    const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId}/words/${wordId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.state.auth.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  getUserWord = async (wordId) => {
    const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId}/aggregatedWords/${wordId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.auth.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data[0];
  }

  refreshTokens = async () => {
    const response = await fetch(`${this.state.baseUrl}/users/${this.state.auth.userId} `, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.auth.refreshToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
}


export default new Api(store);
