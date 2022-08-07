import { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import styles from './Form.module.css';

const Form = ({ handleSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmitRen = e => {
    e.preventDefault();
    const id = nanoid();
    const check = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (!check) {
      handleSubmit({ id, name, number });
      setName('');
      setNumber('');
    } else {
      alert('Error', name + 'is already in contacts', 'Okay');
    }
  };
  return (
    <form onSubmit={handleSubmitRen} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">add contact</button>
    </form>
  );
};
export default Form;
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

// const App = () => {
//   const [contacts, setContacts] = useState(
//     () => JSON.parse(localStorage.getItem('contacts')) ?? []
//   );
//   const [filter, setFilter] = useState('');
//   const firstStartRef = useRef(false);

//   useEffect(() => {
//     if (firstStartRef.current) {
//       const data = JSON.stringify(contacts);
//       localStorage.setItem('contacts', data);
//     }
//     firstStartRef.current = true;
//   }, [contacts]);

//   const handleSubmitForm = obj => {
//     setContacts(prev => [...prev, obj]);
//   };

//   const handleChangeInput = e => {
//     setFilter(e.target.value);
//   };

//   const handleDeleteContacts = id => {
//     setContacts(contacts.filter(el => el.id !== id));
//   };

//   const filterList = useMemo(
//     () =>
//       contacts.filter(el =>
//         el.name.toLowerCase().includes(filter.toLocaleLowerCase())
//       ),
//     [filter, contacts]
//   );

//   return (
//     <div className={s.wrap}>
//       <div className={s.phonebook}>
//         <h1 className={s.title}>Phonebook</h1>
//         <ContactForm contacts={contacts} handleSubmitForm={handleSubmitForm} />
//         <Filter
//           title="Find contacts by name"
//           value={filter}
//           handleChangeInput={handleChangeInput}
//         />
//       </div>

//       <div className={s.contacts}>
//         <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
//         <ContactList
//           contacts={filterList}
//           handleDeleteContacts={handleDeleteContacts}
//         />
//       </div>
//     </div>
//   );
// };
