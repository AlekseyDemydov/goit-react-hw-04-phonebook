import { Component } from 'react';
import Form from './Form/Form';
import FormList from '../components/FormList/FormList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj }],
    }));
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.boxPhone}>
          <h1>Phonebook</h1>
          <Form
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          />

          <Filter
            title="Find contacts by name"
            handleChange={this.handleChange}
          />
        </div>
        <div className={styles.contacts}>
          <h2>Contacts</h2>
          <FormList
            filter={this.state.filter}
            contacts={this.state.contacts}
            handleDeleteContacts={this.handleDeleteContacts}
          />
        </div>
      </div>
    );
  }
}
