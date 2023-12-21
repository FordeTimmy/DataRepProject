import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import carData from './carData'; // Import the hardcoded data
import './home.css'; // Import a custom CSS file for styling 



function Home() {
  const [cars, setCars] = useState(carData); // Initialize with the hardcoded data
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    // Delete logic here
  };

  // Filter the cars based on the search query
  const filteredCars = cars.filter((car) => {
    const carName = car.Name.toLowerCase();
    const query = searchQuery.toLowerCase();
    return carName.includes(query);
  });

  return (
    <div className="home-container">
      <h2 className="welcome-heading">Welcome to StarDrive Dealership</h2>
      <div className="search-container">
      <img src="/Carlogo.PNG" alt="Car Logo" className="logo" /> 
        <input
          type="text"
          placeholder="Search for a car..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state based on user input.
        />
      </div>
      <div className="row">
        {filteredCars.map((car) => (
          <div className="col-md-4" key={car.Name}>
            <div className="card mb-4">
              <img
                src={car['Image URL']}
                className="card-img-top car-image"
                alt={car.Name}
              />
              <div className="card-body">
                <h5 className="card-title car-name">{car.Name}</h5>
                <p className="card-text">Make: {car.Make}</p>
                <p className="card-text">Model: {car.Model}</p>
                <p className="card-text">Year: {car.Year}</p>
                <p className="card-text">Engine Size: {car['Engine Size']}</p>
                <p className="card-text">Color: {car.Color}</p>
                <p className="card-text">Body Type: {car['Body Type']}</p>
                <p className="card-text">Price Range: {car['Price Range']}</p>
                <Link to={`/edit/${car.Name}`} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(car.Name)} // Call the handleDelete function when this button is clicked.
                  className="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
