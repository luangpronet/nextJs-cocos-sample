import React from "react";

const PopupModal = ({
  children,
  showModal,
  toggleModal,
}: {
  children: React.ReactNode;
  showModal: boolean;
  toggleModal: () => void;
}) => {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div
            style={{
              height: "calc(100vw / 2 )",
              width: "100vw",
              position: "relative",
            }}
          >
            <span
              className=" absolute top-0 right-1 m-4 cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
