import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const addTocart = (id) => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      const db = res.data;
      console.log(db);
      axios.post("https://6595a35f04335332df831502.mockapi.io/basket", db);
    });
  };

  useEffect(() => {
    const getApi = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getApi();
  }, [id]);
  console.log(data);

  return (
    <>
      <div id={styles.detail}>
        <div className="container mt-5 ">
          <h2>{data.description}</h2>
           <div className="row w-100 my-5">
            <div className="col-xl-6 mt-2 col-md-6 col-sm-12">
            <img className={styles.img} src={data.images && data.images[0]} alt="" />
            </div>
            <div className="col-xl-6 mt-2 col-md-6 col-sm-12">
            <div className="d-flex flex-column align-items-center">
              <h3 className={styles.discount}>{data?.discountPercentage}% </h3>
              <h3>Category : {data?.brand}</h3>
              <h3>Model : {data?.title}</h3>
              <h3>Price : {data?.price} $</h3>
              <h3>Stock : {data?.stock} </h3>

              <button onClick={() => addTocart(`${data.id}`)} className={styles.addBtn}><FaCartShopping /> Add to Cart</button>
            </div>
            </div>
           </div>

          <button className={styles.backBtn} onClick={() => navigate("/")}>
            <BsArrowLeftCircle /> Back to page
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
