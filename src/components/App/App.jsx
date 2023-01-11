import { Component } from "react";
import { ContactsForm } from "../ContactsForm/ContactsForm";
import { nanoid } from 'nanoid';
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactList/ContactList";
import style from './App.module.css';


export class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    };
  

    addContacts =  ({ name, number }) => {
      this.setState (({contacts}) => {

        if ( contacts.find( contactName => contactName.name === name )){
        alert( `${name} is already in contacts`);
        return contacts;
      } else {
        const addNewContact = {
          id: nanoid(),
          name: name,
          number: number,
        };
      return {
          contacts: [...contacts, addNewContact]
      };
      }
    });
  };

    changes = (event) => {
      this.setState({ filter: event.currentTarget.value })
    };

    deleteValue = (id) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
    } 

    filtred = () => {
      const { filter, contacts } = this.state;
      return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

render() {

  return (
    <div  className={style.formBox}>
      <h1>Phonebook</h1>
      <ContactsForm
        onSubmit={this.addContacts} />

      <h2>Contacts</h2>
      <Filter
        value={this.state.filter}
        onChange={this.changes} />

      <ContactsList
        contacts={this.filtred()}
        deleteValue={this.deleteValue}
      />
</div>
  );
}
}


