import React from "react";
import useImportScript from "../../utils/useImportScript";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TopBar from "../HomeTopBar/TopBar";

export default function ForgotToken() {
    // useImportScript("/assets/vendor/jquery/jquery-3.6.0.min.js");
    // useImportScript("/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    // useImportScript("/assets/vendor/nice-select/js/jquery.nice-select.min.js");
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
                                    <h2>Forgot Password Token</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Home</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Forgot Password Token
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
                                                <h4 className="descender">Update Password</h4>
                                                <p>
                                                    On the other hand, we denounce with righteous
                                                    indignation and dislike men who are so beguiled and
                                                    righteous indignation and dislike men by the charms
                                                </p>
                                                <form action="#" method="post" name="password__Form">
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                required
                                                                className="password"
                                                            />
                                                        </div>
                                                        <div className="input">
                                                            <input
                                                                type="password"
                                                                name="confirm_password"
                                                                placeholder="Confirm Password"
                                                                required
                                                                className="input"
                                                            />
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
