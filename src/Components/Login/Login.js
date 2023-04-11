import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./Login.css";
import ForgotPass from "../Images/forgotPassword-icon.png";
// import ToTop from "../TopTop/ToTop";
import useImportScript from "../../utils/useImportScript";
// import LoginHeader from './LoginHeader.js---';
export default function Login() {
  useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
  useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
  useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
  useImportScript(
    "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"
  );
  useImportScript("/assets/vendor/slick/js/slick.js");
  useImportScript("/assets/vendor/odometer/js/odometer.min.js");
  useImportScript("/assets/vendor/viewport-js/viewport.jquery.js");
  useImportScript("/assets/vendor/owl-carousel/js/owl.carousel.min.js");
  useImportScript("/assets/vendor/wow/wow.min.js");
  useImportScript("/assets/js/plugin.js");
  useImportScript("/assets/js/main.js");

  return (
    <>
      {/* <LoginHeader /> */}
      <TopBar />
      <Header />
      {/* <section className="page-header" data-stellar-background-ratio="1.2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="banner-area__content">
              <h2>
                Sign In
              </h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- ==== banner section start ==== --> */}
      <section className="banner bg-img dark-overlay dark-overlay">
        {/* <div className="Blad-image">
          <img className="blad" src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679220124/Sehatbooking/logo_yqgytd.png" alt="Logo" />

          </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Sign Up</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #banner section end ==== --> */}

      <section className="section-content-block section-secondary-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-area">
                <div className="contact-area__content">
                  <div className="row neutral-row">
                    <div className="contact-area-singlee contact-area__content-form">
                      <h4 className="descender" style={{ color: "#000" }}>
                        Login Form
                      </h4>
                      <form action="#" name="contact__Form">
                        <div className="input" id="fields">
                          <input
                            type="text"
                            name="contact_f_name"
                            id="contactFName"
                            placeholder="Your Email"
                            required=""
                            className="input"
                          />
                        </div>
                        <div className="input" id="fields">
                          <input
                            type="password"
                            name="contact_l_name"
                            id="contactLName"
                            placeholder="Password"
                            required=""
                            className="input"
                          />
                        </div>
                        <div className="text-center">
                          <div className="btn-group">
                            <button
                              type="submit"
                              className="button button--effect"
                              id="login"
                            >
                              LOGIN <i className="bi bi-arrow-right"></i>
                            </button>

                            <button
                              type="submit"
                              className="button button--effect"
                              id="forgot"
                            >
                              FORGOT YOUR PASSWORD?
                              <img
                                src={ForgotPass}
                                alt="React Logo"
                                style={{ width: "15px", color: "#fff" }}
                              />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* <div className="col-lg-5 row-item mt-5">
                      <img
                        className="LoginLogo"
                        src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679761888/Sehatbooking/sehatbooking-logored_lqvd71.png"
                        alt="logo"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ToTop /> */}
      <Footer />
    </>
  );
}
