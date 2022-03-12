import React, { useEffect, useState } from 'react';
import getApi from '../services/api';


export const apiContext = React.createContext();

const CoinsContext = (props) => {
    
    const [coins, setcoins] = useState([]);

    useEffect(() => {
      const get = async () => {
        setcoins(await getApi());
      };
      get();
    }, [])

    return (
      <apiContext.Provider value={coins}>
        {props.children}
      </apiContext.Provider>
    )

}
 
export default CoinsContext;