"use client";

import React, { useState, useEffect } from "react";
import Cocos from "./components/cocos";

export default function ImportPage() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Function to load scripts dynamically
        const loadScripts = () => {
        };

        // Load scripts when showModal state changes
        if (showModal) {
            loadScripts();
        }
    }, [showModal]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="flex items-center justify-center h-screen relative">
            <button
                className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleModal}
            >
                Open Modal
            </button>
            <Cocos isShow={showModal}></Cocos>
        </div>
    );
}
