import ContactCard from './ContactCard';
import React from "react";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    console.log('List ', props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };


    /**
     * Takes props passed from App.js as array of objects 
     * and passes them to ContactCard.js to display them on screen
     * 
     * @returns {Array}
     */
    const renderContact = props.contacts.map((contact) => {

        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
        )
    });

    return (
        <div className="ui celled list" style={{ paddingTop: "100px" }}>
            <div className="ui flex"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0"
                }}>
                <h3 style={{ marginBottom: "0" }}>Contact list
            </h3>
            <Link to="/add">
                    <button className="button ui blue" style={{ marginLeft: "auto" }}>Add contact</button>
                </Link>
            </div>

            {renderContact}
        </div>
    )
}

export default ContactList;