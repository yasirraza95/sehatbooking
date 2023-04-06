import React from "react";
import "./Header.css";
import ProfileIcon from '../Images/sehatbooking-logo-3.png'
export default function Header() {
  return (
    <>
      {/* <!-- ==== #header start ==== --> */}
      {/* <!-- ==== #header start ==== --> */}
      <header className="header">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <a className="navbar-brandd" href="/">
            <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679762718/Sehatbooking/sehatbooking-logolight_lktywq.png" alt="Logo" className="sehat-logo"/>
            </a>
            <div
              className="collapse navbar-collapse justify-content-center order-3 order-xl-2"
              id="primaryNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href=""
                  >
                    Home
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarHomeDropdown"
                  >
                    <li>
                      <a className="dropdown-item active" href="/">
                        Home One
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Home Two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Home Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarCampaignDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Campaign
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarCampaignDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="campaigns.html">
                        Campaigns
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="campaign-details.html">
                        Campaign Details
                      </a>
                    </li>
                  </ul>
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
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="services.html">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="service-details.html">
                        Service Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="team.html">
                        Team Members
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="donate-now.html">
                        Donate Now
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="gallery.html">
                        Photo Gallery
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/register">
                        Registration Now
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/faqs">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/privacy-policy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/terms-conditions">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="404.html">
                        Error
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarBlogDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarBlogDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-two.html">
                        Blog Two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-three.html">
                        Blog Three
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-details.html">
                        Blog Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-details-two.html">
                        Blog Details Two
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="blog-details-three.html"
                      >
                        Blog Details Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-out order-2 order-xl-3">
              <div className="navbar-out__group">
                <a href="" className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <select className="select-language" style={{display: "none"}}>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="china">China</option>
                                <option value="germany">Germany</option>
                            </select>
                <a
                  href=""
                  className="d-none d-xl-block open-sidenav"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </a>

                {/* <div>
            <img src={ProfileIcon} alt="Avatar" class="avatar"/>
            </div> */}
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
            <a href="" className="close-sidebar">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
          <div className="intro">
            <a href="/">
              <img src="assets/images/logo.png" alt="Logo" className="logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/">
                <i className="fa-solid fa-angle-right"></i> Home
              </a>
            </li>
            <li>
              <a href="/about-us">
                <i className="fa-solid fa-angle-right"></i> About Us
              </a>
            </li>
            <li>
              <a href="campaign.html">
                <i className="fa-solid fa-angle-right"></i> Campaign
              </a>
            </li>
            <li>
              <a href="blog.html">
                <i className="fa-solid fa-angle-right"></i> Blog
              </a>
            </li>
            <li>
              <a href="blog-details.html">
                <i className="fa-solid fa-angle-right"></i> Blog Details
              </a>
            </li>
            <li>
              <a href="contact-us.html">
                <i className="fa-solid fa-angle-right"></i> Contact Us
              </a>
            </li>
          
          </ul>
          <form action="#" method="post">
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
          </form>
        </div>
      </div>
      {/* <!-- ==== sidenav end ==== --> */}
    </>
  );
}
