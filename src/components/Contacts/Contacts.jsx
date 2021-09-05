import PropTypes from "prop-types";
import FindContacts from "./FindContacts";
import ContactsList from "./ContactsList";

export default function Contacts({
  contacts,
  filter,
  onChange,
  deleteContact,
}) {
  return (
    <div>
      <h2>Contacts</h2>
      <FindContacts filter={filter} handleFilter={onChange} />

      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
