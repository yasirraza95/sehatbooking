import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { newsletterValidation } from "../../schema";
import GeneralService from "../../services/general.service";
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

  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: newsletterValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.forgot(values);
      const { data } = response;
      const { response: message } = data;
      // console.log(message);
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
      // setLoading(false);
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 404) {
        setSubmitMessage("You are not a registered user");
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
      <TopBar />
      <Header />
      <main id="page-content" className="d-flex nm-aic nm-vh-md-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 nm-st nm-st-md">
              <form onSubmit={handleSubmit} noValidate>
                <div className="box">
                  <div className="nm-mb-2 nm-mb-md-2">
                    <h2>Forgotten Password?</h2>
                    <p>Fill in your email address to reset your account</p>
                  </div>

                  {submit && (
                    <div className={`alert alert-${submit}`} role="alert">
                      {submitMessage}
                    </div>
                  )}
                  <div className="input">
                    <input
                      type="text"
                      name="email"
                      id="contactFName"
                      placeholder="Your Email"
                      required
                      value={values.email || ""}
                      onChange={handleChange}
                      className="input"
                    />
                    {touched.email && errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
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
