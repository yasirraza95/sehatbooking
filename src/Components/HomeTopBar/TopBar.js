import React from "react";
import "./TopBar.css";
function TopBar() {
  return (
    <>
      {/* <!-- ==== topbar start ==== --> */}
      <div className="topbar overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="topbar-area">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12 ">
                    <div className="topbar-area__left">
                      <ul>
                        <li className="neutral-bottom">
                          <a href="tel:+92(348)1586695">
                            <i className="fa-solid fa-phone"></i>+92-348-1586695
                          </a>
                        </li>
                        <li className="neutral-bottom">
                          <a href="mailto:company@domin.com" id="email">
                            <i className="fa-solid fa-envelope"></i>
                            sehatbooking@gmail.com
                          </a>
                        </li>
                        <li className="neutral-bottom">
                          <a href="contact-us.html">
                            <i className="fa-solid fa-location-dot"></i>Pakistan
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==== #topbar end ==== --> */}
    </>
  );
}

export default TopBar;
