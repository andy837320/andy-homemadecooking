import React, { useEffect } from "react";
import {
  Header,
  MainContainer,
  CreateContainer,
  ContactMe,
  MyCakes,
} from "./components";
import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllfoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Footer from "./components/Footer";
import AboutMyCooking from "./components/AboutMyCooking";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllfoodItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header />

        <main className="mt-14  md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutMyCooking" element={<AboutMyCooking />} />
            <Route path="/contactMe" element={<ContactMe />} />
            <Route path="/myCakes" element={<MyCakes />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </AnimatePresence>
  );
};

export default App;
