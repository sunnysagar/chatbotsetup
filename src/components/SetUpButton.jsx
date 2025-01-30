import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthModal from "./AuthModal";
import { AiFillSetting } from "react-icons/ai";
import '../Style.css';

function AnimatedButton({text}) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div>
            <motion.button
            className="learn-more-button"
            whileHover={{
                scale: 1.1,
                background: "linear-gradient(135deg, #3b82f6, #9333ea)", 
                color: "#fff",
                boxShadow: "0px 8px 15px rgba(147, 51, 234, 0.3)", 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleModal}
        >
        <AiFillSetting size={24} /> {text}
    </motion.button>
        <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
    );
}

export default AnimatedButton;
