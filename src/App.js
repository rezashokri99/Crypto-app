import axios from "axios";
import {  useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import HeaderContainer from "./components/HeaderContainer";
import Loader from "./components/Loader";
import MainContainer from "./components/MainContainer";

import {  useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./redux/getCoins.js/getCoinsAction";



function App() {
  
  const [search, setSearch] = useState("");
  const [filteredcoins, setFilteredcoins] = useState([]);

  const dispatch = useDispatch();
  const coinsApi = useSelector(state => state);
  
  useEffect(() => {
    dispatch(fetchCoins());
  }, [])

  useEffect(() => {
    
    const filtered = coinsApi.coins && coinsApi.coins.filter((coin) => coin.id.toLowerCase().includes(search.toLowerCase()));
    setFilteredcoins(filtered);
  }, [coinsApi, search]);
  


  return (
    <>
      {
        coinsApi.coins.length > 1 ? <div className="App">
        <HeaderContainer coins={coinsApi.coins} />
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
