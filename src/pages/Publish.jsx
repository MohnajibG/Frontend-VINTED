import axios from "axios";
import { useEffect, useState } from "react";

const Publish = ({ token, setToken }) => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState(null);
  const [cloudinaryPicture, setCloudinaryPicture] = useState(null);

  const handleSubmit = async (elem) => {
    elem.preventDefault();
    useEffect(() => {
      const fetchData = async () => {
        try {
          FormData.append("title", title);
          FormData.append("description", description);
          FormData.append("price", price);
          FormData.append("condition", condition);
          FormData.append("city", city);
          FormData.append("brand", brand);
          FormData.append("size", size);
          FormData.append("color", color);
          FormData.append("picture", picture);

          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish"
          );

          setData(response.data);
        } catch (error) {}
      };
    });
    ft;
  };

  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" name="" id="" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};

export default Publish;
