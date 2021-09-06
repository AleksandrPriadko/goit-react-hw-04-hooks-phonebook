import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContactForm from "./components/PhoneBookForm";
import Contacts from "./components/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contact = localStorage.getItem("contact");
    const contactsParsed = JSON.parse(contact);

    if (contactsParsed) {
      setContacts(contactsParsed);
    }
  }, []);

  useEffect(() => {
    if (!contacts.length) {
      localStorage.removeItem("contact");
      return;
    }

    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (data) => {
    const { name, number } = data;

    const newContact = {
      id: uuidv4(),
      name: name,
      number: Number(number),
    };
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      setContacts((prevState) => [...prevState, newContact]);
    }
  };

  const changeFilter = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const visebleContacts = contacts.filter(({ name, number }) => {
    return name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <div className="container">
        <AddContactForm onSubmit={addNewContact} />
        <Contacts
          contacts={visebleContacts}
          filter={filter}
          onChange={changeFilter}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}
