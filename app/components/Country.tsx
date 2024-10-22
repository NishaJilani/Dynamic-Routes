


export default function CountryDetails(data: any) {
    return (
       <div style={{textAlign : "center"}}>
         { data.countryDetails ? (
            
            <div>
               
         <h1>Country Components</h1>

         <h3>Country Name: {data.countryDetails.name}</h3>
         <h3>Country Population: {data.countryDetails.population}</h3>
         <h3>Country Capital: {data.countryDetails.capital}</h3>

          </div>
          ) : (
              <h2 style={{marginTop: "100px"}}>{data.url} not found</h2> 
          )}

       </div>
    );
  }