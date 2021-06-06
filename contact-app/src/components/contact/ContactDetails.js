/**
 * 
 * ContacrDetails.js component
 * Parrent component: ContactList.js
 * 
 * Here we pass props to display them on page.
 * 
 */
import React from 'react';
import user from "../../images/male-default-placeholder-avatar-profile-600w-387516193.webp";

import { Link } from "react-router-dom";

const ContactDetails = (props) => {
    console.log('Details', props.location.state);

    const {name, email } = props.location.state.contact;

    return (
        <div className="main">
            <div className="ui card center">
                <div className="ui image">
                    <img src={user} alt="User" />
                </div>

                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
            </div>

            <div className="center-div">
                <Link to='/'><button className="ui button blue center">Back to list</button></Link>
            </div>
        </div>
    )
}

export default ContactDetails;