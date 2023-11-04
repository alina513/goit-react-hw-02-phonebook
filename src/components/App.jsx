import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import {Filter} from "./Filter/Filter"
export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }
  


handleSubmit = (event) => {
  event.preventDefault();
  const newContact = {
    name: event.target.elements.name.value,
    number: event.target.elements.number.value,
    id: nanoid()
  };
if(this.state.contacts.some(contact => contact.name === event.target.elements.name.value)) {alert(`${event.target.elements.name.value} is already in contacts`)}
  else {this.setState((prevState) => ({
    name: event.target.elements.name.value,
    number: event.target.elements.number.value,
    contacts: [...prevState.contacts, newContact],
  }));}
  event.target.reset();
};



  updateFilter = newFilter => {
    this.setState ({filter: newFilter})
  }
deletecontact = (contactId) =>{
this.setState(prevState => {
  return {
    contacts: prevState.contacts.filter(item => item.id !== contactId) }
  
})
};
  
  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  );


    return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '20px',
        paddingBottom: '20px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm submit={this.handleSubmit}/>
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} updateFilter={this.updateFilter}/>
      {this.state.contacts.length >0 && <ContactsList contacts={filteredContacts} onDelete={this.deletecontact}/>}
    
    </div>
  );}
};
