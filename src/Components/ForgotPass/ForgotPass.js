import React from "react";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./ForgotPass.css";

export default function ForgotPass() {
  // useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
  // useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
  // useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
  // useImportScript(
  //   "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"
  // );
  // useImportScript("/assets/vendor/slick/js/slick.js");
  // useImportScript("/assets/vendor/odometer/js/odometer.min.js");
  // useImportScript("/assets/vendor/viewport-js/viewport.jquery.js");
  // useImportScript("/assets/vendor/owl-carousel/js/owl.carousel.min.js");
  // useImportScript("/assets/vendor/wow/wow.min.js");
  // useImportScript("/assets/js/plugin.js");
  // useImportScript("/assets/js/main.js");

  return (
    <>
      <TopBar />
      <Header />
      <main id="page-content" className="d-flex nm-aic nm-vh-md-100">
        {/* <!-- // Logo wrapper --> */}
        {/* <div id="logo-container">
                    <a  className="d-none d-md-flex" href="/" aria-label="Nimoy">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679220124/Sehatbooking/logo_yqgytd.png" alt="Logo" />
                      
                        
                    </a>
                    <a  className="d-flex d-md-none" href="/" aria-label="Nimoy">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679130514/Sehatbooking/logo-light_hcpctn.png" alt="Logo" />
                    </a>
                </div> */}
        {/* <!-- Logo wrapper // --> */}

        {/* <!-- // Non-form side --> */}
        {/* <div id="non-form-side-forgot" className="col-md-4 col-lg-4 col-xl-4 d-none d-md-flex nm-aic nm-vh-100">
                    <div  className="overlay"></div>
                </div> */}
        {/* <!-- Non-form Side // --> */}

        {/* <!-- // Form side --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 nm-st nm-st-md">
              <form>
                <div className="box">
                  <div className="nm-mb-2 nm-mb-md-2">
                    <h2>Forgotten Password?</h2>
                    <p>Fill in your email address to reset your account</p>
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      name="contact_f_name"
                      id="contactFName"
                      placeholder="Your Email"
                      required=""
                      className="input"
                    />
                  </div>

                  <div className="row nm-aic nm-mb-2">
                    <div className="col-sm-6 nm-mb-1 nm-mb-sm-0">
                      <a className="nm-fs-1 nm-fw-bd" href="login.html">
                        <i className="fas fa-chevron-left nm-fal"></i>
                        Back to sign in
                      </a>
                    </div>

                    <div className="col-sm-6 nm-sm-tr">
                      <button
                        type="submit"
                        className="btn btn-primary nm-hvr nm-btn-1"
                      >
                        Send Reset Link
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Form Side // --> */}
      </main>
      <Footer />
    </>
  );
}
