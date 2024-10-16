import Link from "next/link";


export default function CountryName({params}:any) {

   const countries: { //array of objects
    name: string;
    population: number;
    capital: string;
   } [] = [
    {
        name: "Pakistan",
        population: 123400000,
        capital: "Islamabad",
    },
    {
        name: "Turkey",
        population: 5876879800,
        capital: "Ankara",
    },
    {
        name: "India",
        population: 87452768797,
        capital: "Delhi",
    },
    {
        name: "Korea",
        population: 1244576989000,
        capital: "Seoul",
    },
    {
        name: "Japan",
        population: 78967642423500,
        capital: "Tokyo",
    },
   ];

function findCountry(country_url: string){
     return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
}


let result = findCountry(params.country_name);

  return (
    <div style={{textAlign: "center", padding: "100px"}}>
      {
        result ? (
          <>
                     <h1>Country Name: {result.name}</h1>          
                     <h1>Country Capital: {result?.capital}</h1>
                     <h1>Country Population: {result?.population}</h1>
          </>
        ) : (
          <h1>{params.country_name} Not Found</h1>
        )
      }
           
           &nbsp;
           &nbsp;
           &nbsp;

      <Link href="/"  style={{margin: "10px", borderRadius: "10px", border: "2px solid black", 
        padding: "10px"}}>Home</Link>

    </div>
  );
}