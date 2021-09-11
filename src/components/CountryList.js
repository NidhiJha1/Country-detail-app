import React from 'react';



const CountryList = ({country,searchName}) =>{


   return(
    <table>
     <tbody> 
    <tr>
                     <th>name</th>
                     <th>Flag</th>
                     <th>Country Native Name</th>
                     <th> Border</th>
                     <th>Languages</th>
    </tr>
       

{
         country.filter((val) =>{
           if(searchName === ''){
             return val;
           }else if(val.name.toLowerCase().includes(searchName.toLowerCase())){
             return val;
           }
           return false;
            
         }).map((curElem,index) => (
           
                <tr key={index}>
                  <td>
                    {curElem.name}
                  </td>
                  <td>
                    <img src={curElem.flag} alt={curElem.name}/>
                  </td>
                  <td>
                    {curElem.nativeName}
                  </td>
                  <td>
                    { curElem.borders.toString() }
                  </td>
                  <td>
                    <div className="language-name">
                    {curElem.languages.map((data,index) =>(
                       <div key={index}>{data.name},</div>
                    ))} 
                  </div>
                  </td>
                </tr> 
         ))
       }
       </tbody>
      </table>
   );
};

export default CountryList;






