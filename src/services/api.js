import axios from 'axios';

const Api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/ditto"
})

export default Api;