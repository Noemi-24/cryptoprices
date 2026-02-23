import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Grabbing the currency symbol from the URL Params.
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL.
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;

  const coinNames = {
    "bitcoin": "Bitcoin",
    "litecoin": "Litecoin",
    "ethereum": "Ethereum", 
    "ethereum-classic": "Ethereum Classic", 
    "stellar": "Stellar Lumens", 
    "dash": "Dash", 
    "ripple": "Ripple", 
    "zcash": "Zcash",  
  }
  // State to hold the coin data.
  const [coin, setCoin] = useState("null");

  // Function to fetch coin data.
  const getCoin = async () => {
    try {
      const response = await fetch(url,{
        headers: {
          "x-cg-demo-api-key": "CG-TDhqU54CDCskomn4pbf2c3gi"
        }
      });
      const data = await response.json();
      setCoin(data);
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts.
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coinNames[symbol]}/USD
        </h1>
        <h2>{coin[symbol]?.usd}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin[symbol]?.usd ? loaded() : loading();
}