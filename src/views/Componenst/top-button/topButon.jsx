import React, { useEffect, useState } from "react";
import buttonTop from "../../../assets/up-arrow.png";
import "./top-button.css";

const TopButon = () => {
  const [show, setShow] = useState("hide-btn");

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const hideButton = () => {
      if (
        document.body.scroll > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        return setShow("show-btn");
      } else {
        return setShow("hide-btn");
      }
    };
    window.addEventListener("scroll", hideButton);
    //   hideButton();
  }, []);

  return (
    <div className="container-btn">
      <img
        className={show}
        style={{ cursor: "pointer" }}
        id="button-up"
        src={buttonTop}
        alt="top-button"
        onClick={toTop}
      />
    </div>
  );
};

export default TopButon;
