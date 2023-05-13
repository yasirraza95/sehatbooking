import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import "./NoInternet.css";

const NoInternet = (props) => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  if (isOnline) {
    return props.children;
  } else {
    return (
      <>
        <div className="wrapper">
          {/* <div className="noSignel"></div> */}
          <h1 className="offlineT">OFFLINE</h1>
          <h4 className="offlineP">NO INTERNET CONNECTION!</h4>
          <div className="card-body px-sm-4 mb-3">
            <ul className="list-unstyled text-muted">
              {" "}
              <li id="des">
                Please re-connect to the internet to continue use
                <span id="siteName"> sehatbooking.com</span>
              </li>{" "}<br />
              <li>If you encounter problems:</li>
              <ul className="mt-2 inner">
                <li>
                  Try restarting wireless connection on this device.
                </li>
                <li>Move close to your wireless access point.</li>
              </ul>
            </ul>
          </div>
          <a href="." id="offlineBtn" className="button">RETRY</a>
        </div>
      </>
    );
  }
};

export default NoInternet;
