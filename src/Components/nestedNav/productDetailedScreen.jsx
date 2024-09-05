import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserDetails } from "./nav-stack";

export const ProductDetailScreen = () => {
  const {username,counter} = useContext(UserDetails);
  const [mydata, setData] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  console.log(productId);

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      let { data, status } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      if (status == 200) {
        setData(data);
        console.log("mydata", mydata);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Welcome {username}</h1>
      <h2>Counter {counter}</h2>
      <h2>Welcome to detailed product</h2>

      {Object.keys(mydata).length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "450px",
            border: "2px solid gray",
            padding: "10px",
          }}
        >
          <h2>{mydata.title}</h2>
          <img
            src={mydata.image}
            alt="Product image"
            width={400}
            height={300}
          />
          <button
            onClick={() => {
              navigate("/");
            }}
            style={{ margin: "10px", padding: "10px" }}
          >
            {" "}
            Buy Now
          </button>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};
