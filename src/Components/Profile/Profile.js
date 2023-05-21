import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.css";
import { useEffect } from "react";
import GeneralService from "../../services/general.service";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../../Redux";
import { useState } from "react";
import swal from "sweetalert";
import { useFormik } from "formik";
export default function Profile() {

  const dispatch = useDispatch();
  const userActions = bindActionCreators(actionCreaters, dispatch);
  const state = useSelector((state) => state.stateVals);
  const { id, accessToken } = state;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [consent, setConsent] = useState("");
  const [notification, setNotification] = useState("");
  const [dob, setDob] = useState("");
  const [bleed, setBleed] = useState("");
  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // FIXME
  const getProfile = async () => {
    try {
      const response = await GeneralService.showProfile(accessToken);
      setFname(response.data.first_name);
      setLname(response.data.last_name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setAddress(response.data.address);
      setStates(response.data.state);
      setCity(response.data.city);
      setConsent(response.data.consent);
      setNotification(response.data.notification);
      setDob(response.data.dob);
      setBleed(response.data.last_bleed);

      // }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const { values, errors, touched, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,

      initialValues: {
        first_name: fname,
        last_name: lname,
        email: email,
        phone: phone,
        address: address,
      },
      onSubmit: (values, action) => {
        swal("Waiting for update");
      },
    });

  const formSubmit = async (values, action) => {
    // setLoading(true);
    try {
      const response = await GeneralService.contactUs(values);
      const { data } = response;
      const { response: message } = data;
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        setSubmitMessage("Username or Password is invalid");
        setSubmit("danger");
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
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="registration-area__form-single">
                      <p className="secondary">Full Name *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label htmlFor="regiFName">First Name</label>
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
                            <label htmlFor="regiLName">Last Name</label>
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
                            <label htmlFor="regiNumber">Number</label>
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
                          <div className="input registration-input-button mb-0">
                            <button
                              type="submit"
                              className="button button--effect profile"
                            >
                              Update Profile
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
