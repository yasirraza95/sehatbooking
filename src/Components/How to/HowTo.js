import React from "react";
import TopBar from "../HomeTopBar/TopBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./HowTo.css";
export default function HowTo() {

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
                  <h2>How to</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        How to
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
                  {/* ____________________ */}

                  {/* ____________________ */}


                  {/* <!-- Login / Register Modal--> */}
                  <div className="row neutral-row">

                    <div className="col-lg-5 row-item">
                      <div className="contact-area-single contact-area__sidebar wow fadeInUp">
                        <h4 className="descender">Steps For Usage!</h4>
                        <div className="group">
                          <ul className="nav nav-tabs howTo">
                            <li className="active">
                              <a data-toggle="tab" href="#login-form"><i class="fa fa-user-md"></i> Emergency Request
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#registration-form"><i class="fa fa-search"></i> Find Donor
                              </a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#donate-form"><i class='fas fa-hand-holding-heart'></i> Donate Blood
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 row-item">
                      <div className="contact-area-single contact-area__content-form">

                        <div className="body">
                          <div className="tab-content">
                            <div id="login-form" className="tab-pane fade in active">
                              <h4 className="descender">Emergency Request</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
                              non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                              quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                              </p>
                            </div>
                            <div id="registration-form" className="tab-pane fade">
                              <h4 className="descender">Find Donor</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <p>
                              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
                              quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                              id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                              eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
                              omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut 
                              et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
                              ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                              </p>
                            </div>


                            <div id="donate-form" className="tab-pane fade">
                              <h4 className="descender">Donate Blood</h4>
                              <p>
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled and
                                righteous indignation and dislike men by the charms
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
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
          </div>
        </div>
      </section>
      {/* <!-- ==== #contact form section end ==== --> */}
      {/* <ToTop /> */}
      <Footer />
    </>
  );
}
