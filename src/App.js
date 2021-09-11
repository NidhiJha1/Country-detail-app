import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SearchCountry from './components/SearchCountry';


function App() {
  const [countries,setCountries] = useState([]);
  const [searchName,setSearchName] = useState('');


    const fetchData = async() => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    if(!response.ok){
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    setCountries(data);
    
  };
  
 useEffect( () => {
   try{
     fetchData();
   }catch(error){
    console.log(error.message);
   }      
  },[]);


useEffect(() => {
    setCountries(countries.filter(item => item.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1));
 },[searchName]);
  

 
  return (
    <>
    <SearchCountry setSearchName={setSearchName}/>
    <CountryList countries={countries}/>
    </>
  );
}

export default App;
