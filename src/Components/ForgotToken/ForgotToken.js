import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import swal from "sweetalert";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { passwordsValidation } from "../../schema";

export default function ForgotToken() {
  // useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
  // useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
  // useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
  // useImportScript(
  //     "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"
  // );
  // useImportScript("/assets/vendor/slick/js/slick.js");
  // useImportScript("/assets/vendor/odometer/js/odometer.min.js");
  // useImportScript("/assets/vendor/viewport-js/viewport.jquery.js");
  // useImportScript("/assets/vendor/owl-carousel/js/owl.carousel.min.js");
  // useImportScript("/assets/vendor/wow/wow.min.js");
  // useImportScript("/assets/js/plugin.js");
  // useImportScript("/assets/js/main.js");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      checkToken(token);
    }
  }, [token, navigate]);

  const checkToken = async (token) => {
    // setLoading(true);
    try {
      await GeneralService.checkForgotToken(token);
    } catch (err) {
      if (err.response.status === 404) {
        // setLoading(false);
        swal("", err.response, "error");
        navigate("/");
      } else {
        // setLoading(false);
        swal("", "Something went wrong", "error");
        navigate("/");
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        new_password: "",
        confirm_password: "",
      },
      validationSchema: passwordsValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      values.token = token;
      const response = await GeneralService.updatePassword(values);
      const { data } = response;
      const { response: message } = data;
      swal(message);
      navigate("/login");
      action.resetForm();
      // setLoading(false);
    } catch (err) {
      swal("", "Something went wrong", "error");
    }
  };

  return (
    <>
      <TopBar />
      <Header />
      {/* <!-- ==== banner section start ==== --> */}
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Forgot Password Token</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Forgot Password Token
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #banner section end ==== --> */}

      {/* <!-- ==== contact form section start ==== --> */}
      <section className="contact section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-area">
                <div className="contact-area__content">
                  <div className="row neutral-row">
                    <div className="col-lg-12 row-item">
                      <div className="contact-area-single contact-area__content-form">
                        <h4 className="descender">Update Password</h4>
                        <p>Enter your new and confirm passwords</p>

                        <form onSubmit={handleSubmit} noValidate>
                          <div className="input-group-column">
                            <div className="input">
                              <input
                                type="password"
                                name="new_password"
                                placeholder="Password"
                                required
                                className="password"
                                value={values.new_password || ""}
                                onChange={handleChange}
                              />
                              {touched.new_password && errors.new_password && (
                                <div className="error">
                                  {errors.new_password}
                                </div>
                              )}
                            </div>
                            <div className="input">
                              <input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                required
                                className="input"
                                value={values.confirm_password || ""}
                                onChange={handleChange}
                              />
                              {touched.confirm_password &&
                                errors.confirm_password && (
                                  <div className="error">
                                    {errors.confirm_password}
                                  </div>
                                )}
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="button button--effect contact"
                          >
                            Update Password<i className="bi bi-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #contact form section end ==== --> */}
      <Footer />
    </>
  );
}
