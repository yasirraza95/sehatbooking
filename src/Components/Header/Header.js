import React from "react";
import "./Header.css";
import ProfileIcon from "../Images/sehatbooking-logo-3.png";
import MenuLogo from "../Images/sehatbooking-logo.png";
import { Link, NavLink } from "react-router-dom";
// import $ from "jquery";

export default function Header() {
  // const sideBarClick = (e) => {
  //   let currentClass = e.target.className;
  //   console.log(e.target.className);
  //   // open sidenav
  //   $(".open-sidenav").on("click", function () {
  //     $(this).toggleClass("toggle-active");
  //     $(".sidenav").addClass("sidenav-active");
  //   });

  //   // close sidenav
  //   $(".close-sidebar").on("click", function () {
  //     $(".sidenav").removeClass("sidenav-active");
  //     $(".open-sidenav").toggleClass("toggle-active");
  //   });
  // };

  return (
    <>
      {/* <!-- ==== #header start ==== --> */}
      {/* <!-- ==== #header start ==== --> */}
      <header className="header">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <a className="navbar-brandd" href="/">
              <img
                src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679762718/Sehatbooking/sehatbooking-logolight_lktywq.png"
                alt="Logo"
                className="sehat-logo"
              />
            </a>
            <div
              className="collapse navbar-collapse justify-content-center order-3 order-xl-2"
              id="primaryNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    activeclassname="nav-link active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/blood-tips"
                    activeclassname="nav-link active"
                    className="nav-link"
                  >
                    Donation Tips
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/find-donor" className="nav-link">
                    Find Donor
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Miscs.
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/about-us" className="dropdown-item">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/how-to" className="dropdown-item">
                        How To
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/faqs" className="dropdown-item">
                        FAQs
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/privacy-policy" className="dropdown-item">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/terms-conditions" className="dropdown-item">
                        Terms & Conditions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blood-request" className="dropdown-item">
                        Blood Request
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink to="/contact-us" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item appointment">
                  <NavLink to="/appointment" className="nav-link" id="app-item">
                    Appointment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">
                    <div className="circle">
                      <span className="circle-inner" data-hover="Profile">
                        SB
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-out order-2 order-xl-3">
              <div className="navbar-out__group">
                {/* <a href="" className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a> */}
                {/* <select className="select-language" style={{display: "none"}}>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="china">China</option>
                                <option value="germany">Germany</option>
                            </select> */}
                <Link
                  to={void 0}
                  className="d-none d-xl-block open-sidenav"
                  // onClick={(e) => sideBarClick(e)}
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#primaryNav"
                aria-controls="primaryNav"
                aria-expanded="false"
                aria-label="Toggle Primary Nav"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ==== #header end ==== --> */}

      {/* <!-- ==== full screen search start ==== --> */}
      <div className="search">
        <a href="" className="close">
          <i className="fa-solid fa-xmark"></i>
        </a>
        <form action="#" method="post">
          <input
            type="search"
            name="search__box"
            id="searchBox"
            placeholder="Search Now"
            required
          />
          <button type="submit" className="button button--effect">
            Search Now
          </button>
        </form>
      </div>
      {/* <!-- ==== #full screen search end ==== --> */}

      {/* <!-- ==== sidenav start ==== --> */}
      <div className="sidenav d-none d-xl-block">
        <div className="navbar-inner">
          <div className="close-sidebar-wrapper">
            {/* <a href="javascript:void(0)" className="close-sidebar">
              <i className="fa-solid fa-xmark"></i>
            </a> */}
            <Link to={void 0} className="close-sidebar">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </div>
          <div className="intro">
            <a href="/">
              <img src={MenuLogo} alt="Logo" className="logo" />
            </a>
          </div>
          <ul className="sideMenu">
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-angle-right"></i> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/blood-tips">
                <i className="fa-solid fa-angle-right"></i> Donation Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-donor">
                <i className="fa-solid fa-angle-right"></i> Find Donor
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <i className="fa-solid fa-angle-right"></i> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-to">
                <i className="fa-solid fa-angle-right"></i> How To
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs">
                <i className="fa-solid fa-angle-right"></i> FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">
                <i className="fa-solid fa-angle-right"></i> Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-conditions">
                <i className="fa-solid fa-angle-right"></i> Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">
                <i className="fa-solid fa-angle-right"></i> Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointment">
                <i className="fa-solid fa-angle-right"></i> Appointment
              </NavLink>
            </li>
          </ul>
          {/* <form action="#" method="post">
            <div className="input-group-btn input-group-btn--secondary">
              <input
                type="email"
                name="sidenav__newsletter__email"
                id="sidenavNewsletterEmail"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit" className="button button--effect">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form> */}
        </div>
      </div>
      {/* <!-- ==== sidenav end ==== --> */}
    </>
  );
}
