import React from "react";
import { useState } from "react";
import Contact from "../Contact/Contact";
import "./Contacts.css";

interface IContact {
  name: string;
  email: string
}

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  // console.log(contact);
  // console.log(contactList);

  const handleAdd = () => {
    let newContact = [...contactList, contact];
    setContactList(newContact);
    setContact({
      name: "",
      email: "",
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleRemove = (email: string) =>{

    const afterRemoveContactList = contactList.filter ((c) => c.email !== email);

    setContactList(afterRemoveContactList);

  }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="form">
        <input
          value={contact.name}
          onChange={handleOnChange}
          type="text"
          name="name"
          placeholder="Enter Your Work"
        />
        <br />
        <br />
        <input
          value={contact.email}
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="10AM - 11AM"
        />
        <br />
        <br />
        <button onClick={handleAdd} className="btn-contact">
          ADD
        </button>
      </div>

      {contactList.map((con) => (
        <Contact name={con.name} email={con.email} key={con.name} handleRemove={handleRemove}></Contact>
      ))}
    </div>
  );
};

export default Contacts;
