import {
  faArrowRightToBracket,
  faClockRotateLeft,
  faHeart,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./IndexOne.css";
import DoctorOne from "../Images/Doctor1.webp";
import DoctorTwo from "../Images/Doctor2.webp";
import DoctorThree from "../Images/Doctor3.webp";
import HeartIcon from "../Images/heart.webp";
import FirstAidIcon from "../Images/first-aid.webp";
import TubeIcon from "../Images/tube.webp";
import BloodDonate from "../Images/blood-donate.webp";
import BloodDonate3 from "../Images/blood-donate3.webp";
import BloodDonate4 from "../Images/blood-donate4.webp";
import slideImage1 from "../Images/patient-donating-blood-at-hospital.webp";
import slideImage2 from "../Images/doctor-taking-blood-samples.webp";
import slideImage3 from "../Images/6-1.webp";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import moment from "moment";
import GeneralService from "../../services/general.service";

export default function IndexOne() {

  const [normalReq, setNormalReq] = useState([]);
  const [emergencyReq, setEmergencyReq] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [marqueeTxt, setMarqueeTxt] = useState("");

  const getNormalData = async (page, city, area, group) => {
    try {
      const response = await GeneralService.listBloodReq("normal");
      const { data } = response;
      const { response: res } = data;
      let resultData;
      resultData = res;
      setNormalReq(resultData);
    } catch (err) {
      setNormalReq([]);
    }
  };

  const getEmergencyData = async (page, city, area, group) => {
    try {
      const response = await GeneralService.listBloodReq("emergency");
      const { data } = response;
      const { response: res } = data;
      let resultData;
      resultData = res;
      setEmergencyReq(resultData);
    } catch (err) {
      setEmergencyReq([]);
    }
  };

  const getVolunteers = async () => {
    try {
      const response = await GeneralService.listVolunteers();
      const { data } = response;
      const { response: res } = data;
      let resultData;
      resultData = res;
      setVolunteers(resultData);
    } catch (err) {
      setVolunteers([]);
    }
  };

  const getMarquee = async () => {
    try {
      const response = await GeneralService.getMarquee();
      const { data } = response;
      const { response: res } = data;
      let resultData;
      resultData = res;
      setMarqueeTxt(resultData);
    } catch (err) {
      setMarqueeTxt("");
    }
  };

  useEffect(() => {
    getNormalData();
    getEmergencyData();
    getMarquee();
    getVolunteers();
  }, []);

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
                {/* <div className="intro-video">
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
                </div> */}
                <h1>Sehat <span style={{ color: "#ea062b" }}>Booking</span></h1>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="/find-donor" className="button button--effect">
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
                {/* <div className="intro-video">
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
                </div> */}
                <h1>Sehat <span style={{ color: "#ea062b" }}>Booking</span></h1>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="/find-donor" className="button button--effect">
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
                {/* <div className="intro-video">
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
                </div> */}
                <h1>Sehat <span style={{ color: "#ea062b" }}>Booking</span></h1>
                <h3>Donate blood,save life !</h3>
                <h1>Donate Blood And Inspires Others.</h1>
                <a href="/find-donor" className="button button--effect">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==== #hero section end ==== --> */}

      {/* <!-- ==== overview section start ==== --> */}
      <section className="overview">
        <div className="container">
          <div className="explore-area wow fadeInUp">
            <div className="explore-area__single">
              <div className="explore-area__single-content">
                <h4>
                  <a href="/register">Register Now</a>
                </h4>
                <p className="neutral-bottom">
                  Register yourself as a Donor and donate your Blood to helpful
                  society
                </p>
              </div>
              <a href="/register">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </a>
            </div>
            <div className="explore-area__single explore-area__single--secondary">
              <div className="explore-area__single-content">
                <h4>
                  <a href="/find-donor">Find Donor</a>
                </h4>
                <p className="neutral-bottom">
                  Click the button to find a donor that will donate blood to
                  yourself
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
                      <img src={BloodDonate4} alt="Blood Donor" />
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={FirstAidIcon} alt="First Aid" />
                      </div>
                    </div>
                    <h5>Become a Donor</h5>
                    <p className="neutral-bottom">
                      Register yourself as a donor by visiting registration page
                      and fill the required information in the form
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                <div className="overview-area__single img-effect wow fadeInUp">
                  <div className="overview-area__single-content">
                    <div className="poster">
                      <img src={BloodDonate3} alt="Give Blood" />
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={TubeIcon} alt="Tube" />
                      </div>
                    </div>
                    <h5>Why Give Blood?</h5>
                    <p className="neutral-bottom">
                      Blood transfusions are used to treat a variety of medical
                      conditions, including anemia, cancer, surgery, and trauma.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                <div
                  className="overview-area__single img-effect wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="overview-area__single-content">
                    <div className="poster">
                      <img src={BloodDonate} alt="Blood Donation" />
                    </div>
                    <div className="icon-box-wrapper">
                      <div className="icon-box">
                        <img src={HeartIcon} alt="Heart" />
                      </div>
                    </div>
                    <h5>How Donations Helps</h5>
                    <p className="neutral-bottom">
                      By donating blood, you are helping to ensure that there is
                      a steady supply of blood available to those who need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #overview section end ==== --> */}

      {/* <!-- ==== donor section end ==== --> */}
      {/* <section className="donor dark-overlay section-space bg-img">
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
      </section> */}
      {/* <!-- ==== #donor section end ==== --> */}

      {/* <!-- ==== appointment section start ==== --> */}
      <section className="appointment section-space-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-area">
                <div className="row neutral-row">
                  <div className="col-lg-6 row-item">
                  <div id="page-wrap">
                    <div className="appointment-area__single appointment-area__content">
                      <h4 className="red">
                        <FontAwesomeIcon icon={faClockRotateLeft} /> Recent
                        Blood Request
                      </h4>
                      <ul>
                        {normalReq.length ? (
                          normalReq.map((row) => (
                            <li>
                              <FontAwesomeIcon icon={faHeart} />
                              {`${row.blood} ${row.city}, ${row.state}, ${row.phone}`}{" "}
                              ({moment(row.date).format("DD.MM.YYYY")})
                            </li>
                          ))
                        ) : (
                          <li>
                            <FontAwesomeIcon icon={faHeart} />
                            No recent blood request
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-6 row-item">
                  <div id="page-wrap">
                    <div className="appointment-area__single appointment-area__content bg-red">
                      {/* <p>
                        <marquee className="blink">{marqueeTxt}</marquee>
                      </p> */}
                      <h4 className="red">
                        <i class="fa fa-heartbeat"></i> Emergency Blood Request
                      </h4>
                      <ul>
                        {emergencyReq.length ? (
                          emergencyReq.map((row) => (
                            <li className="black">
                              <FontAwesomeIcon icon={faHeart} id="white" />
                              {`${row.blood} ${row.city}, ${row.state}, ${row.phone}`}{" "}
                              ({moment(row.date).format("DD.MM.YYYY")})
                            </li>
                          ))
                        ) : (
                          <li>
                            <FontAwesomeIcon icon={faHeart} />
                            No recent blood request
                          </li>
                        )}
                      </ul>
                    </div>
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
                  {volunteers.map(
                    (data) => (
                      <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                        <div className="team-area__single img-effect">
                          <div className="poster">
                            <img src={`https://api.sehatbooking.com/public/upload/${data.image}`} alt={data.name} />
                          </div>
                          <h5>{data.name}</h5>
                          {/* <p className="secondary neutral-descender">Co-Founder</p> */}
                        </div>
                      </div>
                      )
                  )}

                  {/* <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                    <div className="team-area__single img-effect wow fadeInUp">
                      <div className="poster">
                        <img src={DoctorTwo} alt="Alex Joshan Deo" />
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
                      </div>
                      <h5>Alex Joshi Deon</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        We strive to respond to all inquiries in a timely manner
                        and look forward to the opportunity to assist you with
                        any questions, comments, or concerns you may have
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="cta-area__btn text-start text-md-end">
                      <Link
                        to="/contact-us"
                        className="button button--quaternary button--effect"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
