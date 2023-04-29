import React from "react";
import "./Slider.css";
import Fotor1 from '../Images/fotor1.webp';
import Fotor2 from '../Images/fotor2.webp';
import Fotor3 from '../Images/fotor3.webp';

export default function Slider() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-center">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="item active">
                  <span className="quote">"</span>
                  <h4 className="title">Professional services all the way</h4>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh
                    non aliquet.
                  </p>
                  <div className="img-box">
                    <img src={Fotor1} alt="" />
                  </div>
                  <div className="avatar-info">
                    <h6 className="name">Jhon Alexis</h6>
                    <span className="span">Marketing Staff</span>
                  </div>
                </div>
                <div className="item">
                  <span className="quote">"</span>
                  <h4 className="title">Professional services all the way</h4>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus.
                    Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                    dictum risus. Pellentesque viverra sagittis quam at mattis.
                    Suspendisse potenti. Aliquam sit amet gravida nibh,
                    facilisis gravida odio.
                  </p>
                  <div className="img-box">
                    <img src={Fotor2} alt="" />
                  </div>
                  <div className="avatar-info">
                    <h6 className="name">Jhon Alexis</h6>
                    <span className="span">Marketing Staff</span>
                  </div>
                </div>
                <div className="item">
                  <span classMame="quote">"</span>
                  <h4 className="title">Professional services all the way</h4>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                    id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                    luctus turpis at accumsan tincidunt. Phasellus risus risus,
                    volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                    hendrerit dolor eget rutrum.
                  </p>
                  <div className="img-box">
                    <img src={Fotor3} alt="" />
                  </div>
                  <div className="avatar-info">
                    <h6 className="name">Jhon Alexis</h6>
                    <span className="span">Marketing Staff</span>
                  </div>
                </div>
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                className="carousel-control left"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control right"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
