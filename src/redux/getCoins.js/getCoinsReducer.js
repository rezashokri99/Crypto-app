const initialState ={
    loading: false,
    coins: [],
    error: ""
}

const getCoinsReducer = (state=initialState, acion) => {
    switch (acion.type) {
        case "FETCH_COINS_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "FETCH_COINS_SUCCESS":
            return {
                loading: false,
                coins: acion.payload,
                error: ""
            }

        case "FETCH_COINS_FAILURE":
            return {
                loading: false,
                coins: [],
                error: acion.payload
            }
    
        default:
            return state;
    }
}



export default getCoinsReducer;