import React from "react";
import AccordionPage from "../Accordion/AccordionPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import Slider from "../Slider/Slider";
import "./Faqs.css";
function Faqs() {
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
                  <h2>FAQ'S</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        FAQ'S
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

      {/* <!-- ==== faq section start ==== --> */}
      <section className="faq section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">FAQ'S</p>
                  <h2 className="neutral-bottom">Frequently Asked Question</h2>
                </div>
                <div
                  className="faq-wrapper faq-wrapper--secondary faq-wrapper--tertiary faq-wrapper-alt wow fadeInUp"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUpe",
                  }}
                >
                  <AccordionPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #faq section end ==== --> */}

      {/* <!-- ==== call now section start ==== --> */}
      <section className="call dark-overlay bg-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-area">
                <div className="icon-box__wrapper">
                  <a href="tel:+01(977)259912" className="icon-box">
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
                <p className="primary neutral-ascender descender">
                  Start Donating
                </p>
                <h2 className="descender">Call Now : 333 555 9090</h2>
                <div className="group">
                  <a href="contact-us.html">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>New York – 1075 Firs Avenue</span>
                  </a>
                  <a href="mailto:company@domin.com">
                    <i className="bi bi-envelope-fill"></i>
                    <span>donate@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #call now section end ==== --> */}

      {/* <!-- ==== question section start ==== --> */}
      <div className="section question section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="question-area wow fadeInUp">
                <div className="section-header section-inner-space">
                  <h2 className="neutral-descender">
                    Did’nt Find Answer? Submit Your Question.
                  </h2>
                </div>
                <form action="#" method="post" name="questionForm">
                  <div className="input-group-column">
                    <div className="input-question">
                      <input
                        type="text"
                        name="question__form__name"
                        id="questionFormName"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="input-question">
                      <input
                        type="email"
                        name="question__form__mail"
                        id="questionFormMail"
                        placeholder="Your Email*"
                        required
                      />
                    </div>
                    <div className="input-question">
                      <input
                        type="text"
                        name="question__form__subject"
                        id="questionFormSubject"
                        placeholder="Subject*"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-question">
                    <textarea
                      name="questionform____message"
                      id="questionFormMessage"
                      cols="30"
                      rows="10"
                      placeholder="Your Question*"
                      required
                    ></textarea>
                  </div>
                  <button className="button button--effect">
                    Submit Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==== #question section end ==== --> */}

      {/* Slider Start */}
      <section className="faq section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Testimonials
                  </p>
                  <h2 className="neutral-bottom">What Our Clients Say</h2>
                </div>
                <div
                  className="faq-wrapper faq-wrapper--secondary faq-wrapper--tertiary faq-wrapper-alt wow fadeInUp"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUpe",
                  }}
                >
                  <Slider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slider End */}

      <Footer />
    </>
  );
}

export default Faqs;
