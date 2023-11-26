import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const redirect = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewer_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleTaglineChange = (e) => setTagline(e.target.value);
  const handleDescChange = (e) => setDescription(e.target.value);
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTips = (e) => setBrewerTips(e.target.value);
  const handleAttChange = (e) => setAttenuationLevel(e.target.value);
  const handleContrChange = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    };

    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      redirect("/beers");
    } catch (error) {
      redirect(error);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre: </label>
      <input type="text" name="name" onChange={handleNameChange} />
      <br />
      <label htmlFor="tagline">Tagline: </label>
      <input type="text" name="tagline" onChange={handleTaglineChange} />
      <br />
      <label htmlFor="description">Descripción: </label>
      <input type="text" name="description" onChange={handleDescChange} />
      <br />
      <label htmlFor="first_brewed">Fecha de creación: </label>
      <input
        type="text"
        name="first_brewed"
        onChange={handleFirstBrewedChange}
      />
      <br />
      <label htmlFor="brewer_tips">Consejos: </label>
      <input type="text" name="brewer_tips" onChange={handleBrewerTips} />
      <br />
      <label htmlFor="attenuation_level">Atenuación: </label>
      <input
        type="number"
        name="attenuation_level"
        onChange={handleAttChange}
      />
      <br />
      <label htmlFor="contributed_by">Creada por: </label>
      <input type="text" name="contributed_by" onChange={handleContrChange} />
      <br />

      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddBeerPage;
