import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const redirect = useNavigate();
  const params = useParams();
  const [singleBeer, setSingleBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      console.log(response);
      setSingleBeer(response.data);
      setIsLoading(false);
    } catch (error) {
      redirect("/error");
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h3>Cargando...</h3>;
  }
  return (
    <div>
      <h3>Detalles de la cerveza</h3>
      <img src={singleBeer.image_url} alt={singleBeer.name} width={100} />
      <h4>{singleBeer.name}</h4>
      <h5>{singleBeer.tagline}</h5>
      <p>{singleBeer.first_brewed}</p>
      <p>{singleBeer.attenuation_level}</p>
      <p>{singleBeer.description}</p>
      <p>Creada por: {singleBeer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
