import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import "./Appointment.css";
import Footer from "../Footer/Footer";
// import ToTop from "../TopTop/ToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import clockImage from "../Images/clockimg.gif";
import useImportScript from "../../utils/useImportScript";
export default function Appointment() {
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
                  <h2>Doctor Appointment</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Doctor Appointment
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

      {/* <!-- ==== Appointment section start ==== --> */}
      <section className="registration section-space">
        <div className="container">
          <img className="clock" src={clockImage} alt="responsive" />
          <div className="row">
            <div className="col-lg-12">
            <div className="wrap mt-5">
                <h1>
                  {" "}
                  Coming <strong>Soon</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
              {/* <div className="registration-area wow fadeInUp">
                                <div className="section-header section-inner-space">
                                    <h2 className="neutral-bottom">Doctor Appointment Request Form
                                    </h2>
                                    <p className="statement">Fill the form below and we will get back soon to you for more updates and plan your appointment.
                                    </p>
                                </div>
                                <div className="registration-area__form">
                                    <form action="#" method="post" name="registration__form">
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Name </p>
                                                <div className="input-group-column">
                                                    <div className="input">
                                                        <input type="text" name="regi_f_name" id="regiFName" required />
                                                        <label for="regiFName">First Name</label>
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" name="regi_l_name" id="regiLName" required />
                                                        <label for="regiLName">Last Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Date of Birth</p>

                                                <div className="input-group-column">
                                                    <div className="input">
                                                        <select className="select-month" id="regiMonth">
                                                            <option label="" style={{ display: "none" }}></option>
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
                                                        <label for="regiMonth">Month</label>

                                                    </div>
                                                    <div className="input">
                                                        <select className="select-day" id="regiDay">
                                                            <option label="" style={{ display: "none" }}></option>
                                                            <option value="saturday">Saturday</option>
                                                            <option value="sunday">Sunday</option>
                                                            <option value="monday">Monday</option>
                                                            <option value="tuesday">Tuesday</option>
                                                            <option value="wednesday">Wednesday</option>
                                                            <option value="thursday">Thursday</option>
                                                            <option value="friday">Friday</option>
                                                        </select>
                                                        <label for="regiDay">Day</label>

                                                    </div>
                                                    <div className="input">
                                                        <select className="select-year" id="regiYear">
                                                            <option label="" selected style={{ display: "none" }}></option>
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
                                                        <label for="regiYear">Year</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <div className="input-group-column">
                                                    <div className="input">
                                                        <select className="select-gender" id="regiGender">
                                                            <option value="">
                                                                Please Select
                                                            </option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Not willing to Disclose">
                                                                Not willing to Disclose
                                                            </option>
                                                        </select>
                                                        <label for="regiDay">Gender</label>
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" name="regi_number" id="regiNumber" required />
                                                        <label for="regiNumber">Number</label>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner mb-0">
                                                <div className="input-group-column input-group-column--secondary">
                                                    <div className="input">
                                                        <input type="text" name="regi_address" id="regiAddress" required />
                                                        <label for="regiAddress">Street Address</label>
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" name="regi_city" id="regiCity" required />
                                                        <label for="regiCity">City</label>
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" name="regi_state" id="regiState" required />
                                                        <label for="regiState">State / Province</label>
                                                    </div>
                                                    <div className="input">
                                                        <select className="select-regi-country" id="regiCountry">
                                                            <option label="" selected style={{ display: "none" }}></option>
                                                            <option value="usa">United State</option>
                                                            <option value="japan">Japan</option>
                                                            <option value="brazil">Brazil</option>
                                                            <option value="australia">Australia</option>
                                                            <option value="canada">Canada</option>
                                                            <option value="china">China</option>
                                                        </select>
                                                        <label for="regiCountry">Country</label>

                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <div className="input-group-column">

                                                    <div className="input">
                                                        <input type="text" name="regi_number" id="regiNumber" required />
                                                        <label for="regiZip">Postal / Zip Code</label>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Email</p>
                                                <div className="input-group-column">

                                                    <div className="input">
                                                        <input type="text" name="regi_number" id="regiNumber" required />
                                                        <label for="regiZip">example@example.com</label>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Which department would you like to get an appointment from?
                                                </p>
                                                <div className="input-group-column">

                                                    <div className="input">
                                                        <input type="text" name="regi_number" id="regiNumber" required />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Which procedure do you want to make an appointment for?                                                </p>
                                                <div className="input-group-column">

                                                    <div className="input">
                                                        <select className="select-regi-country" id="regiCountry">
                                                            <option value="">Please Select</option>
                                                            <option value="Medical Examination">Medical Examination</option>
                                                            <option value="Doctor Check">Doctor Check</option>
                                                            <option value="Result Analysis">Result Analysis</option>
                                                            <option value="Check-up">Check-up</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="registration-area__form-single">
                                            <div className="registration-area__form-single__inner">
                                                <p className="secondary">Preferred Appointment Date
                                                </p>
                                                <div className="input-group-column">

                                                    <div className="input">
                                                        <input type="date" name="regi_date" id="regiDate" required />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input registration-input-button mb-0">
                                            <button type="submit" className="button button--effect">Submit
                                                <i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
            
      {/* <!-- ==== #Appointment section end ==== --> */}
      {/* <ToTop /> */}
      <Footer />
    </>
  );
}
