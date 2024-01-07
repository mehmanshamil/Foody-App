import axios, { Axios, all } from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";

const Products = () => {
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);
  const [alldata, setAllData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const addTocart = (id) => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      const db = res.data;
      console.log(db);
      axios.post("https://6595a35f04335332df831502.mockapi.io/basket", db);
    });
  };

  useEffect(() => {
    const getApi = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products?page=${page}&limit=${limit}`
      );
      console.log(data.products);
      // setAllData(data.products);
      // setAllData((prevData) => [...prevData, ...data.products]);
      setAllData((prevData) => {
        if (prevData) {
          return [...prevData, ...data.products];

        } else {
          return [...data.products];
        }
      });
      setLoading(false);
    };
    getApi();
  }, [page]);

  return loading ? (
    <h3 className="text-center">Loading...</h3>
  ) : (
    <>
      <div id={styles.products}>
        <h2 className={styles.productTitle}>PRODUCTS</h2>
        <div id={styles.headProduct} className="container">
          {alldata &&
            alldata.map((item, key) => (
              <div key={key} className={styles.boxProduct}>
                <img src={item?.images[0]} alt="products" />
                <div className="d-flex w-100 flex-column">
                  <p>{item?.title}</p>
                  <h5>{item?.price} $</h5>
                  <button
                    className={styles.addBtn}
                    onClick={() => addTocart(`${item.id}`)}
                  >
                    <FaCartShopping /> Add to cart
                  </button>
                  <button
                    className={styles.more}
                    onClick={() => navigate(`detail/${item.id}`)}
                  >
                    More info...
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-end my-5">
        <button onClick={() => {
        setpage((page) => page + 1);
        setlimit((limit) => limit + 6);
      }} id={styles.loadBtn}>
        <FaArrowCircleLeft /> Load More
      </button>
        </div>
      </div>
    </>
  );
};

export default Products;
