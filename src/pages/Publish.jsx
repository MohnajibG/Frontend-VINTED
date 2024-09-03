import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(token);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("test", error);
    }
  };

  return token ? (
    <main>
      <form className="publish" onSubmit={handleSubmit}>
        <div className="publish">
          <div className="input-picture">
            <label htmlFor="picture">+ Ajouter votre photo</label>
            <input
              id="picture"
              type="file"
              style={{ display: "none" }}
              onChange={(elem) => {
                setPicture(elem.target.files[0]);
              }}
            />
            {picture && <img src={URL.createObjectURL(picture)} alt="" />}
          </div>
          <div className="input-publish">
            <h3>Titre:</h3>
            <input
              type="text"
              placeholder="  ex: Chemise Sézane verte"
              value={title}
              onChange={(elem) => {
                setTitle(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Description:</h3>
            <input
              type="text"
              placeholder="ex:porté quelquefois, taille correctement"
              value={description}
              onChange={(elem) => {
                setDescription(elem.target.value);
              }}
            />
          </div>

          <div className="input-publish">
            <h3>Marque:</h3>
            <input
              type="text"
              placeholder="ex: Zara"
              value={brand}
              onChange={(elem) => {
                setBrand(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Taille:</h3>
            <input
              type="text"
              placeholder="ex: L / 40 / 12"
              value={size}
              onChange={(elem) => {
                setSize(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Couleur:</h3>
            <input
              type="text"
              placeholder="ex: L / 40 / 12"
              value={color}
              onChange={(elem) => {
                setColor(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Condition:</h3>
            <input
              type="text"
              placeholder="ex: Neuf avec étiquette"
              value={condition}
              onChange={(elem) => {
                setCondition(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Ville:</h3>
            <input
              type="text"
              placeholder="ex: Paris"
              value={city}
              onChange={(elem) => {
                setCity(elem.target.value);
              }}
            />
          </div>
          <div className="input-publish">
            <h3>Prix:</h3>
            <input
              type="number"
              placeholder="ex: 0.00 €"
              value={price}
              onChange={(elem) => {
                setPrice(elem.target.value);
              }}
            />
          </div>

          <button type="submit">envoyer</button>
        </div>
      </form>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
