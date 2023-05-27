import React, { useEffect, useState } from "react";
import GeneralService from "../../services/general.service";
import "./TopBar.css";
function TopBar() {
  const [marqueeTxt, setMarqueeTxt] = useState("");

  const getMarquee = async () => {
    try {
      const response = await GeneralService.getMarquee();
      const { data } = response;
      const { response: res } = data;
      let resultData;
      resultData = res;
      setMarqueeTxt(resultData);
    } catch (err) {
      setMarqueeTxt("");
    }
  };

  useEffect(() => {
    getMarquee();
  }, []);

  return (
    <>
      {marqueeTxt && (
        <p>
          <marquee className="blink">{marqueeTxt}</marquee>
        </p>
      )}
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
                          <a href="">
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
