import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to={"/beers"}> Lista de cervezas </Link>
      <span> | </span>
      <Link to={"/random-beer"}> Cerveza aleatoria!</Link>
      <span> | </span>
      <Link to={"/new-beer"}> Crea una nueva Cerveza </Link>
    </div>
  );
}

export default HomePage;
