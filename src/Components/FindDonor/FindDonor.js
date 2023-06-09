import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import "./FindDonor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Pagination from "react-js-pagination";
// import ToTop from "../TopTop/ToTop";
import { useState } from "react";
import { useEffect } from "react";
import GeneralService from "../../services/general.service";
import { useFormik } from "formik";
import { donorSearch } from ".././../schema/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

export default function FindDonor() {

  const state = useSelector((state) => state.stateVals);
  const { id } = state;

  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [limit, setLimit] = useState("");

  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [group, setGroup] = useState([]);

  const [areaLoader, setAreaLoader] = useState(false);
  const [groupLoader, setGroupLoader] = useState(false);

  const contactDonor = (e) => {
    getDonorResult(e);
    // if (id !== null) {
    // } else {
    //   window.location.href = "/login";
    // }
  };

  // TODO
  const getDonorResult = async (id) => {
    try {
      const response = await GeneralService.getDonorById(id);
      const { data } = response;
      const { response: res } = data;
      // swal(
      //   `Name: ${res.full_name},
      //   Phone: ${res.phone},
      //   Group: ${res.blood_group},`
      // );
      swal({
        icon: 'success',
        title: 'Blood Details',
        text: `Name: ${res.full_name}
        Phone: ${res.phone}
         Group: ${res.blood_group}`,
      })
    } catch (err) {
      swal(`Error fetching information`);
    }
  };

  const getResultData = async (page, city, area, group) => {
    setLoading(true);

    try {
      const response = await GeneralService.listDonors(page, city, area, group);
      const { data } = response;
      const {
        response: res,
        records,
        total_pages,
        current_page,
        per_page,
      } = data;
      let resultData;
      resultData = res;
      setResultData(resultData);
      setCurrentPage(current_page);
      setTotalResults(records);
      setTotalPages(total_pages);
      setLimit(per_page);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResultData([]);
      setCurrentPage(1);
      setTotalResults(0);
      setTotalPages(0);
      setLimit(0);
    }
  };

  const searchData = async (values, action) => {
    console.log(values);
    getResultData(1, values.city, values.area, values.group);
  };

  const changePagination = (e) => {
    setCurrentPage(e);
    let pageNo = e;
    getResultData(pageNo);
  };

  const changeCity = (e) => {
    setArea([]);
    setGroup([]);

    const getArea = async () => {
      setAreaLoader(true);
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
      setAreaLoader(false);
    };

    if (e.target.value !== "") {
      getArea();
    }
  };

  const fetchGroup = (e) => {
    setGroup([]);

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
      setGroup([...results]);
      setGroupLoader(false);
    };

    if (e.target.value !== "") {
      getGroup();
    }
  };

  const getCity = async () => {
    setCity([]);
    const { data } = await GeneralService.listCities();
    const { response: res } = data;
    const results = [];
    res.map((value) => {
      results.push({
        key: value.name,
        value: value.name,
      });
    });
    setCity([{ key: "", value: "Select City" }, ...results]);
  };

  useEffect(() => {
    getCity();
    getResultData(1);
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,

      initialValues: {
        city: "",
        area: "",
        group: "",
      },
      validationSchema: donorSearch,
      onSubmit: (values, action) => {
        // action.resetForm();
        searchData(values, action);
      },
    });

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
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    id="donor_search"
                    className="panel-collapse collapse-donor in"
                    style={{ height: "auto" }}
                  >
                    <div className="panel-body">
                      <div className="col-md-4">
                        {/* <p className="donorLabel">City</p> */}
                        <div className="input">
                          {/* <select
                            className="select-donation-type"
                            name="city"
                            id="city"
                            value={values.city || ""}
                            onChange={(e) => {
                              changeCity(e);
                              handleChange(e);
                            }}
                          >
                            {city.map((res) => {
                              return (
                                <option key={res.key} value={res.value}>
                                  {res.value}
                                </option>
                              );
                            })}
                          </select> */}

                          <select
                            // className="selectpicker"
                            className="form-select" aria-label="Default select example"
                            name="city"
                            id="city"
                            value={values.city || ""}
                            onChange={(e) => {
                              changeCity(e);
                              handleChange(e);
                            }}
                          >
                            {city.map((res) => {
                              return (
                                <option key={res.key} value={res.value}>
                                  {res.value}
                                </option>
                              );
                            })}
                          </select>

                          {touched.city && errors.city && (
                            <div className="findError">{errors.city}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input">
                          <div className="select-leading">
                            {areaLoader ? (
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                            ) : null}
                            <select
                              className="form-select" aria-label="Default select example"
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
                              <div className="findError">{errors.area}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input">
                          <div className="select-leading">
                            {groupLoader ? (
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                            ) : null}
                            <select
                              className="form-select" aria-label="Default select example"
                              name="group"
                              id="group"
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
                              <div className="findError">{errors.group}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <button
                          type="submit"
                          className="button button--effect findDonor"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover responsive">
                  <thead>
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
                  </thead>
                  <tbody>
                    {resultData.length ? (
                      resultData.map((row) => (
                        <tr
                          key={row.id}
                          onClick={(e) => {
                            contactDonor(row.id);
                          }}
                        >
                          <td>
                            <div className="wordbreak">{`${row.first_name} ${row.last_name}`}</div>
                          </td>
                          <td>
                            <div className="wordbreak">{row.blood_group}</div>
                          </td>
                          <td>
                            <div className="wordbreak">
                              {row.city_name}, {row.address}
                            </div>
                          </td>
                          <td>
                            <Link
                              id={row.id}
                              to={void 0}
                              onClick={(e) => {
                                contactDonor(e.currentTarget.id);
                              }}
                            >
                              <FontAwesomeIcon icon={faMobileScreenButton} />
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No record found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {totalResults > limit && totalPages > 1 ? (
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={parseInt(limit)}
                  totalItemsCount={totalResults}
                  onChange={(e) => {
                    changePagination(e);
                  }}
                >
                  <Pagination.First />
                  <Pagination.Prev />

                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              ) : (
                ""
              )}
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
                          <a style={{ color: "black" }} href="/forgot-pass">
                            Forgot Password
                          </a>
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
