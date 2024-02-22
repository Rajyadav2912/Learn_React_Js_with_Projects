import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* <div
            onClick={onClose}
            className="absolute top-0 z-40 h-[200vh] w-screen backdrop-blur"
          />
          <div className="relative top-[-70rem] z-50 m-auto min-h-[450px] max-w-[35%] bg-white p-10 text-black">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-5xl" />
            </div>
            {children}
          </div> */}

          {/* {children} */}
          <div className="absolute top-0 z-40 grid place-items-end w-screen h-[310vh] backdrop-blur text-black text-3xl">
            <div className="relative z-50 m-auto top-[35%] min-h-[390px] max-w-[35%] bg-white p-10 flex flex-col gap-5 xl:min-w-[30%] lg:min-w-[40%] md:min-w-[50%] sm:min-w-[60%]">
              <div className="flex justify-end p-3">
                <AiOutlineClose onClick={onClose} className="text-5xl" />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
