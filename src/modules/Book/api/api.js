import axios from "axios";

async function getWords(group, page) {
    const response = await fetch(`http://localhost:2000/words/?group=${group}&page=${page}`);
    const data = await response.json();
    return data;
}

export default {getWords};