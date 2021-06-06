/**
 * Main component to render whole app
 */
import React, { useState, useEffect } from "react";
import { v4 } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./header/Header";
import AddContact from "./contact/AddContact";
import ContactList from "./contact/ContactList";
import ContactDetails from "./contact/ContactDetails";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  // Use state hook for setting state of contacts
  const [contacts, setContants] = useState([])

  /**
   * This function handles data passed from form
   * @param {object} contact 
   */
  const addContactHandler = (contact) => {
    console.log('U APPu ', contact);

    setContants([...contacts, { id: v4(), ...contact }]);
  }

  /**
   * This function removes contact from list and create new copy of
   * contact list withut deleted one
   * @param {number} id 
   * @returns 
   */
  const removeContactHandler = (id) => {
    const newContatList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContants(newContatList);
  }

  /**
   * Here we get data from local storage
   */
  useEffect(() => {
    let retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('Local storage get: ', retriveContacts)
    if (retriveContacts) { setContants(retriveContacts); }

  }, []);

  /**
   * Here we set data to local storage
   */
  useEffect(() => {
    console.log('Set items ', contacts)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />

        <Switch>

          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler} />)}
          />

          <Route
            path="/add"
            exact
            render={(props) =>
              <AddContact
                {...props}
                addContactHandler={addContactHandler} />}
          />

          <Route path="/contact/:id" component={ContactDetails}/>

        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
