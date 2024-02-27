import React from "react";

const App = () => {
  return (
    <>
      <div className="w-5/12 mx-auto mt-14 p-10 text-center border border-[#b1b0b0] transition-all duration-700 hover:shadow-2xl rounded-lg">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col text-start">
            <label htmlFor="firstname" className="font-semibold">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="lastname" className="font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="email" className="font-semibold">
              Email Address:
            </label>
            <input
              type="email"
              id="firstname"
              className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex justify-between gap-3 text-start">
            <div>
              <label htmlFor="text" className="font-semibold">
                State:
              </label>
              <select className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300">
                <option value="">Select</option>
                <option value="">Madhya Pradesh</option>
                <option value="">Gujrat</option>
                <option value="">Rajisthan</option>
                <option value="">Goa</option>
                <option value="">Banglore</option>
                <option value="">Uttar Pradesh</option>
              </select>
            </div>
            <div>
              <label htmlFor="firstname" className="font-semibold">
                City:
              </label>
              <input
                type="text"
                id="firstname"
                className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="firstname" className="font-semibold">
                Postal Code:
              </label>
              <input
                type="text"
                id="firstname"
                className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
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
              className="w-[100%] border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-start">
            <label className="font-semibold">By Email: </label>

            <label className="font-semibold">Comments</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p>Get notified when someones posts a comment on a posting</p>
            </div>

            <label className="font-semibold">Candidate</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p>Get notified when someones posts a comment on a posting</p>
            </div>

            <label className="font-semibold">Offers</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex flex-col text-start">
            <label className="font-semibold">Push Notification: </label>

            <label className="font-semibold">These are direct on phone</label>
            <div className="flex gap-2">
              <input
                type="radio"
                id="everything"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="everything">Everything</label>

              <input
                type="radio"
                id="sameasemail"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="sameasemail">Same as Email</label>

              <input
                type="radio"
                id="pushnotification"
                className="border border-black hover:border-[#4ae5ed] rounded-md transition-all duration-300"
              />
              <label htmlFor="pushnotification">No Push Notification</label>
            </div>
          </div>

          <div>
            <button className="p-1 px-5 rounded-lg hover:bg-[#add9f3] border border-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
