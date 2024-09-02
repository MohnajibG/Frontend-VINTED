import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FcSearch } from "react-icons/fc";

import logo from "/Users/mac/LeReacteur/React/Jour8/vinted-frontend/src/assets/img/logo_files/logo-a7c93c98.png";
const Header = ({ setToken, search, setSearch }) => {
  const navigate = useNavigate();

  const token = Cookies.get("token");
  console.log(token);
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
              setToken(null);
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
        {!token ? (
          <Link to="/login">
            <button>Vends tes articles</button>
          </Link>
        ) : (
          <Link to="/Annonce">
            <button>Vends tes articles</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
