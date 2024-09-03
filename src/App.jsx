import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(null);
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      // console.log(response.data.token);

      {
        setToken;
      }
      token;
      console.log(setToken);
    } else {
      Cookies.remove("token");
    }
    setToken(null);
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
