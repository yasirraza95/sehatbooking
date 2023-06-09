import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./Register.css";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { registerValidation } from "../../schema";
import { useEffect } from "react";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [group, setGroup] = useState([]);

  const [cityLoader, setCityLoader] = useState(false);
  const [areaLoader, setAreaLoader] = useState(false);
  const [groupLoader, setGroupLoader] = useState(false);

  const [notified, setNotified] = useState(false);

  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isEnable, setIsEnable] = useState(true);

  const fetchAreas = (e) => {
    let newValue = e.target.value;
    const getCityArea = async () => {
      setArea([]);
      const { data } = await GeneralService.getCityArea(selectedCity, newValue);
      const { response: res } = data;
      const results = [];
      res.map((value) => {
        results.push({
          key: value.name,
          value: value.name,
        });
      });
      setArea([...results]);
    };

    if (newValue !== "") {
      getCityArea();
    }
  };

  const changeCity = (e) => {
    setSelectedCity(e);
    setIsEnable(false);
  };

  const changeState = (e) => {
    const getCity = async () => {
      setCityLoader(true);
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
      setCityLoader(false);
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
    setGroupLoader(true);
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
    setGroupLoader(false);

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
        // captcha: "",
      },
      validationSchema: registerValidation,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    try {
      const response = await GeneralService.register(values);
      const { data } = response;
      const { response: message } = data;
      swal(message);
      action.resetForm();
    } catch (err) {
      if (err?.response?.status === 422) {
        const propertyNames = Object.keys(err.response.data);

        if (propertyNames.includes("email")) {
          setEmailError(err.response.data?.email[0]);
        }

        if (propertyNames.includes("phone")) {
          setPhoneError(err.response.data?.phone[0]);
        }
      } else {
        setSubmitMessage("Something went wrong, try again");
        setSubmit("danger");
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
                    <div className="input-group-column">
                      <div className="input">
                        <label for="regiNumber">Phone No.</label>
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
                    </div>
                    <div className="input-group-column">
                      <div className="input">
                        <label for="regiState">State</label>
                        <select
                          // className="selectpicker"
                          className="form-select"
                          aria-label="Default select example"
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
                        <div className="select-leading">
                          {cityLoader ? (
                            <span
                              className="spinner-border spinner-border-sm register"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : null}
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="city"
                            id="cityReg"
                            value={values.city || ""}
                            onChange={(e) => {
                              changeCity(e.target.value);
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
                      </div>
                    </div>
                    <div className="input-group-column">
                      <div className="input">
                        <label for="city_area">City Area</label>
                        <input
                          type="text"
                          list="city_area"
                          name="city_area"
                          id="city_area"
                          required
                          value={values.city_area || ""}
                          onChange={(e) => {
                            fetchAreas(e);
                            handleChange(e);
                          }}
                          disabled={isEnable}
                        />
                        <datalist
                          id="city_area"
                        >
                          {area.map((res) => {
                            return (
                              <option key={res.value} value={res.value}>
                                {res.value}
                              </option>
                            );
                          })}
                        </datalist>
                        {touched.city_area && errors.city_area && (
                          <div className="errorArea">{errors.city_area}</div>
                        )}
                      </div>

                      <div className="input">
                        <label for="regiCountry">Blood Group</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="regiCountry"
                          name="group"
                          onChange={handleChange}
                          value={values.group || ""}
                        >
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

                    <div className="input-group-column">
                      <div className="input">
                        <label for="regiState">Date Of Birth</label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
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
                          id="last_bleed"
                          required
                          value={values.last_bleed || ""}
                          onChange={handleChange}
                        />
                        {touched.last_bleed && errors.last_bleed && (
                          <div className="error">{errors.last_bleed}</div>
                        )}
                      </div>
                    </div>
                    {/* <div className="input">

                    <ReCAPTCHA
                      sitekey="6LfBVvslAAAAAN4DZ4XzpmN_72xgJoHCHO1FBhtM"
                      onChange={onChange}
                    />
                         <div className="error">
                            {errors.captcha}
                          </div>
                    </div> */}
                    <div className="col-md-12 text-center">
                      <div className="input registration-input-button mb-0">
                        <button
                          type="submit"
                          className="button button--effect registerBtn"
                        >
                          Submit
                          <i className="bi bi-arrow-right"></i>
                        </button>
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