import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area section-space-top">
              <div className="row alt-row">
                <div className="col-md-6 col-lg-4 col-sm-6">
                  <div className="footer-area__single">
                    <h5>About Us</h5>
                    <p className="address">Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>

                    <div className="address">
                      <p><strong>Phone :</strong> +1(456)657-887, 999</p>
                      <p><strong>Email :</strong>  contactblood@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2 col-sm-6">
                  <div className="footer-area__single">
                    <h5>Quick Links</h5>
                    <ul>
                      <li>
                        <a href="services.html">
                          <i className="bi bi-chevron-double-right"></i>Service
                        </a>
                      </li>
                      <li>
                        <a href="/about-us">
                          <i className="bi bi-chevron-double-right"></i>About Us
                        </a>
                      </li>
                      <li>
                        <a href="/campaigns">
                          <i className="bi bi-chevron-double-right"></i>New Campaign
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <i className="bi bi-chevron-double-right"></i>Latest News
                        </a>
                      </li>
                      <li>
                        <a href="/contact-us">
                          <i className="bi bi-chevron-double-right"></i>Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2 col-sm-6">
                  <div className="footer-area__single">
                    <h5>Services</h5>
                    <ul>
                      <li>
                        <a href="donate-now.html">
                          <i className="bi bi-chevron-double-right"></i>Blood Donation
                        </a>
                      </li>
                      <li>
                        <a href="services.html">
                          <i className="bi bi-chevron-double-right"></i>Health Check
                        </a>
                      </li>
                      <li>
                        <a href="campaigns.html">
                          <i className="bi bi-chevron-double-right"></i> Blood Bank
                        </a>
                      </li>
                      <li>
                        <a href="donate-now.html">
                          <i className="bi bi-chevron-double-right"></i>Donate Process
                        </a>
                      </li>
                      <li>
                        <a href="donate-now.html">
                          <i className="bi bi-chevron-double-right"></i>Blood Info
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                  <div className="footer-area__single">
                    <h5>Latest News</h5>
                    <div className="latest-news__single">
                      <a href="blog-details.html">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679078708/Sehatbooking/lastest-1_jktmh5.png" alt="Latest News" />
                      </a>
                      <div className="latest-news__single-content">
                        <p className="mt-0">
                          <a href="blog-details.html">A Formula For Help And Happiness</a>
                        </p>
                        <p className="post-date">18 February, 2022</p>
                      </div>
                    </div>
                    <div className="latest-news__single">
                      <a href="blog-details.html">
                        <img src="https://res.cloudinary.com/dll4d2yu7/image/upload/v1679078708/Sehatbooking/latest-2_nxpig5.png" alt="Latest News" />
                      </a>
                      <div className="latest-news__single-content">
                        <p className="mt-0">
                          <a href="blog-details.html">Donation is hope for poor helpless children</a>
                        </p>
                        <p className="post-date">18 February, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="footer-area__bottom">
                <div className="row neutral-row d-flex align-items-center">
                  <div className="col-lg-6 row-item">
                    <div className="footer-area__bottom-left wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                      <p className="secondary1">Subscribe us for more update & news !!</p>
                      <form action="#" method="post">
                        <div className="input-group-btnn">
                          <input type="email" name="newsletter__email" id="newsletterEmail"
                            placeholder="Enter Your Email" className="email" required />
                          <button type="submit" className="button button--effect" id="subscribe">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 row-item">
                    <div className="footer-area__bottom-right">
                      <div className="social social--secondary">
                        <a href="https://www.facebook.com/">
                          <i class="fab fa-facebook-f">
                          </i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.pinterest.com/">
                        <i class="fab fa-pinterest"></i>
                        </a>
                      </div>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/privacy-policy">Privacy Policy</a></li>
                          <li className="breadcrumb-item"><a href="/terms-conditions">Terms & Conditions</a></li>
                          <li className="breadcrumb-item"><a href="/faqs">FAQ</a></li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="secondary-f neutral-bottom-footer">Copyright © 2022 <a href="https://themeforest.net/user/croptheme"><strong>Sehat Booking</strong></a>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
