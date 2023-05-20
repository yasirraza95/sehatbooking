import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import swal from "sweetalert";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { passwordsValidation } from "../../schema";

export default function ForgotToken() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    } else {
      checkToken(token);
    }
  }, [token]);

  const checkToken = async (token) => {
    try {
      await GeneralService.checkForgotToken(token);
    } catch (err) {
      if (err.response.status === 404) {
        swal("", err.response, "error");
        window.location.href = "/";
      } else {
        swal("", "Something went wrong", "error");
        window.location.href = "/";
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
    try {
      values.token = token;
      const response = await GeneralService.updatePassword(values);
      const { data } = response;
      const { response: message } = data;
      swal(message);
      window.location.href = "/login";

      action.resetForm();
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
