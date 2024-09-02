import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Cookies from "js-cookie";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Informations manquantes");
      return;
    }

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      Cookies.set("token", response.data.token, { expires: 7 });
      // console.log(response.data.token);

      setToken(response.data.token);
      console.log(setToken);

      navigate("/");

      // console.log("Navigation vers la page d'accueil effectuée");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Se Connecter</h2>

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

        <button type="submit">Se Connecter</button>
      </form>
      <p>
        Tu n'as pas un compte? <Link to="/signup">Inscris-toi</Link>
      </p>
    </div>
  );
};

export default Login;
