import React from "react";
import { Link } from "react-router-dom";

export default function Slideshow() {
  return (
    <div className="container">
      <div className="banners">
        <div className="left-banner">
          <img src="/img/sec1-1.jpg" />
          <div className="box">
            <h1>Galaxy folding phones</h1>
            <p>
              Which can vary depending on the brand and model electronic device.
            </p>
            <Link to="/shop" className="btn btn-light">
              shop Now
            </Link>
          </div>
        </div>
        <div className="right-banner">
          <div className="upper-banner">
            <img src="/img/sec1-2.png" />
            <div className="box">
              <h1>Special Discount</h1>
              <p>up to 50% off</p>
              <Link to="shop" className="link">
                shop Now
              </Link>
            </div>
          </div>
          <div className="bottom-banner">
            <img src="/img/sec1-3.png" />
            <div className="box">
              <h1>Special Discount</h1>
              <p>up to 30% off</p>
              <Link to="shop" className="link">
                shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
