import { useEffect, useState } from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import HomePage from "./pages/HomePage";
import AddBeerPage from "./pages/AddBeerPage";
import RandomBeer from "./pages/RandomBeerPage";
function App() {
  const [beers, setBeers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); 
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      {error ? <h1>{error}</h1> : (beers ? <h1>API in</h1> : <h1>Loading...</h1>)}
      <h1>LAB | React IronBeers</h1>
      <Routes>
      <Route path='/randombeers' element={<RandomBeer/>} />
        <Route path="/home" element={<HomePage data={beers} />} />
        <Route path='/add' element={<AddBeerPage/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
