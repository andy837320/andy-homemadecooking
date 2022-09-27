import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken & fish");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-16 " id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl  font-semibold mr-auto capitalize text-headingColor relative before:absolute before:rounded-lg before:content  before:w-32  before:h-1 before:-bottom-2  before:left-16  before:bg-gradient-to-tr from-orange-400 to-orange-600  transition-all ease-in-out duration-100">
          Andy's HomeMade Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-gray-300"
                } w-24 hover:bg-cartNumBg min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col  gap-3 items-center justify-center duration-150 transition-all  ease-in-out `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10  rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-cartNumBg"
                  } group-hover:bg-card flex  items-center justify-center`}
                >
                  <GiFoodTruck
                    className={` ${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-card`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full ">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
