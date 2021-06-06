/**
 * Main component to render whole app
 */
import React, { useState, useEffect } from "react";
import { v4 } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./header/Header";
import AddContact from "./contact/AddContact";
import EditContact from "./contact/EditContact";
import ContactList from "./contact/ContactList";
import ContactDetails from "./contact/ContactDetails";
import api from "../api/contacts";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  // Use state hook for setting state of contacts
  const [contacts, setContants] = useState([])

  /**
   * 
   * HTTP post method;
   * 
   * This one is for creating new contact
   * @param {object} contact 
   */
  const addContactHandler = async (contact) => {
    console.log(contact);

    // Create request header for API parametar
    const request = {
      id: v4(),
      name: contact.name,
      email: contact.email,
      //...contact
    }

    // Await response from API
    const response = await api.post("/contacts", request);
    console.log(response);

    setContants([...contacts, response.data]);
  }

  /**
   * HTTP - put method;
   * 
   * This function Update contact in db.json over API
   * 
   * It also setState;
   * @param {object} contact 
   * @returns {void}
   */
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;

    // Another way top pass data to State
    setContants(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      }));
  }

  /**
   * HTTP - delete method;
   * 
   * This function removes contact from list using filter method, and create new copy of
   * contact list without deleted one for further manipulation;
   *
   * It also setState;
   * @param {number} id 
   * @returns {void}
   */
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContatList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContants(newContatList);
  }

  /**
   * HTTP - get method
   * 
   * AJAX call to retrieve data from API
   */

  const retrieveContacts = async () => {

    const res = await api.get("/contacts");
    console.log(res);
    return res.data;
  }

  // Here we set inital state based on API data (db.json)
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();

      console.log(allContacts)
      if (allContacts) { setContants(allContacts) }
    }

    getAllContacts();

  }, []);

  /**
   * Here we set data to local storage
   */
  useEffect(() => {
    // console.log('Set items ', contacts)
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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

          <Route
            path="/edit"
            exact
            render={(props) =>
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler} />}
          />


          <Route path="/contact/:id" component={ContactDetails} />

        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
