import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
// import ToTop from "../TopTop/ToTop";
import "./Register.css";
import VisibleFields from "../VisibleFields/VisibleFields";
import useImportScript from "../../utils/useImportScript";

export default function Register() {
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
      {/* <main id="page-content"  className="d-flex nm-aic nm-vh-md-100"> */}
      {/* <!-- // Logo wrapper --> */}
      {/* <div id="logo-container">
                    <a  className="d-none d-md-flex" href="/" aria-label="Nimoy">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679220124/Sehatbooking/logo_yqgytd.png" alt="Logo" />
                   
                    </a>
                    <a  className="d-flex d-md-none" href="/" aria-label="Nimoy">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679130514/Sehatbooking/logo-light_hcpctn.png" alt="Logo" />
                    </a>
                </div> */}
      {/* <!-- Logo wrapper // --> */}

      {/* <!-- // Non-form side --> */}
      {/* <div id="non-form-side"  className="col-md-4 col-lg-4 col-xl-4 d-none d-md-flex nm-aic nm-vh-100">
                    <div  className="overlay"></div>
                </div> */}
      {/* <!-- Non-form Side // --> */}

      {/* <!-- // Form side --> */}
      {/* <div  className="container">
                    <div  className="row">
                        <div  className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 nm-st nm-st-md">
                            <form>
                                <div  className="box">
                                    <div  className="nm-mb-2 nm-mb-md-2">
                                        <h2>Welcome to Nimoy
                                        </h2>
                                        <p>Fill out the form to register

                                        </p>
                                    </div>

                                    <div  className="form-group">
                                        <input type="email"  className="form-control" id="inputEmail" tabindex="1" placeholder="Enter Email" required="" />
                                    </div>
                                    <div  className="form-group">
                                        <input type="email"  className="form-control" id="inputEmail" tabindex="1" placeholder="Password" required="" />
                                    </div>     
                                    <div  className="form-group">
                                        <input type="email"  className="form-control" id="inputEmail" tabindex="1" placeholder="Confirm Password" required="" />
                                    </div>        

                                    <div  className="row nm-aic nm-mb-2">
                                        <div  className="col-sm-6 nm-mb-1 nm-mb-sm-0">
                                            <a  className="nm-fs-1 nm-fw-bd" href="login.html">
                                                <i  className="fas fa-chevron-left nm-fal"></i>
                                                Back to sign in
                                            </a>
                                        </div>

                                        <div  className="col-sm-6 nm-sm-tr">
                                            <button type="submit"  className="btn btn-primary nm-hvr nm-btn-1">Send Reset Link</button>
                                        </div>
                                    </div>
                                </div></form>
                        </div>
                    </div>
                </div> */}
      {/* <!-- Form Side // --> */}
      {/* </main> */}
      <Header />
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Register As a Blood Donor</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Register Now{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==== registration section start ==== --> */}
      <section className="registration section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="registration-area wow fadeInUp">
                <div className="section-header section-inner-space">
                  <h2 className="neutral-bottom">Blad Ai Organization</h2>
                </div>
                <div className="registration-area__form">
                  <form action="#" method="post" name="registration__form">
                    <div className="registration-area__form-single">
                      <p className="secondary">Full Name *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiFName">First Name</label>
                            <input
                              type="text"
                              name="regi_f_name"
                              id="regiFName"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiLName">Last Name</label>
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
                            <label for="regiMonth">Month</label>
                            <select className="select-month" id="regiMonth">
                              <option
                                label=""
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiDay">Day</label>
                            <select className="select-day" id="regiDay">
                              <option
                                label=""
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiYear">Year</label>
                            <select className="select-year" id="regiYear">
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiGroup">Blood Group</label>
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
                            <label for="regiLastMonth">Month</label>
                            <select
                              className="select-last-month"
                              id="regiLastMonth"
                            >
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiLastDay">Day</label>
                            <select
                              className="select-last-day"
                              id="regiLastDay"
                            >
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiLastYear">Year</label>
                            <select
                              className="select-last-year"
                              id="regiLastYear"
                            >
                              <option
                                label=""
                                selected
                                style={{ display: "none" }}
                              ></option>
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
                            <label for="regiNumber">Number</label>
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
                            <select
                              className="select-regi-country"
                              id="regiCountry"
                            >
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
                              className="button button--effect"
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
