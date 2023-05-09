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
import swal from "sweetalert";

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

  const [notified, setNotified] = useState(false);

  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
        email: "",
        phone: "",
        password: "",
        address: "",
        state: "",
        city: "",
        city_area: "",
        zip: "",
        notification: "",
        dob: "",
        last_bleed: "",
      },
      validationSchema: registerValidation,
      onSubmit: (values, action) => {
        // console.log(values);
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.register(values);
      const { data } = response;
      const { response: message } = data;
      // console.log(message);
      // setSubmitMessage(message);
      // setSubmit("success");
      swal(message);
      action.resetForm();
      // setLoading(false);
    } catch (err) {
      // console.log(err);
      if (err?.response?.status === 422) {
        const propertyNames = Object.keys(err.response.data);

        if (propertyNames.includes("email")) {
          setEmailError(err.response.data?.email[0]);
        }

        if (propertyNames.includes("phone")) {
          setPhoneError(err.response.data?.phone[0]);
        }
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
                  {submit && (
                    <div className={`alert alert-${submit}`} role="alert">
                      {submitMessage}
                    </div>
                  )}
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
                      <p className="secondary">Phone Number *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Number</label>
                            <input
                              type="text"
                              name="phone"
                              id="regiNumber"
                              required
                              value={values.phone || ""}
                              onChange={handleChange}
                            />
                            {touched.phone && errors.phone && (
                              <div className="error">{errors.phone}</div>
                            )}
                            {phoneError && (
                              <div className="error">{phoneError}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Email Address *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="regemail"
                              required
                              value={values.email || ""}
                              onChange={handleChange}
                            />
                            {touched.email && errors.email && (
                              <div className="error">{errors.email}</div>
                            )}
                            {emailError && (
                              <div className="error">{emailError}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Password *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="password">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              required
                              value={values.password || ""}
                              onChange={handleChange}
                            />
                            {touched.password && errors.password && (
                              <div className="error">{errors.password}</div>
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
                              id="regstate"
                              value={values.state || ""}
                              onChange={(e) => {
                                changeState(e);
                                handleChange(e);
                              }}
                            >
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
                              id="cityReg"
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
                          </div>
                          <div className="input">
                            <label for="regicityArea">City Area</label>
                            <input
                              type="text"
                              name="city_area"
                              id="regicityArea"
                              required
                              value={values.city_area || ""}
                              onChange={handleChange}
                            />
                            {touched.city_area && errors.city_area && (
                              <div className="errorArea">
                                {errors.city_area}
                              </div>
                            )}
                          </div>

                          <div className="input">
                            <div>
                              <ul>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="notification"
                                      id="notification"
                                      onClick={() => setNotified(!notified)}
                                      value={values.notification || ""}
                                      onChange={handleChange}
                                    />
                                    <span className="text">
                                      {" "}
                                      Want to get notifications ?
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <div className="input">
                                <label for="regiCountry">Blood Group</label>
                                <select
                                  className="selectpicker"
                                  id="regiCountry"
                                  name="group"
                                  onChange={handleChange}
                                  value={values.group || ""}
                                >
                                  <option>Blood Group</option>
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
                                <label for="regiState">Last Bleed Date</label>
                                <input
                                  type="date"
                                  name="last_bleed"
                                  id="regiState"
                                  required
                                  value={values.last_bleed || ""}
                                  onChange={handleChange}
                                />
                                {touched.last_bleed && errors.last_bleed && (
                                  <div className="error">
                                    {errors.last_bleed}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="input registration-input-button mb-0">
                            <button
                              type="submit"
                              className="button button--effect register"
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
