import "./App.css";
import React, { useEffect, useState } from "react";
import UserData from "./Components/UserData";
// import AddandUpdateDetails from "./Components/AddandUpdateDetails";
// import useDisclouse from "./Components/useDisclouse";
import Modal from "./Components/Modal";
import AddandUpdateDetails from "./Components/AddandUpdateDetails";
const API = "https://todearhemant.pythonanywhere.com/patient/api/patients/";

const App = () => {
  const [users, setUsers] = useState([]);
  // const { isOpen, onOpen, onClose } = useDisclouse();

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Get Data
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error("Error Aayi hai" + e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <h1>React Table</h1>
      <h2>(GET)(POST)(PUT)(DELETE)</h2>
      <table>
        <thead>
          <tr>
            <th className="min-w-40">Id</th>
            <th>Name</th>
            {/* <th>Email</th> */}
            <th>Age</th>
            <th>Gender</th>
            {/* <th>Address</th> */}
            <div className="min-w-[15rem] p-6 leading-[1.7]">Operation</div>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} API={API} callparent={() => fetchUsers()} />
        </tbody>
      </table>
      <button onClick={onOpen}>ADD DETAILS</button>

      <AddandUpdateDetails isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
