import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
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
          newslettre: true,
        }
      );
      // console.log(response);
      const token = response.data.token;

      Cookies.set("token", token, { expires: 7 });
      // console.log(response.data);
      setToken(token);

      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      if (error.message.status === 409) {
        setErrorMessage("Cet email est déjà utilsé");
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
            setState={setNewsletter}
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
        <p>cette Email est deja utiliser</p>
        <button type="submit">S'inscrire</button>

        <p>
          Tu as déjà un compte? <Link to="/login">Connecte-toi</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
