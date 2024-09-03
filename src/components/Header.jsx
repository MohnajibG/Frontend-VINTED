import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "/Users/mac/LeReacteur/React/Jour8/vinted-frontend/src/assets/logo.svg";
import { useState } from "react";

const Header = ({ handleToken, search, setSearch }) => {
  const navigate = useNavigate();
  // const [connected, setConnected] = useState("/");

  const token = Cookies.get("token");

  // const handleSubmit = () => {
  //   if (token) {
  //     navigate("/publish");
  //   } else {
  //     setConnected("/publish");
  //     navigate("/login");
  //   }
  // };

  // console.log(token);
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="" />{" "}
      </Link>
      <input
        type="text"
        id="site-search"
        name="search"
        placeholder="  Recherche des articles"
        value={search}
        onChange={(elem) => {
          setSearch(elem.target.value);
        }}
      />
      <div className="login">
        {token ? (
          <button
            className="deconnexion"
            onClick={() => {
              console.log("Déconnexion...");
              Cookies.remove("token");
              handleToken(null);
              navigate("/");
            }}
          >
            Déconnexion
          </button>
        ) : (
          <div className="login">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
      </div>
      <div>
        <button onClick={handleToken}> Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
