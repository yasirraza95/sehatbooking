import {
  faArrowRightToBracket,
  faHeart,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import ToTop from "../TopTop/ToTop";
import "./IndexOne.css";
import DoctorOne from "../Images/Doctor1.jpg";
import DoctorTwo from "../Images/Doctor2.jpg";
import DoctorThree from "../Images/Doctor3.jpg";
import HeartIcon from "../Images/heart.png";
import FirstAidIcon from "../Images/first-aid.png";
import TubeIcon from "../Images/tube.png";
import BloodDonate from "../Images/blood-donate.jpg";
import slideImage1 from "../Images/patient-donating-blood-at-hospital.jpg";
import slideImage2 from "../Images/doctor-taking-blood-samples.jpg";
import slideImage3 from "../Images/6-1.jpg";

export default function IndexOne() {
  // useEffect(() => {
  //   return () => {
  //     <>
  //       <section className="hero-slider-area">
  //         <div className="hero-slider owl-carousel owl-theme">
  //           <div
  //             className="hero-slider-item bg-img"
  //             data-background={slideImage1}
  //           >
  //             <div className="container">
  //               <div className="hero-slider-content">
  //                 <div className="intro-video">
  //                   <div className="d-flex align-items-center">
  //                     <a
  //                       href="https://www.youtube.com/watch?v=NtETKgSE7i0"
  //                       title="YouTube video player"
  //                       className="video-btn video-popup-btn"
  //                     >
  //                       <span>
  //                         <i className="fa-solid fa-play"></i>
  //                       </span>
  //                     </a>
  //                     <span>Intro Video</span>
  //                   </div>
  //                 </div>
  //                 <h3>Donate blood,save life !</h3>
  //                 <h1>Donate Blood And Inspires Others.</h1>
  //                 <a href="services.html" className="button button--effect">
  //                   Explore Now
  //                 </a>
  //               </div>
  //             </div>
  //           </div>

  //           <div
  //             className="hero-slider-item bg-img"
  //             data-background={slideImage2}
  //           >
  //             <div className="container">
  //               <div className="hero-slider-content animation-style-two">
  //                 <div className="intro-video">
  //                   <div className="d-flex align-items-center">
  //                     <a
  //                       href="https://www.youtube.com/watch?v=NtETKgSE7i0"
  //                       title="YouTube video player"
  //                       className="video-btn video-popup-btn"
  //                     >
  //                       <span>
  //                         <i className="fa-solid fa-play"></i>
  //                       </span>
  //                     </a>
  //                     <span>Intro Video</span>
  //                   </div>
  //                 </div>
  //                 <h3>Donate blood,save life !</h3>
  //                 <h1>Donate Blood And Inspires Others.</h1>
  //                 <a href="services.html" className="button button--effect">
  //                   Explore Now
  //                 </a>
  //               </div>
  //             </div>
  //           </div>

  //           <div
  //             className="hero-slider-item bg-img"
  //             data-background={slideImage3}
  //           >
  //             <div className="container">
  //               <div className="hero-slider-content animation-style-three">
  //                 <div className="intro-video">
  //                   <div className="d-flex align-items-center">
  //                     <a
  //                       href="https://www.youtube.com/watch?v=NtETKgSE7i0"
  //                       title="YouTube video player"
  //                       className="video-btn video-popup-btn"
  //                     >
  //                       <span>
  //                         <i className="fa-solid fa-play"></i>
  //                       </span>
  //                     </a>
  //                     <span>Intro Video</span>
  //                   </div>
  //                 </div>
  //                 <h3>Donate blood,save life !</h3>
  //                 <h1>Donate Blood And Inspires Others.</h1>
  //                 <a href="services.html" className="button button--effect">
  //                   Explore Now
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </>
  //   };
  // }, []);
  return (
    <>
      <TopBar />
      <Header />

      {/* <!-- ==== hero section start ==== --> */}
      <section className="hero-slider-area">
        <div className="hero-slider owl-carousel owl-theme">
          <div
            className="hero-slider-item bg-img"
            data-background={slideImage1}
          >
            <div className="container">
              <div className="hero-slider-content">
                <div className="intro-video">
                  <div className="d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=NtETKgSE7i0"
                      title="YouTube video player"
                      className="video-btn video-popup-btn"
                    >
                      <span>
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </a>
                    <span>Intro Video</span>
                  </div>
                </div>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="services.html" className="button button--effect">
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="hero-slider-item bg-img"
            data-background={slideImage2}
          >
            <div className="container">
              <div className="hero-slider-content animation-style-two">
                <div className="intro-video">
                  <div className="d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=NtETKgSE7i0"
                      title="YouTube video player"
                      className="video-btn video-popup-btn"
                    >
                      <span>
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </a>
                    <span>Intro Video</span>
                  </div>
                </div>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="services.html" className="button button--effect">
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="hero-slider-item bg-img"
            data-background={slideImage3}
          >
            <div className="container">
              <div className="hero-slider-content animation-style-three">
                <div className="intro-video">
                  <div className="d-flex align-items-center">
                    <a
                      href="https://www.youtube.com/watch?v=NtETKgSE7i0"
                      title="YouTube video player"
                      className="video-btn video-popup-btn"
                    >
                      <span>
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </a>
                    <span>Intro Video</span>
                  </div>
                </div>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="services.html" className="button button--effect">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #hero section end ==== --> */}

      {/* <section className="section-content-block section-secondary-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-area">
                <div className="contact-area__content">
                  <div className="row neutral-row">
                      <div className="contact-area-singlee contact-area__content-form">
                        <h4 className="descender" style={{ color: "#000" }}>
                          Login Form
                        </h4>
                        <form action="#" name="contact__Form">
                          <div className="input" id="fields">
                            <input
                              type="text"
                              name="contact_f_name"
                              id="contactFName"
                              placeholder="Your Email"
                              required=""
                              className="input"
                            />
                          </div>
                          <div className="input" id="fields">
                            <input
                              type="password"
                              name="contact_l_name"
                              id="contactLName"
                              placeholder="Password"
                              required=""
                              className="input"
                            />
                          </div>
                          <div className="text-center">
                            <div className="btn-group">
                            <button
                              type="submit"
                              className="button button--effect"
                              id="login"
                            >
                              LOGIN <i className="bi bi-arrow-right"></i>
                            </button>

                            <button
                              type="submit"
                              className="button button--effect"
                              id="forgot"
                            >
                              FORGOT YOUR PASSWORD?
                              <img
                                src={ForgotPass}
                                alt="React Logo"
                                style={{ width: "15px", color: "#fff" }}
                              />
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>\
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- ==== overview section start ==== --> */}
      <section className="overview">
        <div className="container">
          <div className="explore-area wow fadeInUp">
            <div className="explore-area__single">
              <div className="explore-area__single-content">
                <h4>
                  <a href="register.html">Regsiter Now</a>
                </h4>
                <p className="neutral-bottom">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain,
                </p>
              </div>
              <a href="/register">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </a>
            </div>
            <div className="explore-area__single explore-area__single--secondary">
              <div className="explore-area__single-content">
                <h4>
                  <a href="donate-now.html">Donate Now</a>
                </h4>
                <p className="neutral-bottom">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain,
                </p>
              </div>
              <a href="/register">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </a>
            </div>
          </div>
          <div className="overview-area section-space">
            <div className="row neutral-row justify-content-center">
              <div className="col-sm-6 col-md-6 col-lg-4 align-center row-item">
                <div className="overview-area__single img-effect">
                  <div className="overview-area__single-content">
                    <div className="poster">
                      <a href="service-details.html">
                        <img src={BloodDonate} alt="Blood Donor" />
                      </a>
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={FirstAidIcon} alt="First Aid" />
                      </div>
                    </div>
                    <h5>Become a Donor</h5>
                    <p className="neutral-bottom">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give pleasure
                    </p>
                  </div>
                  <a
                    href="service-details.html"
                    className="button button--secondary button--effect"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                <div className="overview-area__single img-effect wow fadeInUp">
                  <div className="overview-area__single-content">
                    <div className="poster">
                      <a href="service-details.html">
                        <img src={BloodDonate} alt="Give Blood" />
                      </a>
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={TubeIcon} alt="Tube" />
                      </div>
                    </div>
                    <h5>Why Give Blood?</h5>
                    <p className="neutral-bottom">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give pleasure
                    </p>
                  </div>
                  <a
                    href="service-details.html"
                    className="button button--secondary button--effect"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                <div
                  className="overview-area__single img-effect wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="overview-area__single-content">
                    <div className="poster">
                      <a href="service-details.html">
                        <img src={BloodDonate} alt="Blood Donation" />
                      </a>
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={HeartIcon} alt="Heart" />
                      </div>
                    </div>
                    <h5>How Donations Helps</h5>
                    <p className="neutral-bottom">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give pleasure
                    </p>
                  </div>
                  <a
                    href="service-details.html"
                    className="button button--secondary button--effect"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #overview section end ==== --> */}

      {/* Reviews Section Start */}
      {/* Review Section End  */}
      {/* <!-- ==== call now section start ==== --> */}
      {/* <section className="call dark-overlay bg-img">
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
      </section> */}
      {/* <!-- ==== #call now section end ==== --> */}

      {/* <!-- ==== testimonial section start ==== --> */}
      {/* <section className="testimonial section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-area">
                            <div className="section-header section-inner-space">
                                <p className="primary neutral-ascender descender">Testimonials</p>
                                <h2 className="neutral-bottom">What Our Clients Say</h2>
                            </div>
                            <div className="testimonial-area__slider">
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/nora.png" alt="Nora"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Nora Fateha</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/niro.png" alt="Niro"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Niro Markusa</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/nicolas.png" alt="Nicolas"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Nicolas Mark</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/nora.png" alt="Nora"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Nora Fateha</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/niro.png" alt="Niro"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Niro Markusa</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-area__slider-single">
                                    <div className="testimonial-area__slider-single__inner">
                                        <div className="testimonial-area__slider-single__inner-content">
                                            <div className="rating">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="secondary neutral-descender">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum cillum dolore fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="avatar-wrapper">
                                            <div className="avatar">
                                                <img src="assets/images/avatars/nicolas.png" alt="Nicolas"/>
                                            </div>
                                            <div className="avatar-info">
                                                <h5>Nicolas Mark</h5>
                                                <p className="secondary">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
      {/* <!-- ==== testimonial section end ==== --> */}

      {/* <!-- ==== donor section end ==== --> */}
      <section className="donor dark-overlay section-space bg-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="donor-area">
                <p className="primary neutral-ascender descender">
                  Blood Owner
                </p>
                <h2>We Are Blood Donor Group</h2>
                <a
                  href="https://res.cloudinary.com/dll4d2yu7/video/upload/v1680968157/Sehatbooking/blood-21617_blxgln.mp4"
                  target="_blank"
                  title="YouTube video player"
                  className="video-btn-two video-popup-btn"
                >
                  <span>
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #donor section end ==== --> */}

      {/* <!-- ==== appointment section start ==== --> */}
      <section className="appointment section-space-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-area">
                <div className="row neutral-row">
                  <div className="col-lg-6 row-item">
                    <div className="appointment-area__single appointment-area__content">
                      <h4>Current Blood Request</h4>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          B+ Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          O- Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          B- Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          AB- Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          O+ Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          B+ Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          AB+ Washington, USA (13.02.2022)
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faHeart} />
                          B+ Washington, USA (13.02.2022)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 row-item">
                    <div className="appointment-area__single appointment-area__form">
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
      {/* <!-- ==== #appointment section end ==== --> */}

      {/* <!-- ==== team section start ==== --> */}
      <section className="team section-space-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Team Members
                  </p>
                  <h2 className="neutral-descender">Meet Volunteers</h2>
                </div>
                <div className="row neutral-row justify-content-center">
                  <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                    <div className="team-area__single img-effect">
                      <div className="poster">
                        <img src={DoctorOne} alt="Nora" />
                        <div className="social social--secondary">
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://www.twitter.com/" target="_blank">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </div>
                      </div>
                      <h5>Nora Khaypeia</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                    <div className="team-area__single img-effect wow fadeInUp">
                      <div className="poster">
                        <img src={DoctorTwo} alt="Alex Joshan Deo" />
                        <div className="social social--secondary">
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://www.twitter.com/" target="_blank">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </div>
                      </div>
                      <h5>Nora Khaypeia</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                    <div
                      className="team-area__single img-effect wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="poster">
                        <img src={DoctorThree} alt="Alex Joshi Deon" />
                        <div className="social social--secondary">
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="https://www.twitter.com/" target="_blank">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </div>
                      </div>
                      <h5>Alex Joshi Deon</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #team section end ==== --> */}

      {/* <!-- ==== cta section start ==== --> */}
      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-area">
                <div className="row d-flex align-items-center">
                  <div className="col-md-9">
                    <div className="cta-area__content">
                      <h2>Let's change the world, Join us now!</h2>
                      <p className="neutral-bottom">
                        Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but occasionally circumstances occur in which toil and
                        pain can procure reat pleasure but occasionally
                        circumstances occur.
                      </p>
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
      {/* <!-- ==== #cta section end ==== --> */}

      <ToTop />
      <Footer />
    </>
  );
}
