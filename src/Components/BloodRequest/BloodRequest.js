import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import GeneralService from "../../services/general.service";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./BloodRequest.css";
import { bloodRequest } from ".././../schema/index";

export default function BloodRequest() {
  // useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
  // useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
  //   useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
  // useImportScript(
  //     "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"
  // );
  // useImportScript("/assets/vendor/slick/js/slick.js");
  // useImportScript("/assets/vendor/odometer/js/odometer.min.js");
  // useImportScript("/assets/vendor/viewport-js/viewport.jquery.js");
  // useImportScript("/assets/vendor/owl-carousel/js/owl.carousel.min.js");
  // useImportScript("/assets/vendor/wow/wow.min.js");
  // useImportScript("/assets/js/plugin.js");
  // useImportScript("/assets/js/main.js");

  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [group, setGroup] = useState([]);

  const getStates = async () => {
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

  const changeState = (e) => {
    setCity([]);
    setArea([]);
    setGroup([]);

    const getCity = async () => {
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

  const changeCity = (e) => {
    setArea([]);
    setGroup([]);

    const getArea = async () => {
      const { data } = await GeneralService.getAreaByCity(e.target.value);
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

    if (e.target.value !== "") {
      getArea();
    }
  };

  const fetchGroup = (e) => {
    setGroup([]);

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
      setGroup([...results]);
    };

    if (e.target.value !== "") {
      getGroup();
    }
  };

  useEffect(() => {
    getStates();
    // getResultData(1);
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,

      initialValues: {
        state: "",
        city: "",
        area: "",
        group: "",
        emergency: "",
      },
      validationSchema: bloodRequest,
      onSubmit: (values, action) => {
        formSubmit(values, action);
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      values.emergency = checkedValue(values.emergency);
      // console.log(values);
      // values.user = "1"; //FIXME
      const response = await GeneralService.bloodRequest(values);
      const { data } = response;
      const { response: message } = data;
      //   console.log(message);
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
      // setLoading(false);
    } catch (err) {
      setSubmitMessage("Something went wrong, try again");
      setSubmit("danger");
      // setLoading(false);
    }
  };

  const checkedValue = (e) => {
    let value = "emergency";
    if (e === false || e === "") {
      value = "normal";
    }
    return value;
  };

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
                  <h2>Blood Request</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Blood Request
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

      {/* <!-- ==== contact form section start ==== --> */}
      <section className="contact section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-area">
                <div className="contact-area__content">
                  <div className="row neutral-row">
                    <div className="col-lg-12 row-item">
                      <div className="contact-area-single contact-area__content-form">
                        <h4 className="descender">Blood Request</h4>
                        <p>
                          Fill this form to generate a blood request in Sehat
                          Booking
                        </p>
                        {submit && (
                          <div className={`alert alert-${submit}`} role="alert">
                            {submitMessage}
                          </div>
                        )}
                        <form
                          onSubmit={handleSubmit}
                          noValidate
                          name="contact__Form"
                        >
                          <div className="input-group-column">
                            <div className="input">
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
                              <select
                                className="selectpicker"
                                name="city"
                                id="city"
                                value={values.city || ""}
                                onChange={(e) => {
                                  changeCity(e);
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
                                <div className="error">{errors.city}</div>
                              )}
                            </div>
                          </div>
                          <div className="input-group-column">
                            <div className="input">
                              <select
                                className="selectpicker"
                                name="area"
                                id="area"
                                value={values.area || ""}
                                onChange={(e) => {
                                  fetchGroup(e);
                                  handleChange(e);
                                }}
                              >
                                <option value="">Select City Area</option>
                                {area.map((res) => {
                                  return (
                                    <option key={res.key} value={res.value}>
                                      {res.value}
                                    </option>
                                  );
                                })}
                              </select>
                              {touched.area && errors.area && (
                                <div className="error">{errors.area}</div>
                              )}
                            </div>
                            <div className="input">
                              <select
                                className="selectpicker"
                                name="group"
                                id="blodGroup"
                                value={values.group || ""}
                                onChange={handleChange}
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
                          <div className="input">
                            <div className="form-checkk">
                              <input
                                type="checkbox"
                                onChange={handleChange}
                                name="emergency"
                                id="emergency"
                                value={values.emergency || ""}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Emergency Request ?
                              </label>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="button button--effect contact"
                          >
                            Submit Request<i className="bi bi-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #contact form section end ==== --> */}
      <Footer />
    </>
  );
}
