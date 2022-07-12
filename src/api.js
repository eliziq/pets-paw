// import 'dotenv/config'
//Base URL
const base_url = "https://api.thecatapi.com/v1/";

//Search
const search = `${base_url}/breeds/search?q=:{search-input}?api_key=${process.env.REACT_APP_CAT_API}`;

//Votes
const votes = `${base_url}votes?api_key=${process.env.REACT_APP_CAT_API}`;

const specific_vote = `${base_url}votes/:{vote_id}?api_key=${process.env.REACT_APP_CAT_API}`;

//Favourites

const favourites = `${base_url}favourites?api_key=${process.env.REACT_APP_CAT_API}`;

const specific_favourite = `${base_url}votes/:{favourite_id}?api_key=${process.env.REACT_APP_CAT_API}`;

//Categories   must add limits to state
const limit = 5;

export const all_breeds = () =>
  `${base_url}breeds?api_key=${process.env.REACT_APP_CAT_API}&limit=${limit}`;

console.log(all_breeds());
console.log(process.env.REACT_APP_CAT_API);
