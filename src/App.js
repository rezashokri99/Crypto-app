import { useContext, useEffect, useState } from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import MainContainer from "./components/MainContainer";
import CoinsContext from "./contexts/CoinsContext";

import { apiContext } from "./contexts/CoinsContext";

function App() {
  
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredcoins, setFilteredcoins] = useState([]);

  const coinsApi = useContext(apiContext);
  

  useEffect(() => {
    setCoins(coinsApi);
    

    const filtered = coins && coins.filter((coin) => coin.id.toLowerCase().includes(search.toLowerCase()));
      setFilteredcoins(filtered);
  }, [coinsApi, coins]);



  return (
      <div className="App">
        <HeaderContainer coins={coins} />
        <MainContainer filteredcoins={filteredcoins} />
      </div>
  );
}

export default App;
