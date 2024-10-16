

import Link from "next/link";

export default function Home() {
  return (
    <div style={{textAlign: "center", padding: "100px"}}>
      <h1>Country List</h1>

      <Link href="/country/pakistan" style={{margin: "10px", borderRadius: "10px", border: "2px solid black", 
        padding: "10px"}}>Pakistan</Link>

      <Link href="/country/turkey" style={{margin: "10px", borderRadius: "10px", border: "2px solid black",
         padding: "10px"}}>Turkey</Link>

            <Link href="/country/india" style={{margin: "10px", borderRadius: "10px", border: "2px solid black",
         padding: "10px"}}>India</Link>

      <Link href="/country/korea" style={{margin: "10px", borderRadius: "10px", border: "2px solid black",
         padding: "10px"}}>Korea</Link>

      <Link href="/country/japan" style={{margin: "10px", borderRadius: "10px", border: "2px solid black",
         padding: "10px"}}>Japan</Link>


    </div>
  );
}
