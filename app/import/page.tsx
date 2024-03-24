"use client";
import React, { useState, useEffect } from "react";
import PopupModal from "@/components/PopupModal";
import Cocos from "./components/Cocos";

export default function ImportPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Function to load scripts dynamically
    const loadScripts = () => {
      // Create script elements dynamically
      const systemBundleScript = document.createElement("script");
      systemBundleScript.src = "src/system.bundle.js";
      systemBundleScript.charset = "utf-8";

      const importMapScript = document.createElement("script");
      importMapScript.src = "src/import-map.json";
      importMapScript.type = "systemjs-importmap";
      importMapScript.charset = "utf-8";

      const indexScript = document.createElement("script");
      indexScript.src = "./index.js";
      indexScript.type = "systemjs-importmap";

      // Append script elements to the document body
      document.body.appendChild(systemBundleScript);
      document.body.appendChild(importMapScript);
      document.body.appendChild(indexScript);
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
    <div className="flex items-center justify-center h-screen">
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>
      {showModal && (
        <PopupModal showModal={showModal} toggleModal={toggleModal}>
          <canvas id="GameCanvas" tabIndex={99}></canvas>
        </PopupModal>
      )} */}
      <canvas id="GameCanvas" tabIndex={99}></canvas>
      <script src="src/system.bundle.js" charSet="utf-8"></script>

      <script
        src="src/import-map.json"
        type="systemjs-importmap"
        charSet="utf-8"
      ></script>

      <script src="./index.js"></script>
    </div>
  );
}
