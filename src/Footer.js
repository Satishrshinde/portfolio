import React from "react";
import "./Footer.css";
import footerImg from "./img/logo (1).png";
function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10">
      <img src={footerImg} alt="" class Name="footer__img" />
      <span className="copyright">
        {" "}
        Copyright © 2022 programmer Satish Shinde. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
