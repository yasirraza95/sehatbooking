import React, { useState } from "react";
import useImportScript from "../../utils/useImportScript";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TopBar from "../HomeTopBar/TopBar";
import "./ContactUs.css";
import { useFormik } from "formik";
import { contactValidation } from "../../schema";
import GeneralService from "../../services/general.service";
import { toast } from "react-toastify";
import { Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
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

  // const onChange = (value) => {
  //   console.log("Captcha value:", value);
  // };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
        // captcha: "",
      },
      validationSchema: contactValidation,
      onSubmit: (values, action) => {
        console.log(values);
        // formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.contactUs(values);
      const { data } = response;
      const { response: message } = data;
      // console.log(message);
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
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
      <TopBar />
      <Header />
      {/* <!-- ==== banner section start ==== --> */}
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
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
                    <div className="col-lg-7 row-item">
                      <div className="contact-area-single contact-area__content-form">
                        <h4 className="descender">Get In Touch</h4>
                        <p>
                          We strive to respond to all inquiries in a timely
                          manner and look forward to the opportunity to assist
                          you with any questions, comments, or concerns you may
                          have
                        </p>

                        {submit && (
                          <div className={`alert alert-${submit}`} role="alert">
                            {submitMessage}
                          </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                          <div className="input-group-column">
                            <div className="input">
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="First Name"
                                value={values.first_name || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="input"
                              />
                              {touched.first_name && errors.first_name && (
                                <div className="error">{errors.first_name}</div>
                              )}
                            </div>
                            <div className="input">
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Last Name"
                                value={values.last_name || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="input"
                              />
                              {touched.last_name && errors.last_name && (
                                <div className="error">{errors.last_name}</div>
                              )}
                            </div>
                          </div>
                          <div className="input-group-column">
                            <div className="input">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="input"
                              />
                              {touched.email && errors.email && (
                                <div className="error">{errors.email}</div>
                              )}
                            </div>
                            <div className="input">
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={values.subject || ""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="input"
                              />
                              {touched.subject && errors.subject && (
                                <div className="error">{errors.subject}</div>
                              )}
                            </div>
                          </div>
                          <div className="input">
                            <textarea
                              name="message"
                              id="message"
                              cols="30"
                              rows="10"
                              className="input textarea"
                              placeholder="Message"
                              required
                              value={values.message || ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            ></textarea>
                            {touched.message && errors.message && (
                              <div className="error">{errors.message}</div>
                            )}
                          </div>
                          {/* <div className="input">
                            <ReCAPTCHA
                              sitekey="6LfBVvslAAAAAN4DZ4XzpmN_72xgJoHCHO1FBhtM"
                              render="explicit"
                              verifyCallback={(response) => {
                                setFieldValue("recaptcha", response);
                              }}
                              onloadCallback={() => {
                                console.log("done loading!");
                              }}
                            />
                            <div className="error">
                              {errors.captcha}
                            </div>
                          </div> */}
                          <button
                            type="submit"
                            className="button button--effect contact"
                          >
                            Submit Request<i className="bi bi-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="col-lg-5 row-item">
                      <div className="contact-area-single contact-area__sidebar wow fadeInUp">
                        <p className="secondary">Blood Excellence!</p>
                        <h4>Expanded Blood Donate Services Here</h4>
                        <p className="neutral-bottom">
                          By donating blood, you have the opportunity to make a
                          significant impact on the lives of others. We
                          encourage everyone who is able to donate blood to
                          consider doing so and join us in our efforts to
                          improve the health and well-being of our community.
                        </p>
                        <div className="group">
                          {/* <p className="secondary">
                            <i className="bi bi-telephone-fill"></i> 0345 -
                            1234567
                          </p> */}
                          <p className="secondary">
                            <i className="bi bi-geo-alt-fill"></i>
                            All over Pakistan
                          </p>
                          <p className="secondary">
                            <i className="bi bi-clock-fill"></i> 24 / 7
                          </p>
                        </div>
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

      {/* <!-- ==== google map start ==== --> */}
      <div className="map__wrapper">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.775631532833!2d-78.50382604856944!3d39.67726140810045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca663965e89cbd%3A0xa9ee5997c8a56f43!2sKoontz%20Rd%2C%20Maryland%2021530%2C%20USA!5e0!3m2!1sen!2sbd!4v1665834676559!5m2!1sen!2sbd"></iframe> */}
      </div>
      {/* <!-- ==== #google map end ==== --> */}

      <Footer />
    </>
  );
}
