import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContactForm from "./components/PhoneBookForm";
import Contacts from "./components/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  console.log(typeof filter);
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
    console.log(data);
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
    //console.log(setFilter((prev) => [...prev, value]));
    setFilter(value);
    // setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const visebleContacts = contacts.filter(({ name, number }) => {
    console.log(typeof number);
    return (
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      number.includes(filter)
    );
  });

  console.log(visebleContacts);
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

// import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import AddContactForm from "./components/PhoneBookForm";
// import Contacts from "./components/Contacts";

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const contactsParsed = JSON.parse(contacts);

//     if (contactsParsed) {
//       this.setState({ contacts: contactsParsed });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (!this.state.contacts.length) {
//       localStorage.removeItem("contacts");
//       return;
//     }

//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }

//   addNewContact = (data) => {
//     const { name, number } = data;
//     const { contacts } = this.state;
//     const newContact = {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     };
//     if (contacts.some((contact) => contact.name === name)) {
//       alert(`${name} is already in contacts!`);
//     } else {
//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   changeFilter = (event) => {
//     const { value } = event.target;
//     console.log(event);
//     this.setState({ filter: value });
//   };

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const visebleContacts = contacts.filter(
//       ({ name, number }) =>
//         name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
//         number.includes(filter)
//     );

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <div className="container">
//           <AddContactForm onSubmit={this.addNewContact} />
//           <Contacts
//             contacts={visebleContacts}
//             filter={filter}
//             onChange={this.changeFilter}
//             deleteContact={this.deleteContact}
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default App;
