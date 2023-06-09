import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import Slider from "../Slider/Slider";
import "./AboutUs.css";

export default function AboutUs() {

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
                  <h2>About Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us{" "}
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

      {/* <!-- ==== who we are section start ==== --> */}
      <section className="who section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="who-area">
                <div className="row d-flex align-items-center neutral-row">
                  <div className="col-lg-6 row-item">
                    <div className="who-area__content wow fadeInUp">
                      <h2 className="descender">Who We Are</h2>
                      <h5 className="descender">
                        We are here not for income, but for outcome
                      </h5>
                      <p>
                        We" in a statement about blood donors typically refers
                        to people who have donated blood. This can include
                        individuals from all walks of life, including men and
                        women of all ages, races, and backgrounds. Blood donors
                        are individuals who have voluntarily given a part of
                        themselves to help others in need. They may have donated
                        blood for a variety of reasons, including to help a
                        friend or family member, to give back to their
                        community, or simply because they believe it is the
                        right thing to do. Blood donors are an essential part of
                        the healthcare system, and their generosity and
                        selflessness have a significant impact on the lives of
                        many people who need blood transfusions to survive.
                      </p>

                      <a href="/find-donor" className="button button--effect">
                        Explore Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 row-item order-first order-lg-last">
                    <div className="who-area__thumb text-start text-lg-center">
                      <img
                        src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679158385/Sehatbooking/img-group-two_jlrjkl.png"
                        alt="Who We Are"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #who we are section end ==== --> */}

      {/* <!-- ==== counter two start ==== --> */}
      <div className="counter counter--secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-area">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="25"
                        >
                          0
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Year's Experience
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="430"
                        >
                          0
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Blood Donations
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30 mbs">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="90"
                        >
                          0
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Total Awards
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="35"
                        >
                          0
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Blood Cooperations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==== #counter two end ==== --> */}

      {/* <!-- ==== organization section start ==== --> */}
      <section className="organization section-space organization-alt-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="organization-area">
                <div className="row d-flex align-items-center neutral-row">
                  <div className="col-lg-6 row-item">
                    <div className="organization-area__thumb text-center">
                      <img
                        src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679164969/Sehatbooking/organization-two_s0h4b2.png"
                        alt="Organization"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 row-item">
                    <div className="organization-area__content wow fadeInUp">
                      <p className="neutral-ascender primary descender">
                        Help The People in Need
                      </p>
                      <h2>Welcome To Blood Donors Organization</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. suspendisse the gravida. Risus commodo viverra
                        maecenas
                      </p>
                      <div className="organization-area__content-points">
                        <ul>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Good
                            Service
                          </li>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Help
                            People
                          </li>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Hygine
                            Tools
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>24h
                            Service
                          </li>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Health
                            Check
                          </li>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Blood
                            Bank
                          </li>
                        </ul>
                      </div>
                      <a href="services.html" className="button button--effect">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #organization section end ==== --> */}

      {/* <!-- ==== campaign two section start ==== --> */}
      <section className="campaign campaign--secondary section-space">
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
                  <div className="col-sm-10 col-md-12 col-lg-4 col-xl-6 row-item align-center">
                    <div className="campaign--secondary-single img-effect">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679165259/Sehatbooking/collection_jweqwh.png"
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
                          magna aliqua ipsum dolor sit elit consectetur
                          adipiscing ipsum elit, sed do magna aliqua ipsum dolor
                          sit elit consectetur adipiscing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-xl-3 row-item align-center">
                    <div className="campaign--secondary-single img-effect wow fadeInUp">
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679165259/Sehatbooking/checking_c6onbc.png"
                            alt="Checking"
                          />
                        </a>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <p className="post-date-small">
                          <i className="fa-solid fa-calendar-days"></i>13
                          February, 2022
                        </p>
                        <h6>
                          <a href="campaign-details.html">
                            Free Group Checking
                          </a>
                        </h6>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit consectetur adipiscing elit, sed
                          do incididunt et dolore magna aliqua consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-xl-3 row-item align-center">
                    <div
                      className="campaign--secondary-single img-effect wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="poster">
                        <a href="campaign-details.html">
                          <img
                            src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679165259/Sehatbooking/camp_ovhfen.png"
                            alt="camp"
                          />
                        </a>
                      </div>
                      <div className="campaign--secondary-single__inner">
                        <p className="post-date-small">
                          <i className="fa-solid fa-calendar-days"></i>13
                          February, 2022
                        </p>
                        <h6>
                          <a href="campaign-details.html">
                            Blood Donation Camp
                          </a>
                        </h6>
                        <p className="neutral-bottom">
                          Lorem ipsum dolor sit consectetur adipiscing elit, sed
                          do incididunt et dolore magna aliqua consectetur.
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

                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== testimonial two section end ==== --> */}

      {/* <!-- ==== call now section start ==== --> */}
      <section className="call dark-overlay bg-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-area">
                <div className="icon-box__wrapper">
                  <a href="tel:+923481586695" className="icon-box">
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
                <p className="primary neutral-ascender descender">
                  Start Donating
                </p>
                <h2 className="descender">Call Now : +92 348 158 6695</h2>
                <div className="group">
                  <a href="/contact-us">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>All over Pakistan</span>
                  </a>
                  <a href="mailto:sehatbooking@gmail.com">
                    <i className="bi bi-envelope-fill"></i>
                    <span>sehatbooking@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #call now section end ==== --> */}

      {/* <!-- ==== team section start ==== --> */}
      <section className="team team--secondary section-space">
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
                  <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                    <div className="team-area__single img-effect">
                      <div className="poster">
                        <img
                          src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679166695/Sehatbooking/nora_knntzw.png"
                          alt="Nora"
                        />
                      </div>
                      <h5>Nora Khaypeia</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                    <div className="team-area__single img-effect wow fadeInUp">
                      <div className="poster">
                        <img
                          src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679166695/Sehatbooking/joshi_j6s1mb.png"
                          alt="Alex Joshan Deo"
                        />
                      </div>
                      <h5>Nora Khaypeia</h5>
                      <p className="secondary neutral-descender">Co-Founder</p>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                    <div
                      className="team-area__single img-effect wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="poster">
                        <img
                          src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679166694/Sehatbooking/alex_kzyvxs.png"
                          alt="Alex Joshi Deon"
                        />
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
                        href="/contact-us"
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

      <Footer />
    </>
  );
}
