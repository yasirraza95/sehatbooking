import React from "react";
import "./Footer.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { newsletterValidation } from "../../schema";
import { useState } from "react";
import swal from "sweetalert";

export default function Footer() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: newsletterValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.subscription(values);
      const { data } = response;
      const { response: message } = data;
      // console.log(message);
      action.resetForm();
      swal(message);
      // setLoading(false);
    } catch (err) {
      swal("", "Something went wrong!", "error");
      // setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area section-space-top">
              <div className="row alt-row">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <div className="footer-area__single">
                    <h5>About Us</h5>
                    <p className="address">
                      We are connecting Blood Donor with Blood Recipient
                    </p>

                    <div className="address">
                      <p>
                        <strong>Phone :</strong> +92-348-1586695
                      </p>
                      <p>
                        <strong>Email :</strong> sehatbooking@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 col-sm-6">
                  <div className="footer-area__single">
                    <h5>Quick Links</h5>
                    <ul>
                      <li>
                        <a href="/about-us">
                          <i className="bi bi-chevron-double-right"></i>About Us
                        </a>
                      </li>
                      <li>
                        <a href="/how-to">
                          <i className="bi bi-chevron-double-right"></i>How To
                        </a>
                      </li>

                      <li>
                        <a href="/blood-tips">
                          <i className="bi bi-chevron-double-right"></i>Donation
                          Tips
                        </a>
                      </li>

                      <li>
                        <a href="/contact-us">
                          <i className="bi bi-chevron-double-right"></i>Contact
                          Us
                        </a>
                      </li>
                      <li>
                        <a href="/appointment">
                          <i className="bi bi-chevron-double-right"></i>
                          Appointment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 col-sm-6">
                  <div className="footer-area__single">
                    <h5>Services</h5>
                    <ul>
                      <li>
                        <a href="blood-request">
                          <i className="bi bi-chevron-double-right"></i>Blood
                          Request
                        </a>
                      </li>
                      <li>
                        <a href="/find-donor">
                          <i className="bi bi-chevron-double-right"></i>Find
                          Donor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="footer-area__bottom">
                <div className="row neutral-row d-flex align-items-center">
                  <div className="col-lg-6 row-item">
                    <div
                      className="footer-area__bottom-left wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <p className="secondary1">
                        Subscribe us for more update & news !!
                      </p>
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="input-group-btnn">
                          <input
                            type="email"
                            name="email"
                            id="newsletterEmail"
                            placeholder="Enter Your Email"
                            className="email"
                            required
                            value={values.email || ""}
                            onChange={handleChange}
                          />

                          <button
                            type="submit"
                            className="button button--effect"
                            id="subscribe"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                    {touched.email && errors.email && <div>{errors.email}</div>}
                  </div>
                  <div className="col-lg-6 row-item">
                    <div className="footer-area__bottom-right">
                      {/* <div className="social social--secondary">
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
                      </div> */}
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/privacy-policy">Privacy Policy</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="/terms-conditions">Terms & Conditions</a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="secondary-f neutral-bottom-footer">
                Copyright © 2023{" "}
                <a href="https://themeforest.net/user/croptheme">
                  <strong>Sehat Booking</strong>
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}
