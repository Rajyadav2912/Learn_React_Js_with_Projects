import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import useDisclouse from "../hooks/useDisclouse";
import AddandUpdateContact from "./AddandUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact-app-crud", id));

      // Delete Success Full
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex gap-2">
          <FaRegUserCircle className="text-4xl text-orange" />

          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>

      <AddandUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
