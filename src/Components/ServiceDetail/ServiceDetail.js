import React from 'react'
import Footer from '../Footer/Footer'
import TopBar from '../HomeTopBar/TopBar'
import Header from '../Header/Header'
import Regsiter from "../Images/registration.png";
import ScanTest from "../Images/screen-test.png";
import Blood from "../Images/blood.png";
import TestBlood from "../Images/testBlood.jpg";
import Doctor from "../Images/doctor.jpg";
import Donate from "../Images/donate.jpg";
export default function ServiceDetail() {
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
                                    <h2>Service Details
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
                                                Service Details
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

            {/* <!-- ==== service details section start ==== --> */}
            <section class="service-details section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="service-details-area">
                                <div class="row neutral-row">
                                    <div class="col-lg-4 order-last order-lg-first row-item">
                                        <div class="service-details-area__sidebar">
                                            <div
                                                class="sidebar-single sidebar-single--secondary categories--secondary wow fadeInUp">
                                                <h4>Our Services</h4>
                                                <ul>
                                                    <li><a href="services.html">Blood Donation<i class="fa-solid fa-arrow-right-long"></i></a></li>
                                                    <li><a href="services.html">Health Check<i class="fa-solid fa-arrow-right-long"></i></a></li>
                                                    <li><a href="services.html">Blood Bank<i class="fa-solid fa-arrow-right-long"></i></a></li>
                                                    <li><a href="services.html">Donate Process<i class="fa-solid fa-arrow-right-long"></i></a></li>
                                                    <li><a href="services.html">All Services<i class="fa-solid fa-arrow-right-long"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="sidebar-single sidebar-single--secondary excellence wow fadeInUp">
                                                <h4>Blood Excellence</h4>
                                                <h3>Expanded Blood Donate Services Here</h3>
                                                <p>There are many variations of passages Lorem Ipsum available, but the majority suffered of alteration in some form,</p>
                                                <a href="contact-us.html" class="button button--quinary button--effect">Contact Us</a>
                                            </div>
                                            <div class="sidebar-single sidebar-single--secondary">
                                                <h4>Leave a Message</h4>
                                                <form action="#" method="post" name="quickMessage">
                                                    <div class="input">
                                                        <input type="text" name="quick__name" id="quickName" placeholder="Your Name" required />
                                                    </div>
                                                    <div class="input">
                                                        <input type="email" name="quick__mail" id="quickMail" placeholder="Email" required />
                                                    </div>
                                                    <div class="input">
                                                        <textarea name="quick__message" id="quickMessage" cols="30" rows="10" placeholder="Message Details"></textarea>
                                                    </div>
                                                    <button class="button button--effect">Send Message<i class="fa-solid fa-arrow-right-long"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 row-item">
                                        <div class="service-details-area__content service-details-area__content-alt">
                                            <div class="content-group-secondary group-space">
                                                <h2>Know More Us of Our Blood
                                                    Donate Services</h2>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                                                <p class="neutral-bottom">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</p>
                                            </div>
                                            <div class="service-details-area__poster group-space wow fadeInUp">
                                                <img src={Donate} alt="Service Details" />
                                            </div>
                                            <div class="content-group--secondary group-space">
                                                <h2 class="descender">Your Blood Donate Can Change Someone’s Life</h2>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>

                                                <p class="neutral-bottom">sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                            </div>
                                            <div class="content-group--secondary group-space">
                                                <h2 class="descender">Donation Process</h2>
                                                <p class="neutral-bottom">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, eaque quae illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                            </div>
                                            <div class="group-item-wrapper group-space">
                                                <div class="group-inner__item">
                                                    <div class="wrapper">
                                                        <div class="group-inner__item__inner">
                                                            <img src={Regsiter} alt="Registration" />
                                                        </div>
                                                    </div>
                                                    <h4 class="neutral-bottom">Registration</h4>
                                                </div>
                                                <div class="group-inner__item">
                                                    <div class="wrapper">
                                                        <div class="group-inner__item__inner">
                                                            <img src={ScanTest} alt="Screen Test" />
                                                        </div>
                                                    </div>
                                                    <h4 class="neutral-bottom">Screening Test</h4>
                                                </div>
                                                <div class="group-inner__item">
                                                    <div class="wrapper">
                                                        <div class="group-inner__item__inner">
                                                            <img src={Blood} alt="Blood Donate" />
                                                        </div>
                                                    </div>
                                                    <h4 class="neutral-bottom">Blood Donate</h4>
                                                </div>
                                            </div>
                                            <div class="group-space">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even slightly believable. If you are going use passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden</p>

                                                <div class="img-group">
                                                    <img src={TestBlood}
                                                        alt="Donate" />
                                                    <img src={Doctor}
                                                        alt="Donate" />
                                                </div>
                                            </div>
                                            <div class="wow fadeInUp">
                                                <h2>Key Benefits</h2>
                                                <div class="faq-wrapper faq-wrapper--secondary">
                                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                                        <div class="accordion-item">
                                                            <h6 class="accordion-header" id="flush-headingOne">
                                                                <button class="accordion-button" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseOne" aria-expanded="true"
                                                                    aria-controls="flush-collapseOne">
                                                                    We Can Save More Lifes With Your Helping Hand.
                                                                </button>
                                                            </h6>
                                                            <div id="flush-collapseOne" class="accordion-collapse collapse show"
                                                                aria-labelledby="flush-headingOne"
                                                                data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body">
                                                                    <p class="neutral-bottom">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor labore dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, diam voluptua.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h6 class="accordion-header" id="flush-headingTwo">
                                                                <button class="accordion-button collapsed" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                                    aria-controls="flush-collapseTwo">
                                                                    We Can Save More Lifes With Your Helping Hand.
                                                                </button>
                                                            </h6>
                                                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingTwo"
                                                                data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body">
                                                                    <p class="neutral-bottom">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor labore dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, diam voluptua.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h6 class="accordion-header" id="flush-headingThree">
                                                                <button class="accordion-button collapsed" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                                    aria-controls="flush-collapseThree">
                                                                    We Can Save More Lifes With Your Helping Hand.
                                                                </button>
                                                            </h6>
                                                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingThree"
                                                                data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body">
                                                                    <p class="neutral-bottom">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor labore dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, diam voluptua.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h6 class="accordion-header" id="flush-headingFour">
                                                                <button class="accordion-button collapsed" type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                                                    aria-controls="flush-collapseFour">
                                                                    We Can Save More Lifes With Your Helping Hand.
                                                                </button>
                                                            </h6>
                                                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingFour"
                                                                data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body">
                                                                    <p class="neutral-bottom">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor labore dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, diam voluptua.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
            {/* <!-- ==== #service details section end ==== --> */}

            <Footer />
        </>
    )
}
