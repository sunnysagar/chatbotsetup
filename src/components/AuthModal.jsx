import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth, googleProvider } from "../../firebase"; // NEW

import {
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "../Style.css";


const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // To display verification message
  
  const navigate = useNavigate();

  // 🔹 Handle Email/Password Authentication
  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);
        setMessage("Verification email sent! Please check your inbox.");
      } else {
        // Sign in user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if user is verified
        if (!user.emailVerified) {
          setError("Please verify your email before logging in.");
          return;
        }

        navigate("/dashboard"); // ✅ Redirect to Dashboard on Success
        onClose(); // Close modal after successful auth
      }
     
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      if (window.innerWidth <= 768) {
        await signInWithRedirect(auth, googleProvider); // Use Redirect for Mobile
      } else {
        await signInWithPopup(auth, googleProvider); // Use Popup for Desktop
      }
      navigate("/dashboard"); // ✅ Redirect to Dashboard on Success
      onClose(); // Close modal after successful auth
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <motion.div
        className="auth-modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <form onSubmit={handleAuth}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>

        <button className="google-btn" onClick={handleGoogleSignIn}>
          <FaGoogle /> Sign in with Google
        </button>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? " Sign In" : " Sign Up"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthModal;
