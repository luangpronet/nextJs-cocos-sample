"use client";

import React, { useState } from "react";
import Cocos from "./components/Cocos";

export default function ImportPage() {
  const [showModal, setShowModal] = useState(false);

  const cleanup = () => {
    const scriptTags = document.querySelectorAll("#cocos-nthiendev");
    scriptTags.forEach((tag) => tag.remove());
  };

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
