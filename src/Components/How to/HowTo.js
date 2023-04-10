import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import ToTop from "../TopTop/ToTop";
import Footer from "../Footer/Footer";
import useImportScript from "../../utils/useImportScript";

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
                  <div className="row neutral-row">
                    <div className="col-lg-5 row-item">
                      <div className="contact-area-single contact-area__sidebar wow fadeInUp">
                        <h4 className="descender">Steps For Usage!</h4>
                        <div className="group">
                          <p className="secondary">
                            <i className="bi bi-telephone-fill"></i> Emergency
                            Request
                          </p>
                          <p className="secondary">
                            <i className="bi bi-geo-alt-fill"></i> Find Donor
                          </p>
                          <p className="secondary">
                            <i className="bi bi-clock-fill"></i> Donate Blood
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 row-item">
                      <div className="contact-area-single contact-area__content-form">
                        <h4 className="descender">Get In Touch</h4>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          righteous indignation and dislike men by the charms
                        </p>
                        <form action="#" method="post" name="contact__Form">
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
                            className="button button--effect"
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
      </section>
      {/* <!-- ==== #contact form section end ==== --> */}
      <ToTop />
      <Footer />
    </>
  );
}
