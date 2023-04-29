import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FavImage from "../Images/sehatbooking-logo-3.webp";
import "./PreLoader.css";
export default function PreLoader() {
  const location = useLocation();

  const [pivi, setPvisi] = useState();

  useEffect(() => {
    setPvisi(false);

    setTimeout(() => {
      setPvisi(true);
    }, 1800);
  }, [location.pathname]);

  return (
    <div className={`preloader ${pivi ? "fadeOut" : "fadeIn"}`}>
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img src={FavImage} alt="logo" />
        </div>
      </div>
    </div>
  );
}
