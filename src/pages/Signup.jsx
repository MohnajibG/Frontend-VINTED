import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      // console.log(response.data);

      handleToken(response.data.token);

      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      if (error.message.status === 409) {
        setErrorMessage("Cet email est déjà utilsé");
      } else if (error.reponse.data.message === "Parametres Manquantes") {
        setErrorMessage("Veuillez remplir les champs Manquants");
      } else {
        setErrorMessage("Une erreur est survenue, veuillez réessayer");
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>

        <Input
          setState={setUserName}
          state={username}
          label="Nom"
          type="text"
          id="username"
          placeholder="Votre nom"
        />
        <Input
          setState={setEmail}
          state={email}
          type="email"
          label="Email"
          id="email"
          placeholder="Email"
        />
        <Input
          setState={setPassword}
          state={password}
          type="password"
          label="Mot de passe"
          id="password"
          placeholder="Votre mot de passe"
        />
        <div>
          <input
            onChange={() => setNewsletter(!newsletter)}
            checked={newsletter}
            className="box"
            type="checkbox"
            name="newsletter"
            id="newsletter"
          />

          <label> S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
      </form>
      {errorMessage && (
        <p className="p" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
