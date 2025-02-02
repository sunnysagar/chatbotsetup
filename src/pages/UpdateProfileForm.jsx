import { useState } from 'react';
import { X } from 'lucide-react';
import '../Style.css';
import axios from 'axios';

export default function UpdateProfileForm({ userData, onUpdate, onClose }) {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(`${backendUrl}/api/user/${formData.email}`, formData);
  
      if (response.status !== 200) {
        throw new Error('Failed to update profile');
      }
  
      const data = response.data;
      onUpdate(data.user); // Update the user data in the parent component
      onClose(); // Close the form
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show a notification)
    }
  };
  

  return (
    <div className="overlay-profile">
      <div className="formContainer-profile">
        <button className="closeButton-profile" onClick={onClose}>
          <X />
        </button>
        <h2 className="formTitle">Update Profile</h2>
        <form onSubmit={handleSubmit}>
            <div className="one-row">

            <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

            <div className="formGroup">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="one-row">
        <div className="formGroup">
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>
         
          <div className="formGroup">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="one-row">
        <div className="formGroup">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
          
         

          <button type="submit" className="submitButton">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
