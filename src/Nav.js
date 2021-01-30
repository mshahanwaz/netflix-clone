import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://th.bing.com/th/id/R571cafa3bbc8ea80de7e682003f73a62?rik=WNEy5vwKvN%2fXgg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f11%2fNetflix-Logo-png.png&ehk=L9pxq5TvyABjGicWkagm6ix81ISSmXUOcu4zXz2Mdrg%3d&risl=&pid=ImgRaw"
        alt=""
      />
      <img
        className="nav__avatar"
        src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
