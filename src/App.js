import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SearchCountry from './components/SearchCountry';


function App() {
  const [country,setCountry] = useState([]);
  const [searchName,setSearchName] = useState('');


   const fetchData = async() => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    setCountry(data);
    
  };
 useEffect( () => {
  fetchData();      
  },[country]);

  

 
  return (
    <>
    <SearchCountry setSearchName={setSearchName}/>
    <CountryList country={country} searchName={searchName}/>
    </>
  );
}

export default App;
