import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response);
      setRandomBeer(response.data);
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
      <h3>Tu cerveza aleatoria es...</h3>
      <img src={randomBeer.image_url} alt={randomBeer.name} width={100} />
      <h4>{randomBeer.name}</h4>
      <h5>{randomBeer.tagline}</h5>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Creada por: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
