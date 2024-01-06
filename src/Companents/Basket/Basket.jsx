import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./basket.module.css";
import { TbClick } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Basket = () => {
  const [srcVal, setSrcVal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate()
  const imgref = useRef()

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    switch (selectedOption) {
      case "max":
        setAllbasket((prevBasket) =>
          prevBasket.sort((a, b) => b.price - a.price)
        );
        break;
      case "min":
        setAllbasket((prevBasket) =>
          prevBasket.sort((a, b) => a.price - b.price)
        );
        break;
        case "abc":
          setAllbasket((prevBasket) => prevBasket.sort((a,b) => a.title.localeCompare(b.title)));
          break;
      default:<p>Undefined</p>
    }
  };

  const srcFunc = (e) => {
    e.preventDefault();
    setAllbasket((prevBasket) =>
      prevBasket.filter((item) =>
        item.title.toLowerCase().includes(srcVal.toLowerCase())
      )
    );
  };

  const orderFunc = () => {
    imgref.current.style.display = "block";

    
    setTimeout(() => {
      imgref.current.style.display = "none";
      
    }, 3000);
  };

  const removeFunc = async (id) => {
    await axios.delete(
      `https://6595a35f04335332df831502.mockapi.io/basket/${id}`
    );
    setAllbasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  const [allbasket, setAllbasket] = useState([]);
  useEffect(() => {
    const getBasket = async () => {
      const response = await axios.get(
        `https://6595a35f04335332df831502.mockapi.io/basket`
      );
      console.log(response.data);
      setAllbasket(response.data);
    };
    getBasket();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-3">BASKET</h1>
      <div className={styles.searchProducts}>
        <div className="container d-flex justify-content-center">
          <form onSubmit={srcFunc} className="w-100">
            <div className="d-flex align-items-center justify-content-center w-100 gap-3 my-5 flex-wrap">
              <div className={styles.sort}>
                <div className="d-flex gap-2">
                  <label htmlFor="max">From expensive to cheap</label>
                  <input
                    name="price"
                    type="radio"
                    id="max"
                    value="max"
                    checked={selectedOption === "max"}
                    onChange={handleRadioChange}
                  />
                </div>
                <div className="d-flex gap-2">
                  <label htmlFor="min">From cheap to expensive</label>
                  <input
                    name="price"
                    type="radio"
                    id="min"
                    value="min"
                    checked={selectedOption === "min"}
                    onChange={handleRadioChange}
                  />
                </div>
                <div className="d-flex gap-2 justify-content-end">
                  <label htmlFor="abc">A-Z...</label>
                  <input
                    name="price"
                    type="radio"
                    id="abc"
                    value="abc"
                    checked={selectedOption === "abc"}
                    onChange={handleRadioChange}
                  />
                </div>
              </div>
              <div className={styles.src}>
                <input
                  onChange={(e) => setSrcVal(e.target.value)}
                  className={styles.srcInp}
                  type="text"
                  placeholder="Search..."
                />
                <button className={styles.srcIcon}>
                  <VscSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
        <img className={styles.imgAnime} ref={imgref} src="https://i.pinimg.com/originals/74/2f/7e/742f7ea29cbfd7fd3f4848f17e621070.gif" alt="" />
      </div>
      <div id={styles.products}>
        {allbasket &&
          allbasket.map((item, i) => (
            <div className={styles.box} key={i}>
              <img src={item?.images[0]} alt="products" />
              <p>{item?.title}</p>
              <h4>{item?.price} $</h4>
              <div className={styles.buttons}>
                <button onClick={orderFunc} className={styles.order}>
                  <TbClick />
                  Order
                </button>
                <button
                  onClick={() => removeFunc(`${item.id}`)}
                  className={styles.remove}
                >
                  <FaTrashAlt />
                  Remove to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <button className={styles.backBtn} onClick={() => navigate("/")}>
      <BsArrowLeftCircle /> Back to page
      </button>
    </div>
  );
};

export default Basket;
