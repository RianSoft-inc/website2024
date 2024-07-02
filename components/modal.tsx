import React from "react";
import { IconContext } from "react-icons";

const Modal = ({
  isOpen,
  onClose,
  message,
  icon,
  iconColor,
  btnColor,
}: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 px-20 rounded shadow-lg flex flex-col items-center">
        <IconContext.Provider value={{ color: iconColor, size: "2.5em" }}>
          {icon}
        </IconContext.Provider>
        <h2
          dangerouslySetInnerHTML={{ __html: message }}
          className="mt-4 text-center"
        />
        <button
          onClick={onClose}
          className={`mt-4 px-6 py-2 ${btnColor} text-white rounded`}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
