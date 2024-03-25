"use client";

import React, { useState } from "react";
import Cocos from "./components/Cocos";

export default function ImportPage() {
  const [showModal, setShowModal] = useState(false);

  const cleanup = () => {
    const scriptTags = document.querySelectorAll("#cocos-nthiendev");
    scriptTags.forEach((tag) => tag.remove());
    const canvas = document.querySelector("#GameCanvas");
    canvas?.remove();
  };

  const toggleModal = () => {
    setShowModal(!showModal);

    // Get the element with the id "nthiendev"
    const targetElement = document.getElementById("nthiendev");

    // If modal is opened
    if (!showModal) {
      // Append the script elements to the target element
      const script1 = document.createElement("script");
      script1.id = "cocos-nthiendev";
      script1.src = "./src/system.bundle.js";

      const script2 = document.createElement("script");
      script2.id = "cocos-nthiendev";
      script2.src = "./src/import-map.json";
      script2.type = "systemjs-importmap";

      const script3 = document.createElement("script");
      script3.id = "cocos-nthiendev";
      script3.src = "cocos_loader.js";

      targetElement?.appendChild(script1);
      targetElement?.appendChild(script2);
      targetElement?.appendChild(script3);
    } else {
      // If modal is closed, clean up the scripts
      cleanup();
    }
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
