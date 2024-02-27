import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    state: "",
    city: "",
    postalcode: "",
    streetaddress: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">React Form</h1>
      <div className="w-5/12 mx-auto mt-5 p-10 bg-white text-center  border border-[#b1b0b0] transition-all duration-700 hover:shadow-2xl rounded-lg">
        <form onSubmit={submitHanlder} className="flex flex-col gap-4">
          <div className="flex flex-col text-start">
            <label htmlFor="firstname" className="font-semibold">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={changeHandler}
              placeholder="Enter first name"
              className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="lastname" className="font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={changeHandler}
              placeholder="Enter last name"
              className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="email" className="font-semibold">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="abc@gmail.com"
              className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex justify-between gap-3 text-start">
            <div>
              <label htmlFor="state" className="font-semibold cursor-pointer">
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={changeHandler}
                className="w-[100%] border cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              >
                <option value="Select">Select</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Rajisthan">Rajisthan</option>
                <option value="Goa">Goa</option>
                <option value="Banglore">Banglore</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
            <div>
              <label htmlFor="city" className="font-semibold">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={changeHandler}
                placeholder="Enter city name"
                className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="postalcode" className="font-semibold">
                Postal Code:
              </label>
              <input
                type="text"
                id="postalcode"
                name="postalcode"
                value={formData.postalcode}
                onChange={changeHandler}
                placeholder="Enter postal code"
                className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="streetaddress" className="font-semibold">
              Street Address:
            </label>
            <input
              type="text"
              id="streetaddress"
              name="streetaddress"
              value={formData.streetaddress}
              onChange={changeHandler}
              placeholder="Enter your street address"
              className="w-[100%] border px-2 cursor-pointer border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label className="font-semibold">By Email: </label>

            <label htmlFor="comments" className="font-semibold">
              Comments
            </label>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="comments"
                value={formData.comments}
                onChange={changeHandler}
                className="border border-black cursor-pointer hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p id="comments">
                Get notified when someones posts a comment on a posting
              </p>
            </div>

            <label htmlFor="candidate" className="font-semibold">
              Candidate
            </label>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="candidate"
                value={formData.candidate}
                onChange={changeHandler}
                className="border border-black cursor-pointer hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p id="candidate">
                Get notified when someones posts a comment on a posting
              </p>
            </div>

            <label htmlFor="offers" className="font-semibold">
              Offers
            </label>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="offers"
                value={formData.offers}
                onChange={changeHandler}
                className="border border-black cursor-pointer hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p id="offers">
                Get notified when someones posts a comment on a posting
              </p>
            </div>
          </div>

          <div className="flex flex-col text-start">
            <label className="font-semibold">Push Notification: </label>

            <label className="font-semibold">These are direct on phone</label>
            <div className="flex gap-2">
              <input
                type="radio"
                id="everything"
                name="pushNotification"
                value="Everything"
                onChange={changeHandler}
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="everything" className="cursor-pointer">
                Everything
              </label>

              <input
                type="radio"
                id="sameasemail"
                name="pushNotification"
                value="Same as Email"
                onChange={changeHandler}
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="sameasemail" className="cursor-pointer">
                Same as Email
              </label>

              <input
                type="radio"
                id="pushnotification"
                name="pushNotification"
                value="No Push Notification"
                onChange={changeHandler}
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="pushnotification" className="cursor-pointer">
                No Push Notification
              </label>
            </div>
          </div>

          <div>
            <button className="p-1 px-5 rounded-lg hover:bg-[#add9f3] cursor-pointer border border-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
