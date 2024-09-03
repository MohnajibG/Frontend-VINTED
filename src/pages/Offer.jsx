import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="items">
      <div className="item">
        <img src={data.product_image?.secure_url} alt={data.product_name} />
        <div className="description">
          <p>{data.product_price} €</p>
          {data.product_details.map((detail, index) => {
            const keys = Object.keys(detail);
            const key = keys[0];

            return (
              <div key={index}>
                <p>
                  {key} = {detail[key]}
                </p>
              </div>
            );
          })}
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          {data.owner && (
            <div className="user">
              <img
                className="avatar"
                src={data.owner.account.avatar.secure_url}
                alt=""
              />
              <h3>{data.owner.account.username}</h3>
            </div>
          )}
          <Link
            to="/payment"
            state={{
              title: data.product_name,
              price: data.product_price * 100,
            }}
          >
            <button>Acheter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
