import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import GeneralService from "../../services/general.service";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./BloodRequest.css";
import "../Includes/general.css";
import { bloodRequest } from ".././../schema/index";
import { Pagination, Row } from "react-bootstrap";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export default function BloodRequest() {
  const [submit, setSubmit] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [area, setArea] = useState([]);
  const [group, setGroup] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  const [cityLoader, setCityLoader] = useState(false);
  const [areaLoader, setAreaLoader] = useState(false);
  const [groupLoader, setGroupLoader] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [limit, setLimit] = useState("");

  const contactDonor = (e) => {
    getDonorResult(e);
    // if (id !== null) {
    // } else {
    //   window.location.href = "/login";
    // }
  };
  const changePagination = (e) => {
    setCurrentPage(e);
    let pageNo = e;
    getResultData(pageNo, selectedCity, selectedArea, selectedGroup);
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
  const getDonorResult = async (id) => {
    try {
      const response = await GeneralService.getDonorById(1);
      const { data } = response;
      const { response: res } = data;
      // swal(
      //   `Name: ${res.full_name},
      //   Phone: ${res.phone},
      //   Group: ${res.blood_group},`
      // );
      swal({
        icon: "success",
        title: "Blood Details",
        text: `Name: Test Data
        Phone: 0934383923
         Group: A+`,
      });
    } catch (err) {
      swal(`Error fetching information`);
    }
  };

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
      setCityLoader(true);
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

  useEffect(() => {
    getStates();
    // getResultData(1);
    // getResultData(1, selectedCity, selectedArea, selectedGroup);
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
        phone: "",
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
      console.log(values);
      setSelectedCity(values.city);
      setSelectedArea(values.area);
      setSelectedGroup(values.group);
      // values.user = "1"; //FIXME
      const response = await GeneralService.bloodRequest(values);
      const { data } = response;
      const { response: message } = data;
      setSubmitMessage(message);
      setSubmit("success");
      action.resetForm();
      getResultData(1, values.city, values.area, values.group);
    } catch (err) {
      setSubmitMessage("Something went wrong, try again");
      setSubmit("danger");
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
                                className="form-select"
                                aria-label="Default select example"
                                name="state"
                                id="state"
                                value={values.state || ""}
                                onChange={(e) => {
                                  changeState(e);
                                  handleChange(e);
                                }}
                              >
                                {/* <option value="">Select State</option> */}
                                {state.map((res) => {
                                  return (
                                    <option key={res.key} value={res.value}>
                                      {res.value}
                                    </option>
                                  );
                                })}
                              </select>
                              {touched.state && errors.state && (
                                <div className="error bloodrequest">
                                  {errors.state}
                                </div>
                              )}
                            </div>

                            <div className="input mt-2">
                              <div className="select-leading">
                                {cityLoader ? (
                                  <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : null}
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
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
                                  <div className="error bloodrequest">
                                    {errors.city}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="input-group-column">
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
                                  className="form-select"
                                  aria-label="Default select example"
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
                                  <div className="error bloodrequest">
                                    {errors.area}
                                  </div>
                                )}
                              </div>
                            </div>
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
                                  className="form-select"
                                  aria-label="Default select example"
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
                                  <div className="error bloodrequest">
                                    {errors.group}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div
                              className="input"
                              style={{ marginTop: "-20px" }}
                            >
                              <input
                                type="text"
                                name="phone"
                                id="phoneNo"
                                placeholder="Phone No"
                                value={values.phone || ""}
                                onChange={handleChange}
                              />
                              {touched.phone && errors.phone && (
                                <div className="error bloodrequestNo">
                                  {errors.phone}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="input alignment">
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
                            className="button button--effect contact mt-2"
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

        {resultData.length ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
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
                      {resultData.map((row) => (
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
                              id={Row.id}
                              to={void 0}
                              onClick={(e) => {
                                contactDonor(e.currentTarget.id);
                              }}
                            >
                              <FontAwesomeIcon icon={faMobileScreenButton} />
                            </Link>
                          </td>
                        </tr>
                      ))}
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
        ) : (
          ""
        )}
      </section>

      {/* <!-- ==== #contact form section end ==== --> */}
      <Footer />
    </>
  );
}
