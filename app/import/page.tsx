"use client";
import React, { useState, useEffect } from "react";
import PopupModal from "@/components/PopupModal";

export default function ImportPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      // Create script elements dynamically
      // const systemBundleScript = document.createElement("script");
      // systemBundleScript.src = "src/system.bundle.js";
      // systemBundleScript.charset = "utf-8";

      const importMapScript = document.createElement("script");
      importMapScript.src = "src/import-map.json";
      importMapScript.type = "systemjs-importmap";
      importMapScript.charset = "utf-8";

      const indexScript = document.createElement("script");
      indexScript.src = "./index2.js";

      // Append script elements to the document body
      // document.body.appendChild(systemBundleScript);
      document.body.appendChild(importMapScript);
      document.body.appendChild(indexScript);

      // Clean up function to remove script elements when component unmounts
      return () => {
        //   document.body.removeChild(systemBundleScript);
        document.body.removeChild(importMapScript);
        document.body.removeChild(indexScript);
      };
    }
  }, [showModal]);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>
      {showModal && (
        <PopupModal showModal={showModal} toggleModal={toggleModal}>
          <canvas id="GameCanvas" tabIndex={99}></canvas>
        </PopupModal>
      )}
    </div>
  );
}
