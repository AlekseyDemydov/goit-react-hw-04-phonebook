import PropTypes from 'prop-types';
import styles from './FormList.module.css';

const FormList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul className={styles.contact}>
      {contacts.map(el => (
        <li key={el.id} className={styles.con}>
          <p className={styles.conName}>
            {el.name}: <span>{el.number}</span>
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => handleDeleteContacts(el.id)}
          >
            del
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FormList;

FormList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDeleteContacts: PropTypes.func.isRequired,
};
