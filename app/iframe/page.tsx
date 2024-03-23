"use client";
import PopupModal from "@/components/PopupModal";
import React, { useState } from "react";
import Iframe from "./components/Iframe";

export default function IframePage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>
      <PopupModal showModal={showModal} toggleModal={toggleModal}>
        <Iframe />
      </PopupModal>
    </div>
  );
}
