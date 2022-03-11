// import axios from "axios";

// const getApi = async () => {
//     const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//     return data.data;
// }

// export default getApi;

import axios from "axios";
const getApi = async() => {
    const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false");
    return data.data
}

export default getApi;