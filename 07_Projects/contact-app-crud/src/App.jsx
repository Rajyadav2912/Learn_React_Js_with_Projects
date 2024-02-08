import { NavBar } from "./Components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

import React, { useEffect, useState } from "react";
import ContactCard from "./Components/ContactCard";
import Model from "./Components/Model";
import AddandUpdateContact from "./Components/AddandUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact-app-crud");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(contactLists);
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <NavBar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-2 text-3xl text-white " />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white  bg-transparent pl-11 text-white"
            />
          </div>
          <div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="text-4xl cursor-pointer text-white"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      <AddandUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
