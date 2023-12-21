import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './create.css'; 

function Create() {
  // State variables to store form input values
  const [Name, setName] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Year, setYear] = useState("");
  const [EngineSize, setEngineSize] = useState("");
  const [Color, setColor] = useState("");
  const [BodyType, setBodyType] = useState("");
  const [PriceRange, setPriceRange] = useState("");
  const [ImageURL, setImageURL] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a car object with form input values
    const car = {
      Name: Name,
      Make: Make,
      Model: Model,
      Year: Year,
      EngineSize: EngineSize,
      Color: Color,
      BodyType: BodyType,
      PriceRange: PriceRange,
      ImageURL: ImageURL,
    };

    // Send a POST request to the server with the car data
    axios
      .post("http://localhost:4000/api/cars", car)
      .then(() => {
        // After successful submission, render a Link to the home page
      })
      .catch((error) => {
        console.error(error); // Log any errors
      });
  };

  return (
    <div>
      <h2>Hello from create Component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Make: </label>
          <input
            type="text"
            className="form-control"
            value={Make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Model: </label>
          <input
            type="text"
            className="form-control"
            value={Model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input
            type="text"
            className="form-control"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Engine Size: </label>
          <input
            type="text"
            className="form-control"
            value={EngineSize}
            onChange={(e) => setEngineSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Color: </label>
          <input
            type="text"
            className="form-control"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body Type: </label>
          <input
            type="text"
            className="form-control"
            value={BodyType}
            onChange={(e) => setBodyType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price Range: </label>
          <input
            type="text"
            className="form-control"
            value={PriceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image URL: </label>
          <input
            type="text"
            className="form-control"
            value={ImageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Car" />
      </form>
      {/* Render a Link to the home page */}
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

export default Create;
