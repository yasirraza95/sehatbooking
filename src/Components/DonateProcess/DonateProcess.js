import React from "react";
import './DonateProcess.css';

export default function DonateProcess() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-xl-5">
          <div className="process-area__single">
            <div className="process-area__single-item">
              <h5>Registration</h5>
              <p className="neutral-bottom">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ipsam voluptatem
              </p>
              <div className="text">
                <p className="tertiary">01</p>
              </div>
              <span className="arrow"></span>
            </div>
            <div className="process-area__single-item">
              <h5>Donation</h5>
              <p className="neutral-bottom">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ipsam voluptatem
              </p>
              <div className="text">
                <p className="tertiary">03</p>
              </div>
              <span className="arrow"></span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-5 offset-xl-2">
          <div className="process-area__single process-area__single--secondary">
            <div className="process-area__single-item process-area__single-item--secondary">
              <h5>Screening test</h5>
              <p className="neutral-bottom">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ipsam voluptatem
              </p>
              <div className="text">
                <p className="tertiary">02</p>
              </div>
              <span className="arrow"></span>
            </div>
            <div className="process-area__single-item process-area__single-item--secondary">
              <h5>Rest & Refresh</h5>
              <p className="neutral-bottom">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ipsam voluptatem
              </p>
              <div className="text text-alt">
                <p className="tertiary">04</p>
              </div>
              <span className="arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
