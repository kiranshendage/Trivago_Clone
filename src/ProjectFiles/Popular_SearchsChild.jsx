import React from "react";
import "./Trivago.css";


const Popular_SearchsChild = ({ prodlist }) => {
  const renderList = (prodlist) => {
    if (prodlist) {
      return prodlist.map((item) => {
        return (
          <div key={item.id} className="popular-deal-box">
            <div className={`popular-deal-box-img`}>
              <img src={item.image} alt={item.location} />
              <div className="popular-deal-box-headine">
                <h2 id="popular3">{item.location}</h2>
                <h2 id="popular1">{item.hotels}</h2>
                <h2 id="popular2">{item.averagePrice}</h2>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="main-content">
      <div className="main-section">
      <div className="popular-headline">
                    <h2>Popular Searches</h2>
                </div>
        <div className="popular-deal-main-box">{renderList(prodlist)}</div>
      </div>
    </div>
  );
};

export default Popular_SearchsChild;
