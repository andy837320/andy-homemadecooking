import React from "react";
import Logo from "../img/logo.jpg";

const Footer = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="logo" className="w-11 object-cover rounded-full" />
        <p className="text-headingColor text-xl font-bold">
          Andy(Anindita)'s Kitchen
        </p>
      </div>

      <div> Copyright &copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
