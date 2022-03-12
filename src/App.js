import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import Loader from "./components/Loader";
import MainContainer from "./components/MainContainer";

import { apiContext } from "./contexts/CoinsContext";
import getApi from "./services/api";


function App() {
  
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredcoins, setFilteredcoins] = useState([]);

  const coinsApi = useContext(apiContext);

  
  useEffect(() => {
    setCoins(coinsApi);
    
    const filtered = coins && coins.filter((coin) => coin.id.toLowerCase().includes(search.toLowerCase()));
    setFilteredcoins(filtered);
  }, [coinsApi, coins, search]);
  


  return (
    <>
      {
        filteredcoins ? <div className="App">
          <HeaderContainer coins={coins} />
          <MainContainer filteredcoins={filteredcoins} search={search} setSearch={setSearch} />
        </div> : 
        <Loader />
      }
    </>
  );
}

export default App;
