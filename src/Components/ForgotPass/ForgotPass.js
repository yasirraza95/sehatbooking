import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { newsletterValidation } from "../../schema";
import GeneralService from "../../services/general.service";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./ForgotPass.css";

export default function ForgotPass() {

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
    try {
      const response = await GeneralService.forgot(values);
      const { data } = response;
      const { response: message } = data;
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 404) {
        setSubmitMessage("You are not a registered user");
        setSubmit("danger");
      } else {
        setSubmitMessage("Something went wrong, try again");
        setSubmit("danger");
      }
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
                  <h2>Forgotten Password</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Forgotten Password
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


      {/* <!-- // Form side --> */}
      <section className="contact section-space">

        <div className="container">
          <div className="row">
            <div className="forgot">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 nm-st nm-st-md">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="box">
                    <h4 class="descender">Forgotten Password?</h4>
                    <div className="nm-mb-2 nm-mb-md-2">
                      {/* <h2>Forgotten Password?</h2> */}
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
                        <a className="nm-fs-1 nm-fw-bd" href="/login">
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
        </div>
      </section>
      {/* <!-- Form Side // --> */}

      <Footer />
    </>
  );
}
