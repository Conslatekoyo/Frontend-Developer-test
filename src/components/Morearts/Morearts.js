import React from "react";
import Header from "../Header/Header";
import "./Morearts.css";
import artsy from "../../assets/artsy.png";

const Morearts = () => {
  return (
    <div>
      <Header />
      <div className="morearts">
        <div className="morearts_cointainer">
          <div className="morearts right">
            <div>
              <img className="morearts_image" src={artsy} />
            </div>
          </div>
          <div className="moreartsleft">
            <h1 className="header_morearts">Plastic Hears Sculptures</h1>
            <p className="morearts__text">
              Browse a curated selection of art around the world<br></br>{" "}
              including museum exhibitions, gallery openings, upcoming and many
              more.Browse a curated selection of art around the world including
              museum exhibitions, gallery openings, upcoming and many
              more.Browse a curated selection of art around the world<br></br>{" "}
              including museum exhibitions, gallery openings, upcoming and many
              more
            </p>
            <div className="buttons">
              <button className="morearts__button">Explore arts</button>
              <div className="text">
                <p>Explore More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Morearts;
