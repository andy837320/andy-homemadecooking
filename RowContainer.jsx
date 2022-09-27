import React, { useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import NotFound from "../img/NotFound.jpg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);

  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtoCart = () => {
    // console.log(item);

    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtoCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center my-12  gap-3  bg-orange-100 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt="sweet"
                className="w-40 h-40  -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col mt-3 items-left justify-left ">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-2 text-sm text-gray-400"> {item?.calories}</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textColor  font-semibold">
                  <span className="text-sm text-red-500 text">$</span>$
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="ml-4 text-lg font-semibold">
            Items Not Available,Sorry About That 😞
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
