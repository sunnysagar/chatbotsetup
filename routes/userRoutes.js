const express = require('express');
const router = express.Router();

const User = require("../models/user")

router.post('/users', async (req, res) => {
  const { name, email, password, phone, profession,city,state, pincode } = req.body;

  try {
    
    const newUser = new User({
      name,
      email,
      password, // Store hashed password
      phone,
      profession,
      city,
      state,
      pincode,
     
    });

    await newUser.save();
    return res.status(201).json({ message: "Saved successful", user: newUser });
  } catch (error) {
    console.error("Error in signup:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
// Route to get user details by email
router.get('/user/:email', async (req, res) => {
    const { email } = req.params;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Route to update user profile
 router.put('/user/:email', async (req, res) => {
    const { email } = req.params;
    const { name, phone, profession, city, state, pincode } = req.body;
  
    try {
      const user = await User.findOneAndUpdate(
        { email },
        { name, phone, profession, city, state, pincode },
        { new: true } // Return the updated document
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
