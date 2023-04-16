import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import "./FindDonor.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
// import ToTop from "../TopTop/ToTop";
import useImportScript from "../../utils/useImportScript";
import { useState } from "react";
import { useEffect } from "react";
import GeneralService from "../../services/general.service";

export default function FindDonor() {
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

  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [group, setGroup] = useState([]);

  const changeCity = (e) => {
    setArea([]);
    setGroup([]);

    const getArea = async () => {
      const { data } = await GeneralService.getAreaByCity(e.target.value);
      const { response: res } = data;
      const results = [];
      res.map((value) => {
        results.push({
          key: value.id,
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
          key: value.id,
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
    const getCity = async () => {
      setCity([]);
      const { data } = await GeneralService.listCities();
      const { response: res } = data;
      const results = [];
      res.map((value) => {
        results.push({
          key: value.id,
          value: value.name,
        });
      });
      setCity([{ key: "", value: "Select City" }, ...results]);
    };

    getCity();
  }, []);

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
                  <h2>Find Donor</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Find Donor
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

      {/* <!-- ==== Find Donor section start ==== --> */}
      <section className="find-donor section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading gray-background">
                  <h3 className="mt-2 mb-2">
                    <strong className="generic-white">Refine Search</strong>
                  </h3>
                </div>
                <div
                  id="donor_search"
                  className="panel-collapse collapse in"
                  style={{ height: "auto" }}
                >
                  <div className="panel-body">
                    <div className="col-md-4">
                      {/* <p className="donorLabel">City</p> */}
                      <div className="input">
                        <select
                          className="select-donation-type"
                          name="city"
                          onChange={(e) => changeCity(e)}
                        >
                          {city.map((res) => {
                            return (
                              <option key={res.key} value={res.value}>
                                {res.value}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* <p className="donorLabel">City Area</p> */}
                      <div className="input">
                        <select
                          className="select-donation-type"
                          name="area"
                          onChange={(e) => fetchGroup(e)}
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* <p className="donorLabel">Blood Group</p> */}
                      <div className="input">
                        <select className="select-donation-type">
                          <option value="">Select Blood Group</option>
                          {group.map((res) => {
                            return (
                              <option key={res.key} value={res.value}>
                                {res.value}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <button className="button button--effect">Search</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover responsive">
                  <tbody>
                    <tr>
                      <th>
                        <div className="wordbreak">Donor Name</div>
                      </th>
                      <th>
                        <div className="wordbreak">Blood Group</div>
                      </th>
                      <th>
                        <div className="wordbreak">Donor Address</div>
                      </th>
                      <th>
                        <div className="wordbreak">Contact Donor</div>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <div className="wordbreak">abcdef</div>
                      </td>
                      <td>
                        <div className="wordbreak">A-</div>
                      </td>
                      <td>
                        <div className="wordbreak">Karachi, Bahadurabad</div>
                      </td>
                      <td>
                        <a
                          href="#"
                          onclick="show_registration_dialog()"
                          data-toggle="modal"
                          data-target=".login-register-form"
                        >
                          <FontAwesomeIcon icon={faMobileScreenButton} />
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #Find Donor section end ==== --> */}
      {/* <ToTop /> */}

      <>
        {/* <!-- Login / Register Modal--> */}
        <div className="modal fade login-register-form" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove"></span>
                </button>
                <ul className="nav nav-tabs findDono">
                  <li className="active">
                    <a data-toggle="tab" href="#login-form">
                      {" "}
                      Login <span className="glyphicon glyphicon-user"></span>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#registration-form">
                      {" "}
                      Register{" "}
                      <span className="glyphicon glyphicon-pencil"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body">
                <div className="tab-content">
                  <div id="login-form" className="tab-pane fade in active">
                    <form action="/">
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                          placeholder="Enter password"
                          name="pwd"
                        />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="button button--effect popup"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                  <div id="registration-form" className="tab-pane fade">
                    <form action="/">
                      <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newemail">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="newemail"
                          placeholder="Enter new email"
                          name="newemail"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newpwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="newpwd"
                          placeholder="New password"
                          name="newpwd"
                        />
                      </div>
                      <button
                        type="submit"
                        className="button button--effect popup"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
