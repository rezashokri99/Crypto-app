import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
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
        coins.length > 1 ? <div className="App">
        <HeaderContainer coins={coins} />
          <Routes>
            <Route path="/" element={<MainContainer filteredcoins={filteredcoins} setFilteredcoins={setFilteredcoins} search={search} setSearch={setSearch} />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>  
          <Footer />
        </div> : 
        <Loader />
      }
    </>
  );
}

export default App;
