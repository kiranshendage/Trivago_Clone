import React from "react";
import "./Trivago.css";

const Top_Rated_HotelsChild = ({ prodlist }) => {
  const renderList = (prodlist) => {
    if (prodlist) {
      return prodlist.map((item) => {
        return (
          <div key={item.id} className="deal-box">
            <div className="deal-box-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="deal-box-headine">
              <h2>{item.name}</h2>
              <p>
                {item.rating} {item.reviews}
              </p>
            </div>
            <div className="deal-box-lower">
              <div className="hotel-site">⟟ {item.location}</div>
              <div className="deal-about">About</div>
              <h3>{item.facilities}</h3>
              <br />
              <div className="deal-button">
                <button>{item.buttonText}</button>
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
      <div className="deals-headline">
                    <h2>Take a dip at these top-rated hotels</h2>
                </div>
        <div className="deal-main-box">{renderList(prodlist)}</div>
      </div>
    </div>
  );
};

export default Top_Rated_HotelsChild;
