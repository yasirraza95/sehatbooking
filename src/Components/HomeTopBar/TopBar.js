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
                          <a href="mailto:company@domin.com">
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
                  {/* <div className="col-lg-4">
                                        <div className="topbar-area__right">
                                            <p className="neutral-bottom">Follow Now</p>
                                            <div className="social">
                                                <a href="https://www.facebook.com/">
                                                    <i className="fab fa-facebook-f">
                                                    </i>

                                                </a>
                                                <a href="https://www.twitter.com/">
                                                    <i className="bi bi-twitter"></i>

                                                </a>
                                                <a href="https://www.instagram.com/">
                                                    <i className="bi bi-instagram"></i>

                                                </a>
                                                <a href="https://www.pinterest.com/">
                                                    <i className="fab fa-pinterest"></i>

                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
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
