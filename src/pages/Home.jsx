import axios from "axios";
import hero from "../assets/img/hero.jpg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div>
        <div className="home-hero">
          <img src={hero} alt="Image Hero" />
          <div>
            <p>Prêts à faire du tri dans vos placards ?</p>
            <Link to="/publish">
              <button
                onClick={() => {
                  handlePublishClick();
                }}
              >
                Commencer à vendre{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="offers">
        {data.offers.map((offer) => {
          return (
            <div className="offer" key={offer._id}>
              <div className="user">
                {offer.owner.account.avatar && (
                  <img
                    className="avatar"
                    src={offer.owner.account.avatar.secure_url}
                    alt=""
                  />
                )}
                <h3>{offer.owner.account.username}</h3>
              </div>

              <Link to={`/offer/${offer._id}`}>
                {offer.product_image.secure_url && (
                  <img
                    src={offer.product_image.secure_url}
                    alt="Product Image"
                  />
                )}
                <p>{offer.product_price}€</p>
                <div>
                  {offer.product_details.map((detail, index) => {
                    return (
                      <div key={index}>
                        <p>{detail.TAILLE}</p>
                        <p>{detail.MARQUE}</p>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
