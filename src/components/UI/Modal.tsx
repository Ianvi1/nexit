import React from "react";
import { IoMdClose } from "react-icons/io";
import Nexit from "../../assets/images/nexit.png";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-50">
      <div className="mb-8 ml-36 w-45 max-w-[90%]">
        <img
          src={Nexit}
          alt="Nexit Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="bg-white p-6 rounded-lg relative w-[90%] max-w-md shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <IoMdClose size={20} className="cursor-pointer" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
