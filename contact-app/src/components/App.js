import React from "react";
import './App.css';
import Header from "./header/Header";
import AddContact from "./contact/AddContact";
import ContactList from "./contact/ContactList";

function App() {
  return (
    <div className="App">
      <Header/>
      <AddContact/>
    </div>
  );
}

export default App;
