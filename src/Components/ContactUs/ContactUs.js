import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import TopBar from '../HomeTopBar/TopBar'
import "./ContactUs.css";

export default function ContactUs() {
    return (
        <>
            <TopBar />
            <Header />
            {/* <!-- ==== banner section start ==== --> */}
            <section className="banner bg-img dark-overlay dark-overlay" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-area">
                                <div className="banner-area__content">
                                    <h2>Contact Us
                                    </h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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
                                        <div className="col-lg-7 row-item">
                                            <div className="contact-area-single contact-area__content-form">
                                                <h4 className="descender">Get In Touch</h4>
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who
                                                    are so
                                                    beguiled and righteous indignation and dislike men by the charms</p>
                                                <form action="#" method="post" name="contact__Form">
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <input type="text" name="contact_f_name" id="contactFName"
                                                                placeholder="First Name" required className="input" />
                                                        </div>
                                                        <div className="input">
                                                            <input type="text" name="contact_l_name" id="contactLName"
                                                                placeholder="Last Name" required className="input" />
                                                        </div>
                                                    </div>
                                                    <div className="input-group-column">
                                                        <div className="input">
                                                            <input type="email" name="contact_mail" id="contactMail"
                                                                placeholder="Email" required className="input" />
                                                        </div>
                                                        <div className="input">
                                                            <input type="text" name="contact_subject" id="contactSubject"
                                                                placeholder="Subject" required className="input" />
                                                        </div>
                                                    </div>
                                                    <div className="input">
                                                        <textarea name="contact_message" id="contactMessage" cols="30" rows="10"
                                                            className="input textarea" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="button button--effect">Submit
                                                        Request<i  className="bi bi-arrow-right"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 row-item">
                                            <div className="contact-area-single contact-area__sidebar wow fadeInUp">
                                                <p className="secondary">Blood Excellence!</p>
                                                <h4>Expanded Blood Donate
                                                    Services Here</h4>
                                                <p className="neutral-bottom">On the other hand, we denounce with righteous
                                                    indignation and
                                                    dislike men who are so
                                                    beguiled and demoralized by the charms </p>
                                                <div className="group">
                                                    <p className="secondary"><i  className="bi bi-telephone-fill"></i> Emergency Line: (002)
                                                        012612457
                                                    </p>
                                                    <p className="secondary"><i  className="bi bi-geo-alt-fill"></i> Location:
                                                        Street 68,
                                                        Mahattan,
                                                        New York</p>
                                                    <p className="secondary"><i  className="bi bi-clock-fill"></i> Mon - Fri: 8:00 am -
                                                        7:00 pm
                                                    </p>
                                                </div>
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

            {/* <!-- ==== google map start ==== --> */}
        <div  className="map__wrapper">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.775631532833!2d-78.50382604856944!3d39.67726140810045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca663965e89cbd%3A0xa9ee5997c8a56f43!2sKoontz%20Rd%2C%20Maryland%2021530%2C%20USA!5e0!3m2!1sen!2sbd!4v1665834676559!5m2!1sen!2sbd"></iframe> */}
        </div>
        {/* <!-- ==== #google map end ==== --> */}

            <Footer />
        </>
    )
}