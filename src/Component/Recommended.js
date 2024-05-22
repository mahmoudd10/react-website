import React from "react";
import "../css/Recommended.css";
import { useState } from "react";
import { data } from "./db";
import { Link } from "react-router-dom";

export default function Recommended() {
  let [category, setCategory] = useState(data);

  let handleBtn = (e) => {
    let clickedBtn = e.target.value;
    console.log(clickedBtn);
    // all
    if (clickedBtn === "all") {
      setCategory(data);
    }
    // mobile
    else if (clickedBtn === "Smart Watch") {
      let filtered = data.filter((item) => item.category === clickedBtn);
      setCategory(filtered);
    }
    // watch
    else if (clickedBtn === "Smart Phone") {
      let filtered = data.filter((item) => item.category === clickedBtn);
      setCategory(filtered);
    }
    //camera
    else if (clickedBtn === "Camera") {
      let filtered = data.filter((item) => item.category === clickedBtn);
      setCategory(filtered);
    }
  };

  return (
    <div className="recommended-sec">
      <div className="container">
        <div className="recommended-nav">
          <h1 className="section-title">Recommended for You</h1>
          <div className="nav-menu-links">
            <button value="all" onClick={handleBtn}>
              all
            </button>
            <button value="Smart Watch" onClick={handleBtn}>
              Smart Watch
            </button>
            <button value="Smart Phone" onClick={handleBtn}>
              Smart Phone
            </button>
            <button value="Camera" onClick={handleBtn}>
              Camera
            </button>
          </div>
        </div>
        <div className="row position-relative">
          {category.map((item) => {
            return (
              <>
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="card">
                    <div className="card-img">
                      <Link className="link" to={`/product/${item.id}`}>
                        <img src={item.image} alt="" />
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="content">
                        <h6>{item.title.slice(0, 15)}</h6>
                        <p>${item.price}.00</p>
                        <img src="/svg icons/Cart-1.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
