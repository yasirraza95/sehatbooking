import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
// import ToTop from "../TopTop/ToTop";
import "./Register.css";
import VisibleFields from "../VisibleFields/VisibleFields";
import useImportScript from "../../utils/useImportScript";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { registerValidation } from "../../schema";
import { useEffect } from "react";

export default function Register() {
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
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [group, setGroup] = useState([]);

  const [visible, setVisible] = useState(false);
  const [notified, setNotified] = useState(false);

  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const changeState = (e) => {
    const getCity = async () => {
      setCity([]);
      const { data } = await GeneralService.getCityByState(e.target.value);
      const { response: res } = data;
      const results = [];
      res.map((value) => {
        results.push({
          key: value.name,
          value: value.name,
        });
      });
      setCity([...results]);
    };

    if (e.target.value !== "") {
      getCity();
    }
  };

  const getState = async () => {
    setState([]);
    const { data } = await GeneralService.listStates();
    const { response: res } = data;
    const results = [];
    res.map((value) => {
      results.push({
        key: value.name,
        value: value.name,
      });
    });
    setState([{ key: "", value: "Select State" }, ...results]);
  };

  const getGroup = async () => {
    const { data } = await GeneralService.listGroups();
    const { response: res } = data;
    const results = [];
    res.map((value) => {
      results.push({
        key: value.name,
        value: value.name,
      });
    });
    setGroup([{ key: "", value: "Select Group" }, ...results]);
  };

  useEffect(() => {
    getState();
    // getCity();
    getGroup();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        group: "",
        mobile: "",
        address: "",
        state: "",
        city: "",
        consent: "",
        notification: "",
        dob: "",
        last_bleed: "",
      },
      validationSchema: registerValidation,
      onSubmit: (values, action) => {
        console.log(values);
        // formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.register(values);
      const { data } = response;
      const { response: message } = data;
      // console.log(message);
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
      // setLoading(false);
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        setSubmitMessage("Username or Password is invalid");
        setSubmit("danger");
        // setLoading(false);
      } else {
        setSubmitMessage("Something went wrong, try again");
        setSubmit("danger");
        // setLoading(false);
      }
    }
  };

  return (
    <>
      <TopBar />
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
                  <h2 className="neutral-bottom">Sehat Booking</h2>
                </div>
                <div className="registration-area__form">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="registration-area__form-single">
                      <p className="secondary">Full Name *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiFName">First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              id="regiFName"
                              required
                              value={values.first_name || ""}
                              onChange={handleChange}
                            />
                            {touched.first_name && errors.first_name && (
                              <div className="error">{errors.first_name}</div>
                            )}
                          </div>
                          <div className="input">
                            <label for="regiLName">Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              id="regiLName"
                              required
                              value={values.last_name || ""}
                              onChange={handleChange}
                            />
                            {touched.last_name && errors.last_name && (
                              <div className="error">{errors.last_name}</div>
                            )}
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
                              className="selectpicker"
                              id="regiGroup"
                              name="group"
                              onChange={handleChange}
                              value={values.group || ""}
                            >
                              <option value="">Select Blood Group</option>
                              {group.map((res) => {
                                return (
                                  <option key={res.key} value={res.value}>
                                    {res.value}
                                  </option>
                                );
                              })}
                            </select>
                            {touched.group && errors.group && (
                              <div className="error">{errors.group}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="registration-area__form-single">
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
                    </div> */}
                    <div className="registration-area__form-single">
                      <p className="secondary">Phone Number *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Number</label>
                            <input
                              type="text"
                              name="mobile"
                              id="regiNumber"
                              required
                              value={values.mobile || ""}
                              onChange={handleChange}
                            />
                            {touched.mobile && errors.mobile && (
                              <div className="error">{errors.mobile}</div>
                            )}
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
                              name="address"
                              id="regiAddress"
                              required
                              value={values.address || ""}
                              onChange={handleChange}
                            />
                            {touched.address && errors.address && (
                              <div className="error">{errors.address}</div>
                            )}
                          </div>
                          <div className="input">
                            <label for="regiState">State</label>
                            <select
                              className="selectpicker"
                              name="state"
                              id="state"
                              value={values.state || ""}
                              onChange={(e) => {
                                changeState(e);
                                handleChange(e);
                              }}
                            >
                              <option value="">Select State</option>
                              {state.map((res) => {
                                return (
                                  <option key={res.key} value={res.value}>
                                    {res.value}
                                  </option>
                                );
                              })}
                            </select>
                            {touched.state && errors.state && (
                              <div className="error">{errors.state}</div>
                            )}
                          </div>
                          <div className="input">
                            <label for="regiCity">City</label>
                            <select
                              className="selectpicker"
                              name="city"
                              id="city"
                              value={values.city || ""}
                              onChange={(e) => {
                                // changeCity(e);
                                handleChange(e);
                              }}
                            >
                              <option value="">Select City</option>
                              {city.map((res) => {
                                return (
                                  <option key={res.key} value={res.value}>
                                    {res.value}
                                  </option>
                                );
                              })}
                            </select>
                            {touched.city && errors.city && (
                              <div className="errorCity">{errors.city}</div>
                            )}
                          <div>
                            {/* <VisibleFields /> */}
                            <div>
                              <li style={{ listStyle: "none" }}>
                                {/* <button
                                  className="BTN"
                                  onClick={() => setVisible(!visible)}
                                >
                                  {visible ? "Hide" : "Show"}
                                </button> */}
                                <input
                                  type="checkbox"
                                  name="consent"
                                  onClick={() => setVisible(!visible)}
                                  value={values.consent || ""}
                                  onChange={handleChange}
                                />
                                List me in blood donaion bank
                              </li>
                              {visible && (
                                <div>
                                  <div className="input">
                                    <label for="notification">
                                      Want to get notifications ?
                                    </label>
                                    <input
                                      type="checkbox"
                                      name="notification"
                                      id="notification"
                                      onClick={() => setNotified(!notified)}
                                      value={values.notification || ""}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="input">
                                    <label for="regiState">Date Of Birth</label>
                                    <input
                                      type="date"
                                      name="dob"
                                      id="regiState"
                                      required
                                      value={values.dob || ""}
                                      onChange={handleChange}
                                    />
                                    {touched.dob && errors.dob && (
                                      <div className="error">{errors.dob}</div>
                                    )}
                                  </div>

                                  <div className="input">
                                    <label for="regiState">
                                      Last Bleed Date
                                    </label>
                                    <input
                                      type="date"
                                      name="last_bleed"
                                      id="regiState"
                                      required
                                    />
                                    {touched.last_bleed &&
                                      errors.last_bleed && (
                                        <div className="error">
                                          {errors.last_bleed}
                                        </div>
                                      )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
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
