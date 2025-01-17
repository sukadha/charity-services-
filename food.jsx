import React, { useState } from 'react';
import './food.css';

const Food = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    serviceDate: '',
    parcelName: '',
    foodCount: '',
    totalAmount: ''
  });

  const recommendedCauses = [
    { image: "🥚", title: "Give an Egg", amount: 30 },
  { image: "🎒", title: "Give a school bag", amount: 500 },
  { image: "🎂", title: "Sponsor a birthday cake", amount: 350 },
  { image: "🥛", title: "Give milk", amount: 30 },
  { image: "🍎", title: "Give an Apple", amount: 50 },  // Added Apple
  { image: "🍌", title: "Give a Banana", amount: 20 },  // Added Banana
  { image: "📚", title: "Give Books", amount: 80 },     // Added Books
  { image: "💻", title: "Give a Laptop", amount: 30000 }, // Added Laptop
  { image: "👚", title: "Give Clothes", amount: 200 }   // Added Clothes
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-container">
      <div className="left-container">
        <div className="image-container">
          <img 
            src="https://i.pinimg.com/236x/a5/44/89/a54489f4c39e72808dc1334b25c48e85.jpg" 
            alt="Food Donation"
            className="donation-image"
          />
        </div>
      </div>
      
      <div className="food-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="left-column">
              <div className="form-group">
                <label htmlFor="donorName">Donor Name</label>
                <input
                  type="text"
                  id="donorName"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="parcelName">Name of Parcel</label>
                <input
                  type="text"
                  id="parcelName"
                  name="parcelName"
                  value={formData.parcelName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalAmount">Total Amount</label>
                <input
                  type="number"
                  id="totalAmount"
                  name="totalAmount"
                  value={formData.totalAmount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="right-column">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="serviceDate">Service Date</label>
                <input
                  type="date"
                  id="serviceDate"
                  name="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="foodCount">Food Count</label>
                <input
                  type="number"
                  id="foodCount"
                  name="foodCount"
                  value={formData.foodCount}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="donate-button">Donate Now</button>
        </form>
      </div>

      <div className="recommended-causes">
        <h2>Recommended Causes</h2>
        <div className="causes-container">
          <div className="causes-scroll">
            {[...recommendedCauses, ...recommendedCauses].map((cause, index) => (
              <div key={index} className="cause-item">
                <span className="cause-image">{cause.image}</span>
                <span className="cause-title">{cause.title}</span>
                <span className="cause-amount">Rs.{cause.amount}/-</span>
                <div className="separator"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
