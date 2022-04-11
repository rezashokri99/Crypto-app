import axios from "axios"

const fetchCoinsRequest = () => {
    return { type: "FETCH_COINS_REQUEST" }
}

const fetchCoinsSuccess = (coins) => {
    return { type: "FETCH_COINS_SUCCESS", payload: coins }
}


const fetchCoinsFailure = (error) => {
    return { type: "FETCH_COINS_FAILURE", payload: error }
}

export const fetchCoins = () => {
    
    return (dispatch) => {

        dispatch(fetchCoinsRequest());
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false")
            .then((response) => dispatch(fetchCoinsSuccess(response.data)))
            .catch((error) => dispatch(fetchCoinsFailure(error.massage)));
        
    }
}