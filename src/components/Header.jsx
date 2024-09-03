import { Link, useNavigate } from "react-router-dom";

import logo from "/Users/mac/LeReacteur/React/Jour8/vinted-frontend/src/assets/logo.svg";

const Header = ({ token, handleToken, search, setSearch }) => {
  const navigate = useNavigate();
  const handlePublishClick = () => {
    if (token) {
      navigate("/publish");
    } else {
      navigate("/login");
    }
  };

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
              handleToken(null);
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
        <Link to="/publish">
          <button
            onClick={() => {
              handlePublishClick;
            }}
          >
            Vends tes articles
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
