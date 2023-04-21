import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./Login.css";
import ForgotPass from "../Images/forgotPassword-icon.png";
// import ToTop from "../TopTop/ToTop";
import useImportScript from "../../utils/useImportScript";
import GeneralService from "../../services/general.service";
import { loginValidation } from "../../schema";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../../Redux";

export default function Login() {
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

  const dispatch = useDispatch();
  const userActions = bindActionCreators(actionCreaters, dispatch);

  const navigate = useNavigate();
  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.login(values);
      const { data } = response;
      const { access_token, user } = data;
      const { id, first_name, last_name } = user;
      console.log(first_name);
      let fname = first_name.substring(0, 1).toUpperCase();
      let lname = last_name.substring(0, 1).toUpperCase();

      userActions.logIn({
        accessToken: access_token,
        id: id,
        name: fname + lname,
      });
      // navigate("/");
      window.location.href = "/";
      action.resetForm();
      // console.log(message);
      // setSubmitMessage(message);
      // setSubmit("success");
      // setLoading(false);
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        setSubmitMessage("Username or Password is invalid");
        setSubmit("danger");
        // setLoading(false);
      } else {
        setSubmitMessage("Something went wrong, try again");
        setSubmit("danger");
        // setLoading(false);
      }
    }
  };

  return (
    <>
      {/* <LoginHeader /> */}
      <TopBar />
      <Header />

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
                  <h2>Sign In</h2>
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
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="input" id="fields">
                          {submit && (
                            <div
                              className={`alert alert-${submit}`}
                              role="alert"
                            >
                              {submitMessage}
                            </div>
                          )}
                          <input
                            type="text"
                            name="username"
                            id="contactFName"
                            placeholder="Username"
                            required
                            className="input"
                            value={values.username || ""}
                            onChange={handleChange}
                          />
                          {touched.username && errors.username && (
                            <div className="error">{errors.username}</div>
                          )}
                        </div>
                        <div className="input" id="fields">
                          <input
                            type="password"
                            name="password"
                            id="contactLName"
                            placeholder="Password"
                            required
                            className="input"
                            value={values.password || ""}
                            onChange={handleChange}
                          />
                          {touched.password && errors.password && (
                            <div className="error">{errors.password}</div>
                          )}
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
                              type="button"
                              className="button button--effect"
                              id="forgot"
                              onClick={(e) =>
                                (window.location.href = "/forgot-pass")
                              }
                            >
                              FORGOT YOUR PASSWORD?{" "}
                              <img
                                id="forgotImg"
                                src={ForgotPass}
                                alt="Forgot Logo"
                                style={{ width: "15px", color: "#fff" }}
                              />
                            </button>
                            <button
                              type="button"
                              className="button button--effect"
                              id="account"
                              onClick={(e) =>
                                (window.location.href = "/register")
                              }
                            >
                              CREATE ACCOUNT <i class="bi bi-person-plus"></i>
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
