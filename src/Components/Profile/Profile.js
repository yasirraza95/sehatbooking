import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
// import ToTop from "../TopTop/ToTop";
import Footer from "../Footer/Footer";
import VisibleFields from "../VisibleFields/VisibleFields";
import useImportScript from "../../utils/useImportScript";
import "./Profile.css";
export default function Profile() {
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
                  <h2>Profile</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Profile
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

      {/* <!-- ==== registration section start ==== --> */}
      <section className="registration section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="registration-area wow fadeInUp">
                <div className="section-header section-inner-space">
                  <h2 className="neutral-bottom">Sehat Booking</h2>
                </div>
                <div className="registration-area__form">
                  <form action="#" method="post" name="registration__form">
                    <div className="registration-area__form-single">
                      <p className="secondary">Full Name *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiFName">First Name</label>
                            <input
                              type="text"
                              name="regi_f_name"
                              id="regiFName"
                              required
                            />
                          </div>
                          <div className="input">
                            <label htmlFor="regiLName">Last Name</label>
                            <input
                              type="text"
                              name="regi_l_name"
                              id="regiLName"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Date Of Birth *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiDay">Day</label>
                            <select className="select-day" id="regiDay">
                              <option value="saturday">Saturday</option>
                              <option value="sunday">Sunday</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                            </select>
                          </div>
                          <div className="input">
                            <label htmlFor="regiMonth">Month</label>
                            <select className="select-month" id="regiMonth">
                              <option value="january">January</option>
                              <option value="february">February</option>
                              <option value="march">March</option>
                              <option value="april">April</option>
                              <option value="may">May</option>
                              <option value="june">June</option>
                              <option value="july">July</option>
                              <option value="august">August</option>
                              <option value="september">September</option>
                              <option value="october">October</option>
                              <option value="november">November</option>
                              <option value="december">December</option>
                            </select>
                          </div>
                          <div className="input">
                            <label htmlFor="regiYear">Year</label>
                            <select className="select-year" id="regiYear">
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Blood Group *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiGroup">Blood Group</label>
                            <select
                              className="select-blood-group"
                              id="regiGroup"
                            >
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
                              <option value="ab+">AB+</option>
                              <option value="ab-">AB-</option>
                              <option value="o+">O+</option>
                              <option value="o-">O-</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Last Donate Date *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiLastDay">Day</label>
                            <select className="select-donation-type">
                              <option value="saturday">Saturday</option>
                              <option value="sunday">Sunday</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                            </select>
                          </div>
                          <div className="input">
                            <label htmlFor="regiLastDay">Month</label>
                            <select className="select-donation-type">
                              <option value="january">January</option>
                              <option value="february">February</option>
                              <option value="march">March</option>
                              <option value="april">April</option>
                              <option value="may">May</option>
                              <option value="june">June</option>
                              <option value="july">July</option>
                              <option value="august">August</option>
                              <option value="september">September</option>
                              <option value="october">October</option>
                              <option value="november">November</option>
                              <option value="december">December</option>
                            </select>
                          </div>
                          <div className="input">
                            <label htmlFor="regiLastYear">Year</label>
                            <select className="select-donation-type">
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Phone Number *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiNumber">Number</label>
                            <input
                              type="text"
                              name="regi_number"
                              id="regiNumber"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Address *</p>
                      <div className="registration-area__form-single__inner mb-0">
                        <div className="input-group-column input-group-column--secondary">
                          <div className="input">
                            <label for="regiAddress">Street Address</label>
                            <input
                              type="text"
                              name="regi_address"
                              id="regiAddress"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiCity">City</label>
                            <input
                              type="text"
                              name="regi_city"
                              id="regiCity"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiState">State / Province</label>
                            <input
                              type="text"
                              name="regi_state"
                              id="regiState"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiCountry">Country</label>
                            <select className="select-donation-type">
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
                              <option value="usa">United State</option>
                              <option value="japan">Japan</option>
                              <option value="brazil">Brazil</option>
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="china">China</option>
                            </select>
                          </div>
                          <div>
                            <VisibleFields />
                          </div>
                          <div className="input registration-input-button mb-0">
                            <button
                              type="submit"
                              className="button button--effect profile"
                            >
                              Submit
                              <i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #registration section end ==== --> */}
      {/* <ToTop /> */}
      <Footer />
    </>
  );
}
