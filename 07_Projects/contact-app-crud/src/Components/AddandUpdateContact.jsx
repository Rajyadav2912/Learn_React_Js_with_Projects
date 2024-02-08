import React from "react";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contact-app-crud");
      await addDoc(contactsRef, contact);
      onClose();

      // Added Success Full
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contact-app-crud", id);
      await updateDoc(contactsRef, contact);
      onClose();

      // Update Success Full
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field className="h-10 border rounded-md px-2" name="name" />
              <div className="text-red font-semibold text-xs">
                {/* for vaildate error message */}
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field className="h-10 border rounded-md px-2" name="email" />
              <div className="text-red font-semibold text-xs">
                {/* for vaildate error message */}
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "Update " : "Add "}
              contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddandUpdateContact;
