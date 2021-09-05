import styles from "./Style.module.scss";
import PropTypes from "prop-types";

export default function ContactsList({ contacts, deleteContact }) {
  console.log(contacts);
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contact}>
            <span>{name}</span>
            <span>{number}</span>
            <button className={styles.button} onClick={() => deleteContact(id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
