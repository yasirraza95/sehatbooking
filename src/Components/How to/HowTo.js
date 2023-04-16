import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
// import ToTop from "../TopTop/ToTop";
import Footer from "../Footer/Footer";
import useImportScript from "../../utils/useImportScript";
import "./HowTo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
export default function HowTo() {
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
      <TopBar />
      <Header />
      {/* <!-- ==== banner section start ==== --> */}
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>How to</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        How to
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
                  {/* ____________________ */}

                  {/* ____________________ */}


                  {/* <!-- Login / Register Modal--> */}
                  <div className="row neutral-row">

                    <div className="col-lg-5 row-item">
                      <div className="contact-area-single contact-area__sidebar wow fadeInUp">
                        <h4 className="descender">Steps For Usage!</h4>
                        <div className="group">
                          <ul className="nav nav-tabs howTo">
                            <li className="active">
                              <a data-toggle="tab" href="#login-form"><i class="fa fa-user-md"></i> Emergency Request
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#registration-form"><i class="fa fa-search"></i> Find Donor
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#donate-form"><i class='fas fa-hand-holding-heart'></i> Donate Blood
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 row-item">
                      <div className="contact-area-single contact-area__content-form">

                        <div className="body">
                          <div className="tab-content">
                            <div id="login-form" className="tab-pane fade in active">
                              <h4 className="descender">Emergency Request</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <form action="/">

                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_f_name"
                                      id="contactFName"
                                      placeholder="First Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_l_name"
                                      id="contactLName"
                                      placeholder="Last Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="email"
                                      name="contact_mail"
                                      id="contactMail"
                                      placeholder="Email"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_subject"
                                      id="contactSubject"
                                      placeholder="Subject"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input">
                                  <textarea
                                    name="contact_message"
                                    id="contactMessage"
                                    cols="30"
                                    rows="10"
                                    className="input textarea"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                                <button
                                  type="submit"
                                  className="button button--effect howTo"
                                >
                                  Submit Request<i className="bi bi-arrow-right"></i>
                                </button>
                              </form>
                            </div>
                            <div id="registration-form" className="tab-pane fade">
                              <h4 className="descender">Find Donor</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <form action="/">
                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_f_name"
                                      id="contactFName"
                                      placeholder="First Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_l_name"
                                      id="contactLName"
                                      placeholder="Last Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="email"
                                      name="contact_mail"
                                      id="contactMail"
                                      placeholder="Email"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_subject"
                                      id="contactSubject"
                                      placeholder="Subject"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input">
                                  <textarea
                                    name="contact_message"
                                    id="contactMessage"
                                    cols="30"
                                    rows="10"
                                    className="input textarea"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                                <button
                                  type="submit"
                                  className="button button--effect howTo"
                                >
                                  Submit Request<i className="bi bi-arrow-right"></i>
                                </button>
                              </form>
                            </div>


                            <div id="donate-form" className="tab-pane fade">
                              <h4 className="descender">Donate Blood</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <form action="/">
                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_f_name"
                                      id="contactFName"
                                      placeholder="First Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_l_name"
                                      id="contactLName"
                                      placeholder="Last Name"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input-group-column">
                                  <div className="input">
                                    <input
                                      type="email"
                                      name="contact_mail"
                                      id="contactMail"
                                      placeholder="Email"
                                      required
                                      className="input"
                                    />
                                  </div>
                                  <div className="input">
                                    <input
                                      type="text"
                                      name="contact_subject"
                                      id="contactSubject"
                                      placeholder="Subject"
                                      required
                                      className="input"
                                    />
                                  </div>
                                </div>
                                <div className="input">
                                  <textarea
                                    name="contact_message"
                                    id="contactMessage"
                                    cols="30"
                                    rows="10"
                                    className="input textarea"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                                <button
                                  type="submit"
                                  className="button button--effect howTo"
                                >
                                  Submit Request<i className="bi bi-arrow-right"></i>
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
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #contact form section end ==== --> */}
      {/* <ToTop /> */}
      <Footer />
    </>
  );
}
