import React from "react";
import Modal from "./Modal";

const AddandUpdateDetails = ({ isOpen, onClose }) => {
  // POST Data

  // const AddDetail = async () => {
  //   try {
  //     console.log("add detail");
  //   } catch (e) {
  //     console.error("error");
  //   }

  // };

  function SubmitHandler() {
    console.log("submit");
  }

  function AddDetail() {
    console.log("add detail");
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form
          action=""
          onSubmit={SubmitHandler}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 text-3xl">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-white border-solid border-[#9f9e9e] border-[1px] rounded-lg py-[0.10rem] px-2 text-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-3xl">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              className="w-full bg-white border-solid border-[#9f9e9e] border-[1px] rounded-lg py-[0.10rem] px-2 text-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 text-3xl">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              className="w-full bg-white border-solid border-[#9f9e9e] border-[1px] rounded-lg py-[0.10rem] px-2 text-2xl"
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <button className="self-end mt-5" onClick={AddDetail}>
            ADD DETAILS
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddandUpdateDetails;
