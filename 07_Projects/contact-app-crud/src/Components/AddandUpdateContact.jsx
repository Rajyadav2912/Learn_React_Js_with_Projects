import React from "react";
import Model from "./Model";
import { Field, Formik } from "formik";
import ContactCard from "./ContactCard";

const AddandUpdateContact = ({ isOpen, onClose }) => {
  const addContact = (contact) => {
    try {
    } catch (error) {}
  };

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field className="h-10 border rounded-md px-2" name="name" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field className="h-10 border rounded-md px-2" name="email" />
            </div>
            <button className="self-end border bg-orange px-3 py-1.5">
              Add contact
            </button>
          </form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddandUpdateContact;
