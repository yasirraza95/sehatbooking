import React from "react";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./Campaign.css";
export default function Campaign() {
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
      {/* <LoginHeader /> */}
      <TopBar />
      <Header />
      {/* <!-- ==== banner section start ==== --> */}
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Campaign</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        campaign{" "}
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

      {/* <!-- ==== campaign two section start ==== --> */}
      <section className="campaign campaign--secondary campaign--tertiary section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="campaign-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Donate Now
                  </p>
                  <h2 className="neutral-bottom">Popular Campaigns</h2>
                </div>
                <div className="row neutral-row">
                  <div className="col-md-6 row-item">
                    <div className="campaign--secondary-single img-effect">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Blood Group Collection
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 row-item">
                    <div className="campaign--secondary-single img-effect wow fadeInUp">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection-two.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Blood Group Collection
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 row-item">
                    <div
                      className="campaign--secondary-single img-effect wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection-three.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Blood Donation Camp
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 row-item">
                    <div className="campaign--secondary-single img-effect wow fadeInUp">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection-four.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Free Group Checking
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 row-item">
                    <div
                      className="campaign--secondary-single img-effect wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Blood Group Collection
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 row-item">
                    <div className="campaign--secondary-single img-effect wow fadeInUp">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="assets/images/campaigns/collection-two.png"
                            alt="collection"
                          />
                        </a>
                        <div className="big-post-date">
                          <h4>13</h4>
                          <p className="neutral-bottom">Feb</p>
                        </div>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <h4>
                          <a href="campaign-details.html">
                            Free Group Checking
                          </a>
                        </h4>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit elit consectetur adipiscing
                          ipsum elit, sed do incididunt et dolore adipiscing
                          magna aliqua sed do incididunt et dolore adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #camapign two section end ==== --> */}

      {/* <!-- ==== cta two section start ==== --> */}
      <section className="cta cta--secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-area">
                <div className="row d-flex align-items-center">
                  <div className="col-md-9">
                    <div className="cta-area__content">
                      <h2 className="neutral-bottom">
                        Let's change the world, Join us now!
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="cta-area__btn text-start text-md-end">
                      <a
                        href="contact-us.html"
                        className="button button--quaternary button--effect"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #cta two section end ==== --> */}

      {/* <!-- ==== testimonial two section start ==== --> */}
      <section className="testimonial--secondary section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial--secondary-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Testimonials
                  </p>
                  <h2 className="neutral-bottom">What Our Clients Say</h2>
                </div>
                <div className="testimonial--secondary-area__slider-wrapper">
                  <div className="testimonial--secondary-area__slider">
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Professional services all the way</h4>
                        <p className="tertiary">
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure is to be
                          welcomed and every pain avoided.
                        </p>
                        <div className="avatar">
                          <img
                            src="assets/images/avatars/jhon.png"
                            alt="Jhon"
                          />
                          <div className="avatar-info">
                            <h6>Jhon Alexis</h6>
                            <span className="span">Marketing Staff</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Professional services all the way</h4>
                        <p className="tertiary">
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure is to be
                          welcomed and every pain avoided.
                        </p>
                        <div className="avatar">
                          <img
                            src="assets/images/avatars/jhon.png"
                            alt="Jhon"
                          />
                          <div className="avatar-info">
                            <h6>Jhon Alexis</h6>
                            <span className="span">Marketing Staff</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Professional services all the way</h4>
                        <p className="tertiary">
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure is to be
                          welcomed and every pain avoided.
                        </p>
                        <div className="avatar">
                          <img
                            src="assets/images/avatars/jhon.png"
                            alt="Jhon"
                          />
                          <div className="avatar-info">
                            <h6>Jhon Alexis</h6>
                            <span className="span">Marketing Staff</span>
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
      {/* <!-- ==== testimonial two section end ==== --> */}

      {/* <!-- ==== appointment three section start ==== --> */}
      <section className="appointment appointment--secondary appointment--tertiary section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Registration
                  </p>
                  <h2 className="neutral-descender">
                    Your Donation Can Make Someone’s Life Better
                  </h2>
                </div>
                <div className="row neutral-row">
                  <div className="col-lg-6 row-item">
                    <div className="appointment-area__single appointment-area__content">
                      <h4>Good To Know Blood Donate</h4>
                      <div className="faq-wrapper">
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h6
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="true"
                                aria-controls="flush-collapseOne"
                              >
                                How to donate on our site using your form?
                              </button>
                            </h6>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus
                                  id quod maxime placeat facere possimus,
                                  voluptas assumenda est, omnis dolor
                                  repellendus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h6
                              className="accordion-header"
                              id="flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                How to donate on our site using your form?
                              </button>
                            </h6>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus
                                  id quod maxime placeat facere possimus,
                                  voluptas assumenda est, omnis dolor
                                  repellendus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h6
                              className="accordion-header"
                              id="flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                How to donate on our site using your form?
                              </button>
                            </h6>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus
                                  id quod maxime placeat facere possimus,
                                  voluptas assumenda est, omnis dolor
                                  repellendus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h6
                              className="accordion-header"
                              id="flush-headingFour"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                              >
                                How to donate on our site using your form?
                              </button>
                            </h6>
                            <div
                              id="flush-collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingFour"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus
                                  id quod maxime placeat facere possimus,
                                  voluptas assumenda est, omnis dolor
                                  repellendus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h6
                              className="accordion-header"
                              id="flush-headingFive"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                              >
                                How to donate on our site using your form?
                              </button>
                            </h6>
                            <div
                              id="flush-collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingFive"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Nam libero tempore, cum soluta nobis est
                                  eligendi optio cumque nihil impedit quo minus
                                  id quod maxime placeat facere possimus,
                                  voluptas assumenda est, omnis dolor
                                  repellendus.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 row-item">
                    <div className="appointment-area__single appointment-area__form wow fadeInUp">
                      <h4>Request Appointment Here</h4>
                      <form action="#" method="post" name="appointmentForm">
                        <div className="input-group-column">
                          <div className="input">
                            <input
                              type="text"
                              name="appointment__name"
                              id="appointmentName"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="input">
                            <input
                              type="number"
                              name="appointment__number"
                              id="appointmentNumber"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            name="appointment__email"
                            id="appointmentEmail"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="input">
                          <select className="select-donation-type">
                            <option data-display="Donation Type">
                              Donation Type
                            </option>
                            <option value="free">Free Donation</option>
                            <option value="health">Health Checkup</option>
                            <option value="paid">Paid Donation</option>
                          </select>
                        </div>
                        <div className="input">
                          <textarea
                            name="appointment__message"
                            id="appointmentMessage"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="button button--tertiary button--effect"
                        >
                          Submit Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #appointment three section end ==== --> */}
      <Footer />
    </>
  );
}
