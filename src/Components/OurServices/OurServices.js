import React from 'react'
import TopBar from '../HomeTopBar/TopBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import donorBlood from "../Images/blooddonation.jpg";
import HeartIcon from "../Images/heart.png";
import FirstAidIcon from "../Images/first-aid.png";
import TubeIcon from "../Images/tube.png";
import useImportScript from '../../utils/useImportScript';
import { Link } from 'react-router-dom';
export default function OurServices() {
  useImportScript("/assets/vendor/wow/wow.min.js");

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
                                    <h2>Our Services
                                    </h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="/">Home</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Our Services
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

            {/* <!-- ==== home two services section start ==== --> */}
        <section className="overview section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="overview-area">
                            <div className="section-header section-inner-space">
                                <p className="primary neutral-ascender descender">Services</p>
                                <h2 className="neutral-descender">Our Best Services</h2>
                            </div>
                            <div className="row neutral-row">
                                <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                                    <div className="overview-area__single img-effect">
                                        <div className="overview-area__single-content">
                                            <div className="poster">
                                                <Link to="/service-detail">
                                                    <img src={donorBlood} alt="Blood Donor"/>
                                                </Link>
                                            </div>
                                            <div className="icon-box-wrapper">
                                                <div className="icon-box">
                                                <img src={FirstAidIcon} alt="First Aid" />
                                                </div>
                                            </div>
                                            <h5>Become a Donor</h5>
                                            <p className="neutral-bottom">But I must explain to you how all this mistaken idea
                                                of
                                                denouncing pleasure and
                                                praising pain was born and I will give </p>
                                        </div>
                                        <Link to="/service-detail" className="button button--secondary button--effect">Read
                                            More</Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                                    <div className="overview-area__single img-effect wow fadeInUp">
                                        <div className="overview-area__single-content">
                                            <div className="poster">
                                                <Link to="/service-detail">
                                                    <img src={donorBlood} alt="Give Blood"/>
                                                </Link>
                                            </div>
                                            <div className="icon-box-wrapper">
                                                <div className="icon-box">
                                                <img src={TubeIcon} alt="Tube" />

                                                </div>
                                            </div>
                                            <h5>Why Give Blood?</h5>
                                            <p className="neutral-bottom">But I must explain to you how all this mistaken idea
                                                of
                                                denouncing pleasure and
                                                praising pain was born and I will give </p>
                                        </div>
                                        <Link to="/service-detail" className="button button--secondary button--effect">Read
                                            More</Link>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                                    <div className="overview-area__single img-effect wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="overview-area__single-content">
                                            <div className="poster">
                                                <Link to="/service-detail">
                                                    <img src={donorBlood} alt="Blood Donation"/>
                                                </Link>
                                            </div>
                                            <div className="icon-box-wrapper">
                                                <div className="icon-box">
                                                <img src={HeartIcon} alt="Heart" />
                                                </div>
                                            </div>
                                            <h5>How Donations Helps</h5>
                                            <p className="neutral-bottom">But I must explain to you how all this mistaken idea
                                                of
                                                denouncing pleasure and
                                                praising pain was born and I will give </p>
                                        </div>
                                        <Link to="/service-detail" className="button button--secondary button--effect">Read
                                            More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ==== #home two services section end ==== --> */}

        {/* <!-- ==== cta two section start ==== --> */}
        <section className="cta cta--secondary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cta-area">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-9">
                                    <div className="cta-area__content">
                                        <h2 className="neutral-bottom">Let's change the world, Join us now!</h2>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="cta-area__btn text-start text-md-end">
                                        <Link to="/contact-us" className="button button--quaternary button--effect">Contact
                                            Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ==== #cta two section end ==== --> */}

        {/* <!-- ==== appointment three section start ==== --> */}
        <section className="appointment appointment--secondary appointment--tertiary section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="appointment-area">
                            <div className="section-header section-inner-space">
                                <p className="primary neutral-ascender descender">Registration</p>
                                <h2 className="neutral-descender">Your Donation Can Make
                                    Someone’s Life Better</h2>
                            </div>
                            <div className="row neutral-row">
                                <div className="col-lg-6 row-item">
                                    <div className="appointment-area__single appointment-area__content">
                                        <h4>Good To Know Blood Donate</h4>
                                        <div className="faq-wrapper">
                                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="flush-headingOne">
                                                        <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                            aria-expanded="true" aria-controls="flush-collapseOne">
                                                            How to donate on our site using your form?
                                                        </button>
                                                    </h6>
                                                    <div id="flush-collapseOne" className="accordion-collapse collapse show"
                                                        aria-labelledby="flush-headingOne"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                                                cumque nihil impedit quo minus id quod maxime placeat facere
                                                                possimus, voluptas assumenda est, omnis dolor repellendus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="flush-headingTwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                                            How to donate on our site using your form?
                                                        </button>
                                                    </h6>
                                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingTwo"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                                                cumque nihil impedit quo minus id quod maxime placeat facere
                                                                possimus, voluptas assumenda est, omnis dolor repellendus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="flush-headingThree">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                                            How to donate on our site using your form?
                                                        </button>
                                                    </h6>
                                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingThree"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                                                cumque nihil impedit quo minus id quod maxime placeat facere
                                                                possimus, voluptas assumenda est, omnis dolor repellendus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="flush-headingFour">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                                            aria-expanded="false" aria-controls="flush-collapseFour">
                                                            How to donate on our site using your form?
                                                        </button>
                                                    </h6>
                                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingFour"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                                                cumque nihil impedit quo minus id quod maxime placeat facere
                                                                possimus, voluptas assumenda est, omnis dolor repellendus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="flush-headingFive">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                                            aria-expanded="false" aria-controls="flush-collapseFive">
                                                            How to donate on our site using your form?
                                                        </button>
                                                    </h6>
                                                    <div id="flush-collapseFive" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingFive"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                                                cumque nihil impedit quo minus id quod maxime placeat facere
                                                                possimus, voluptas assumenda est, omnis dolor repellendus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 row-item">
                                    <div className="appointment-area__single appointment-area__form wow fadeInUp">
                                        <h4>Request Appointment Here</h4>
                                        <form action="#" method="post" name="appointmentForm">
                                            <div className="input-group-column">
                                                <div className="input">
                                                    <input type="text" name="appointment__name" id="appointmentName"
                                                        placeholder="Your Name" required/>
                                                </div>
                                                <div className="input">
                                                    <input type="number" name="appointment__number" id="appointmentNumber"
                                                        placeholder="Phone Number" required/>
                                                </div>
                                            </div>
                                            <div className="input">
                                                <input type="email" name="appointment__email" id="appointmentEmail"
                                                    placeholder="Your Email" required/>
                                            </div>
                                            <div className="input">
                                                <select className="select-donation-type">
                                                    <option data-display="Donation Type">Donation Type</option>
                                                    <option value="free">Free Donation</option>
                                                    <option value="health">Health Checkup</option>
                                                    <option value="paid">Paid Donation</option>
                                                </select>
                                            </div>
                                            <div className="input">
                                                <textarea name="appointment__message" id="appointmentMessage" cols="30"
                                                    rows="10" placeholder="Your Message"></textarea>
                                            </div>
                                            <button type="submit" className="button button--tertiary button--effect">Submit
                                                Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ==== #appointment three section end ==== --> */}

            <Footer/>
        </>
    )
}
