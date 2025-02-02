import React, { useState, useEffect } from "react"
import { User, Phone, Mail, Briefcase, MapPin, Edit } from "lucide-react"
import "../Style.css"
import UpdateProfileForm from "./UpdateProfileForm"
import { auth } from "../../firebase"

import sunny from "../assets/sunny.jpg"
import axios from "axios"

const ProfilePage = () => {
  const [userData, setUserData] = useState(null)
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false)

  const currentUser = auth.currentUser;
  const userEmail = currentUser? currentUser.email : null;

  useEffect(() => {
    fetchUserData()
  }, [])

  const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

  const fetchUserData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get(`${backendUrl}/api/user/${userEmail}`)
      const data = response.data
      setUserData(data)
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }

  const handleUpdateProfile = (updatedData) => {
    setUserData({ ...userData, ...updatedData })
    setIsUpdateFormVisible(false)
  }

  if (!userData) return <div>Loading...</div>

  return (
    <div className="profileContainer">
      <section className="section photoSection">
        <img src={userData.photo || sunny} alt="User" className="userPhoto" />
      </section>

      <section className="section detailsSection">
        <h2 className="sectionTitle">Personal Information</h2>
        <div className="infoItem">
          <User className="icon-profile" />
          <span className="label">Name:</span> {userData.name}
        </div>
        <div className="infoItem">
          <Phone className="icon-profile" />
          <span className="label">Phone:</span> {userData.phone}
        </div>
        <div className="infoItem">
          <Mail className="icon-profile" />
          <span className="label">Email:</span> {userData.email}
        </div>
        <div className="infoItem">
          <Briefcase className="icon-profile" />
          <span className="label">Profession:</span> {userData.profession}
        </div>
      </section>

      <section className="section locationSection">
        <h2 className="sectionTitle">Location</h2>
        <div className="infoItem">
          <MapPin className="icon-profile" />
          <span className="label">City:</span> {userData.city}
        </div>
        <div className="infoItem">
          <MapPin className="icon-profile" />
          <span className="label">State:</span> {userData.state}
        </div>
        <div className="infoItem">
          <MapPin className="icon-profile" />
          <span className="label">Pincode:</span> {userData.pincode}
        </div>
        <button className="updateButton" onClick={() => setIsUpdateFormVisible(true)}>
          <Edit className="buttonIcon" />
          Update Profile
        </button>
      </section>

      {isUpdateFormVisible && (
        <UpdateProfileForm
          userData={userData}
          onUpdate={handleUpdateProfile}
          onClose={() => setIsUpdateFormVisible(false)}
        />
      )}
    </div>
  )
}

export default ProfilePage;

