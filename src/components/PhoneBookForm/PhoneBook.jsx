import { v4 as uuidv4 } from "uuid";
import PhoneBooksForm from "./PhoneBooksForm";
import { useState } from "react";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function PhoneBook({ onSubmit }) {
  const [state, setState] = useState(INITIAL_STATE);

  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      number: Number(number),
    };
    onSubmit(newContact);
    setState(INITIAL_STATE);
  };

  return (
    <PhoneBooksForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
}
