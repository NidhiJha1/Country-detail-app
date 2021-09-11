import React from 'react';

const SearchCountry = ({setSearchName}) =>{
    
    return(
       <>
         <div className="input-box-wrapper">
             <input type="text" placeholder="Search Country Name" onChange={event => {setSearchName(event.target.value)}} />  
         </div>
       </>
    );
};

export default SearchCountry;