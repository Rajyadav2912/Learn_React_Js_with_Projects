import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid place-items-center w-screen h-screen backdrop-blur ">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4 
          xl:min-w-[30%] lg:min-w-[40%] md:min-w-[50%] sm:min-w-[60%]">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )} 
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
