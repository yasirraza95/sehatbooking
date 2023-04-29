import React from "react";
import Footer from "../Footer/Footer";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import Regsiter from "../Images/registration.webp";
import ScanTest from "../Images/screen-test.webp";
import Blood from "../Images/blood.webp";
import TestBlood from "../Images/testBlood.webp";
import Doctor from "../Images/doctor.webp";
import Donate from "../Images/donate.webp";
import { Link } from "react-router-dom";
import useImportScript from "../../utils/useImportScript";
import "./ServiceDetail.css";
export default function ServiceDetail() {
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
                  <h2>Service Details</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Service Details
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

      {/* <!-- ==== service details section start ==== --> */}
      <section className="service-details section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-area">
                <div className="row neutral-row">
                  <div className="col-lg-4 order-last order-lg-first row-item">
                    <div className="service-details-area__sidebar">
                      <div className="sidebar-single sidebar-single--secondary categories--secondary wow fadeInUp">
                        <h4>Our Services</h4>
                        <ul>
                          <li>
                            <Link to="/our-services">
                              Blood Donation
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              Health Check
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              Blood Bank
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              Donate Process
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              All Services
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="sidebar-single sidebar-single--secondary excellence wow fadeInUp">
                        <h4>Blood Excellence</h4>
                        <h3>Expanded Blood Donate Services Here</h3>
                        <p>
                          There are many variations of passages Lorem Ipsum
                          available, but the majority suffered of alteration in
                          some form,
                        </p>
                        <Link
                          to="/contact-us"
                          className="button button--quinary button--effect"
                        >
                          Contact Us
                        </Link>
                      </div>
                      <div className="sidebar-single sidebar-single--secondary">
                        <h4>Leave a Message</h4>
                        <form action="#" method="post" name="quickMessage">
                          <div className="input">
                            <input
                              type="text"
                              name="quick__name"
                              id="quickName"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="input">
                            <input
                              type="email"
                              name="quick__mail"
                              id="quickMail"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="input">
                            <textarea
                              name="quick__message"
                              id="quickMessage"
                              cols="30"
                              rows="10"
                              placeholder="Message Details"
                            ></textarea>
                          </div>
                          <button className="button button--effect">
                            Send Message
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 row-item">
                    <div className="service-details-area__content service-details-area__content-alt">
                      <div className="content-group-secondary group-space">
                        <h2>Know More Us of Our Blood Donate Services</h2>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.{" "}
                        </p>

                        <p className="neutral-bottom">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam,
                        </p>
                      </div>
                      <div className="service-details-area__poster group-space wow fadeInUp">
                        <img src={Donate} alt="Service Details" />
                      </div>
                      <div className="content-group--secondary group-space">
                        <h2 className="descender">
                          Your Blood Donate Can Change Someone’s Life
                        </h2>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit,{" "}
                        </p>

                        <p className="neutral-bottom">
                          sed quia consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet, consectetur,
                          adipisci velit, sed quia non numquam eius modi tempora
                          incidunt ut labore et dolore magnam aliquam quaerat
                          voluptatem.
                        </p>
                      </div>
                      <div className="content-group--secondary group-space">
                        <h2 className="descender">Donation Process</h2>
                        <p className="neutral-bottom">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, eaque
                          quae illo inventore veritatis et quasi architecto
                          beatae vitae dicta sunt explicabo.{" "}
                        </p>
                      </div>
                      <div className="group-item-wrapper group-space">
                        <div className="group-inner__item">
                          <div className="wrapper">
                            <div className="group-inner__item__inner">
                              <img src={Regsiter} alt="Registration" />
                            </div>
                          </div>
                          <h4 className="neutral-bottom">Registration</h4>
                        </div>
                        <div className="group-inner__item">
                          <div className="wrapper">
                            <div className="group-inner__item__inner">
                              <img src={ScanTest} alt="Screen Test" />
                            </div>
                          </div>
                          <h4 className="neutral-bottom">Screening Test</h4>
                        </div>
                        <div className="group-inner__item">
                          <div className="wrapper">
                            <div className="group-inner__item__inner">
                              <img src={Blood} alt="Blood Donate" />
                            </div>
                          </div>
                          <h4 className="neutral-bottom">Blood Donate</h4>
                        </div>
                      </div>
                      <div className="group-space">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going use passage of Lorem Ipsum, you need to be sure
                          there isn't anything embarrassing hidden
                        </p>

                        <div className="img-group">
                          <img src={TestBlood} alt="Donate" />
                          <img src={Doctor} alt="Donate" />
                        </div>
                      </div>
                      <div className="wow fadeInUp">
                        <h2>Key Benefits</h2>
                        <div className="faq-wrapper faq-wrapper--secondary">
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
                                  We Can Save More Lifes With Your Helping Hand.
                                </button>
                              </h6>
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <p className="neutral-bottom">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor labore dolore magna aliquyam erat,
                                    sed diam voluptua.Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, diam
                                    nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, diam voluptua.
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
                                  We Can Save More Lifes With Your Helping Hand.
                                </button>
                              </h6>
                              <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <p className="neutral-bottom">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor labore dolore magna aliquyam erat,
                                    sed diam voluptua.Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, diam
                                    nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, diam voluptua.
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
                                  We Can Save More Lifes With Your Helping Hand.
                                </button>
                              </h6>
                              <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <p className="neutral-bottom">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor labore dolore magna aliquyam erat,
                                    sed diam voluptua.Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, diam
                                    nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, diam voluptua.
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
                                  We Can Save More Lifes With Your Helping Hand.
                                </button>
                              </h6>
                              <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <p className="neutral-bottom">
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor labore dolore magna aliquyam erat,
                                    sed diam voluptua.Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, diam
                                    nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, diam voluptua.
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #service details section end ==== --> */}

      <Footer />
    </>
  );
}
