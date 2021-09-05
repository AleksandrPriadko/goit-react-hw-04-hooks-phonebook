import styles from "./Style.module.scss";
import PropTypes from "prop-types";

export default function FindContacts({ filter, handleFilter }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="query"
        value={filter}
        required
        onInput={handleFilter}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
}

FindContacts.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
