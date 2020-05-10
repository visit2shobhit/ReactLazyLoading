import React, {useEffect,useState} from 'react';

function CountryList(){
    const [countryList,setCountryList] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(result=>{
            setCountryList(result);
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return(
        <div>
       <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Capital</th>
              <th>Population</th>
          </tr>
          </thead>    
              <tbody>
                {
                    countryList.map((item,key)=>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.region}</td>
                        <td>{item.capital}</td>
                        <td>{item.population}</td>
                      </tr>
                    )
                }
                </tbody>
            </table>    
        </div>
    )
}

export default CountryList;