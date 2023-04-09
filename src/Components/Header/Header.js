import React from "react";
import "./Header.css";
import ProfileIcon from "../Images/sehatbooking-logo-3.png";
import MenuLogo from "../Images/sehatbooking-logo.png";
import { Link } from "react-router-dom";
export default function Header() {
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
                  {/* <Link to="/" className="nav-link active">
                    Home
                  </Link> */}
                  <a href="/" className="nav-link active">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/blood-tips" className="nav-link">
                    Donation Tips
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/find-donor" className="nav-link">
                    Find Donor
                  </a>
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
                      <a href="/about-us" className="dropdown-item">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/how-to" className="dropdown-item">
                        How To
                      </a>
                    </li>
                    <li>
                      <a href="/faqs" className="dropdown-item">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy" className="dropdown-item">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-conditions" className="dropdown-item">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item appointment">
                  <Link to="/appointment" className="nav-link" id="app-item">
                    Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <div className="circle">
                      <span className="circle-inner" data-hover="Profile">
                        SB
                      </span>
                    </div>
                  </Link>
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
                <a
                  href="javascript:void(0)"
                  className="d-none d-xl-block open-sidenav"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </a>
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
            <a href="javascript:void(0)" className="close-sidebar">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
          <div className="intro">
            <a href="/">
              <img src={MenuLogo} alt="Logo" className="logo" />
            </a>
          </div>
          <ul className="sideMenu">
            <li>
              <a href="/">
                <i className="fa-solid fa-angle-right"></i> Home
              </a>
            </li>

            <li>
              <a href="/blood-tips">
                <i className="fa-solid fa-angle-right"></i> Donation Tips
              </a>
            </li>
            <li>
              <a href="/find-donor">
                <i className="fa-solid fa-angle-right"></i> Find Donor
              </a>
            </li>
            <li>
              <a href="/about-us">
                <i className="fa-solid fa-angle-right"></i> About Us
              </a>
            </li>
            <li>
              <a href="/how-to">
                <i className="fa-solid fa-angle-right"></i> How To
              </a>
            </li>
            <li>
              <a href="/faqs">
                <i className="fa-solid fa-angle-right"></i> FAQs
              </a>
            </li>
            <li>
              <a href="/privacy-policy">
                <i className="fa-solid fa-angle-right"></i> Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-conditions">
                <i className="fa-solid fa-angle-right"></i> Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/contact-us">
                <i className="fa-solid fa-angle-right"></i> Contact Us
              </a>
            </li>
            <li>
              <a href="/appointment">
                <i className="fa-solid fa-angle-right"></i> Appointment
              </a>
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
