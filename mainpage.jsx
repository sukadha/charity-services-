import React from "react";
import "./mainpage.css";

const Mainpage = () => {
  return (
    
    <div className="main-container">
      <div className="left-container">
        <img
          src="https://c8.alamy.com/comp/KHXH1B/charity-set-of-flat-design-infographics-elements-KHXH1B.jpg"
          alt="Charity Infographic"
          className="left-image"
        />
      </div>
      <div className="right-container">
        <button className="action-button">Food</button>
        <button className="action-button">Clothes</button>
        <button className="action-button">Money</button>
        <button className="action-button">Books</button>
        <button className="action-button">Handicap</button>
        <button className="action-button">Plants</button>
      </div>
    </div>
  );
};

export default Mainpage;
