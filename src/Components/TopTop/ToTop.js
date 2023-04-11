import React from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./ToTop.css";
export default function ToTop() {
  const backToTop = () => {
    return (
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      ),
      !1
    );
  };

  $(window).on("scroll", function () {
    $(this).scrollTop() > 300
      ? $(".back-to-top").fadeIn()
      : $(".back-to-top").fadeOut();
  });
  return (
    <div className="back-to-top" onClick={backToTop}>
      <FontAwesomeIcon icon={faAnglesUp} />
    </div>
  );
}
