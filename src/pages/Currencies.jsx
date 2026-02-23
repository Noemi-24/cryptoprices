import { Link } from "react-router-dom";

export default function Currencies (props) {
  const currencies = [
    { name: "Bitcoin", symbol: "bitcoin" },
    { name: "Litecoin", symbol: "litecoin" },
    { name: "Ethereum", symbol: "ethereum" },
    { name: "Ethereum Classic", symbol: "ethereum-classic" },
    { name: "Stellar Lumens", symbol: "stellar" },
    { name: "Dash", symbol: "dash" },
    { name: "Ripple", symbol: "ripple" },
    { name: "Zcash", symbol: "zcash" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`} key={symbol}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}