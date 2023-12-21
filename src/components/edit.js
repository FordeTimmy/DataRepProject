import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom to access route parameters
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

export default function Edit(props) {
  const { id } = useParams(); // Extract the "id" parameter from the URL
  const navigate = useNavigate(); // Initialize the useNavigate hook to programmatically navigate

  // Define state variables for car details
  const [Name, setName] = useState('');
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Year, setYear] = useState('');
  const [EngineSize, setEngineSize] = useState('');
  const [Color, setColor] = useState('');
  const [BodyType, setBodyType] = useState('');
  const [PriceRange, setPriceRange] = useState('');
  const [ImageURL, setImageURL] = useState('');

  // useEffect Hook to fetch car data
  useEffect(() => {
    // Fetch car data based on the provided ID
    axios.get(`http://localhost:4000/api/cars/${id}`)
      .then((response) => {
        // Update the state variables with the fetched data
        setName(response.data.Name);
        setMake(response.data.Make);
        setModel(response.data.Model);
        setYear(response.data.Year);
        setEngineSize(response.data.EngineSize);
        setColor(response.data.Color);
        setBodyType(response.data.BodyType);
        setPriceRange(response.data.PriceRange);
        setImageURL(response.data.ImageURL);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]); // Include "id" in the dependency array to refetch data when the ID changes

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new car object with updated data
    const updatedCar = {
      id: id,
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

    // Send a PUT request to update the car data
    axios
    .put(`http://localhost:4000/api/cars/${id}`, updatedCar)
      .then((res) => {
        console.log(res.data);
        navigate('/'); // Redirect to the home page after editing
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
         {/* Form fields for editing car details */}
         <div className="form-group">
          <label>Edit Car Name: </label>
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Make: </label>
          <input
            type="text"
            className="form-control"
            value={Make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Model: </label>
          <input
            type="text"
            className="form-control"
            value={Model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Year: </label>
          <input
            type="text"
            className="form-control"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Engine Size: </label>
          <input
            type="text"
            className="form-control"
            value={EngineSize}
            onChange={(e) => setEngineSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Color: </label>
          <input
            type="text"
            className="form-control"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Body Type: </label>
          <input
            type="text"
            className="form-control"
            value={BodyType}
            onChange={(e) => setBodyType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Price Range: </label>
          <input
            type="text"
            className="form-control"
            value={PriceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Edit Car Image URL: </label>
          <input
            type="text"
            className="form-control"
            value={ImageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Car" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
