import React from "react";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./BloodTips.css";
import Footer from "../Footer/Footer";
import ToTop from "../TopTop/ToTop";
import useImportScript from "../../utils/useImportScript";
export default function BloodTips() {
  useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
  useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
  useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
  useImportScript(
    "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js"
  );
  useImportScript("/assets/vendor/slick/js/slick.js");
  useImportScript("/assets/vendor/odometer/js/odometer.min.js");
  useImportScript("/assets/vendor/viewport-js/viewport.jquery.js");
  useImportScript("/assets/vendor/owl-carousel/js/owl.carousel.min.js");
  useImportScript("/assets/vendor/wow/wow.min.js");
  useImportScript("/assets/js/plugin.js");
  useImportScript("/assets/js/main.js");

  return (
    <>
      <TopBar />
      <Header />
      <section className="banner bg-img dark-overlay dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Blood Tips</h2>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Find Tips
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ==== privacy section start ==== --> */}
      <section className="blood-tips section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="privacy-area">
                <div className="group">
                  <h3>Blood Tips</h3>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Drink plenty
                      of water the night and morning before you donate.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Eat breakfast
                      to help keep your blood sugar up.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Eat iron rich
                      foods for 2 weeks before your appointment; for example,
                      spinach, whole grains, eggs, and beef.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Avoid fatty
                      foods for twenty-four hours before you donate
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Avoid smoking
                      on the day before donating. You can smoke 3 hours after
                      donation.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ask for a
                      blanket if your hands or feet start to feel cold.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Have a snack
                      after the donation.Rest for a few minutes enjoying your
                      snack before leaving the donation site.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Eat a meal
                      high in protein after your donation: beef, chicken or
                      legumes are excellent choices.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> You will not
                      be eligible to donate blood if you have consumed alcohol
                      48 hours before donation.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Avoid heavy
                      lifting and strenuous exercise for the rest of the day.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>{" "}
                      <strong>Nervous ? Read this :</strong>
                    </li>

                    <ul className="blood-list" style={{ paddingLeft: "3%" }}>
                      {/* <li><i className="bi bi-check-circle-fill"></i> <strong>Will I feel tired ?</strong>
                                            You will not feel drained or tired if you continue to drink fluids and have a good meal.
                                            </li>
                                            <li><i className="bi bi-check-circle-fill"></i> <strong>Will I be bedridden for the rest of the day ?</strong>
                                            If you are verified to donate by the doctor you will still have surplus blood after the donation.
                                            </li> */}
                      <dl>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>{" "}
                          <strong>Will I feel tired ?</strong>
                        </dt>
                        <dd>
                          You will not feel drained or tired if you continue to
                          drink fluids and have a good meal.
                        </dd>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>
                          <strong>
                            {" "}
                            Will I be bedridden for the rest of the day ?
                          </strong>
                        </dt>
                        <dd>
                          You can resume all your normal activities, though
                          you're asked to refrain.
                        </dd>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>
                          <strong>
                            {" "}
                            Will I be in danger of having low blood ?
                          </strong>
                        </dt>
                        <dd>
                          If you are verified to donate by the doctor you will
                          still have surplus blood after the donation.
                        </dd>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>
                          <strong>
                            {" "}
                            Ahh - Syringes ! How much will it hurt ?
                          </strong>
                        </dt>
                        <dd>No, you will not feel any pain.</dd>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>
                          <strong> Does one feel dizzy after this ?</strong>
                        </dt>
                        <dd>
                          You will not faint or feel uncomfortable after
                          donating blood.
                        </dd>
                        <dt>
                          <i className="bi bi-check-circle-fill"></i>
                          <strong> Oh My God ! I'll get AIDS !</strong>
                        </dt>
                        <dd>
                          No! Make sure disposable syringes are used and all
                          measures are taken to keep you germ free.
                        </dd>
                      </dl>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== #privacy section end ==== --> */}
      <ToTop />
      <Footer />
    </>
  );
}
