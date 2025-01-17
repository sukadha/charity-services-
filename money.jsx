import React, { useState } from "react";
import "./money.css";
import moneyImage from "./money.png";

const Money = () => {
  const [totalAmount, setTotalAmount] = useState("");

  const handleAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="main-heading">Your Donation Has The Power To Transform Lives</h1>
      <div className="content-wrapper">
        <div className="form-container">
          <div className="input-row">
            <div className="input-group">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Address:</label>
              <input type="text" placeholder="Enter your address" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Phone No:</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="amount-section">
            <label>Total Amount:</label>
            <input
              type="number"
              value={totalAmount}
              onChange={handleAmountChange}
              placeholder="Enter donation amount"
              className="amount-input"
            />
            <div className="amount-box">
              <p>{totalAmount ? `Total Donation Amount: $${totalAmount}` : "Please enter an amount"}</p>
            </div>
          </div>

          <button className="donate-button">Donate Now</button>
        </div>

        <div className="money-image">
          <img src={moneyImage} alt="Money" />
        </div>
      </div>
    </div>
  );
};

export default Money;
