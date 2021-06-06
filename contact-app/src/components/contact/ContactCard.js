/**
 * 
 * ContactCard.js component
 * Parrent component: ContactList.js
 * 
 * Here we pass props to display them on page.
 * 
 */
import React from 'react';
import user from "../../images/male-default-placeholder-avatar-profile-600w-387516193.webp";

import { Link } from "react-router-dom";

const ContactCard = (props) => {

    //console.log( 'Card', props);
    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <div className="span">{id}</div>
            <img src={user} alt="" className="ui avatar image" />

            <div className="content">

                <Link to={{pathname:`/contact/${id}`, state: {contact: props.contact}}}>
                    <div className="header">{name}</div>

                    <div className="email">{email}</div>
                </Link>

            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}
            ></i>

        </div>
    )
}

export default ContactCard;