import { useState, useEffect, useMemo } from 'react';

import Form from './Form/Form';
import FormList from '../components/FormList/FormList';
import Filter from './Filter/Filter';
import styles from './App.module.css';
import { useRef } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const firstStartRef = useRef(false);

  useEffect(() => {
    if (firstStartRef.current) {
      const data = JSON.stringify(contacts);
      localStorage.setItem('contacts', data);
    }
    firstStartRef.current = true;
  }, [contacts]);

  const handleSubmit = obj => {
    setContacts(prev => [...prev, obj]);
  };
  const handleChange = e => {
    setFilter(e.target.value);
  };
  const handleDeleteContacts = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };
  const filterList = useMemo(
    () =>
      contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLocaleLowerCase())
      ),
    [filter, contacts]
  );
  return (
    <div className={styles.box}>
      <div className={styles.boxPhone}>
        <h1>Phonebook</h1>
        <Form contacts={contacts} handleSubmit={handleSubmit} />

        <Filter
          value={filter}
          title="Find contacts by name"
          handleChange={handleChange}
        />
      </div>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <FormList
          contacts={filterList}
          handleDeleteContacts={handleDeleteContacts}
        />
      </div>
    </div>
  );
};
