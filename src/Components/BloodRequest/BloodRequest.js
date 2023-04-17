import React from "react";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";
import "./BloodRequest.css";

export default function BloodRequest() {
    // useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
    // useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
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
                                                    On the other hand, we denounce with righteous
                                                    indignation and dislike men who are so beguiled and
                                                    righteous indignation and dislike men by the charms
                                                </p>
                                                <form action="#" method="post" name="contact__Form">
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <select className="select-donation-type">
                                                                <option data-display="Donation Type">Select Blood Group</option>

                                                                <option value="ab+">AB+</option>
                                                                <option value="ab-">AB-</option>
                                                                <option value="o+">O+</option>
                                                                <option value="o-">O-</option>
                                                                <option value="A+">A+</option>
                                                                <option value="A-">A-</option>
                                                            </select>
                                                        </div>
                                                        <div className="input">
                                                            <select className="select-donation-type">
                                                                <option data-display="Donation Type">Select City</option>
                                                                <option value="Karachi Sindh">Karachi Sindh</option>
                                                                <option value="Lahore, Punjab">Lahore, Punjab</option>
                                                                <option value="Faisalabad, Punjab">Faisalabad, Punjab</option>
                                                                <option value="Rawalpindi, Punjab">Rawalpindi, Punjab</option>
                                                                <option value="Multan, Punjab">Multan, Punjab</option>
                                                                <option value="Hyderabad, Sindh">Hyderabad, Sindh</option>
                                                                <option value="Gujranwala, Punjab">Gujranwala, Punjab</option>
                                                                <option value="Peshawar, Khyber Pakhtunkhwa">Peshawar, Khyber Pakhtunkhwa</option>
                                                                <option value="Quetta, Balochistan">Quetta, Balochistan</option>
                                                                <option value="Islamabad">Islamabad</option>
                                                                <option value="Sargodha, Punjab">Sargodha, Punjab</option>
                                                                <option value="Bahawalpur, Punjab">Bahawalpur, Punjab</option>
                                                                <option value="Sialkot, Punjab">Sialkot, Punjab</option>
                                                                <option value="Sukkur, Sindh">Sukkur, Sindh</option>
                                                                <option value="Larkana, Sindh">Larkana, Sindh</option>
                                                                <option value="Sheikhupura, Punjab">Sheikhupura, Punjab</option>
                                                                <option value="Jhang, Punjab">Jhang, Punjab</option>
                                                                <option value="Rahim Yar Khan, Punjab">Rahim Yar Khan, Punjab</option>
                                                                <option value="Mardan, Khyber Pakhtunkhwa">Mardan, Khyber Pakhtunkhwa</option>
                                                                <option value="Gujrat, Punjab">Gujrat, Punjab</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <select className="select-donation-type">
                                                                <option data-display="Donation Type">Select State</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="Sidh">Sindh</option>
                                                                <option value="Balochistan">Balochistan</option>
                                                                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <div class="form-checkk">
                                                                <input type="checkbox" value="" id="flexCheckDefault" />
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Default checkbox
                                                                </label>
                                                            </div>
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
