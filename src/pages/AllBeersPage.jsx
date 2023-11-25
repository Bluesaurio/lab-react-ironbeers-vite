import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const redirect = useNavigate();
  const [beerList, setBeerList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setBeerList(response.data);
      setIsLoading(false);
    } catch (error) {
      redirect("/error");
    }
  };

  if (isLoading === true) {
    return <h3>Cargando...</h3>;
  }
  return (
    <div>
      <h3>Lista de cervezas</h3>
      {beerList.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt={eachBeer.name} width={50} />
            <h2>{eachBeer.name}</h2>
            <h4>{eachBeer.tagline}</h4>
            <p>Creada por: {eachBeer.contributed_by}</p>
            <p>
              <Link to={`/beers/${eachBeer._id}`}>Más detalles</Link>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
