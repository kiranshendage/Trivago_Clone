import React from "react";
import "./Trivago.css";
import pic1Logo from "../images/pic1.png";

const Recently_ViewChild = ({ prodlist }) => {
  const renderList = (prodlist) => {
    if (prodlist) {
      return prodlist.map((item) => {
        return (
          <div key={item.id} className="recently-box">
            <div className="recently-box1">
              <h3>{item.location}</h3>
              <br />
              <p>{item.dates}</p>
              <p>{item.guests}</p>
            </div>
            <div className="recently-box2">
              {/* Use the icon class name from JSON */}
              <i className={item.icon}></i>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="main-content">
      <div className="main-section">
        <div className="section-pic1">
          <div className="pic1">
            <img src={pic1Logo} alt="Example" />
          </div>
        </div>

        <div className="recently-view">
          <h2>Recently viewed</h2>
        </div>

        <div className="recently-view-box">
          {renderList(prodlist)}
        </div>
      </div>
    </div>
  );
};

export default Recently_ViewChild;
