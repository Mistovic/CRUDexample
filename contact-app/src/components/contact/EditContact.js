/**
 * 
 * AddContact.js 
 * Parrent component: App.js
 * 
 * component accepts addContactHandler() function 
 * to handle data from form to App.js parrent component 
 *
 */
import React, { Component } from 'react';

class EditContact extends Component {

    constructor(props) {
        super(props);

        const { id, name, email } = props.location.state.contact;

        this.state = {
            id,
            name,
            email,
        }
    }

    update = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert('Fill data');
            return;
        }

        // We use addContactHandler() which is passed from App.js
        // To create new contact out of form data
        this.props.updateContactHandler(this.state);

        // We want to remove values from input fields for next use
        this.setState({ name: "", email: "" });

        // We want to return to ContactList.js when submit form
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="ui main" style={{paddingTop: "100px"}}>
                <div className="ui container">
                    <h2>Edit Contact</h2>

                    <form action="" className="ui form" onSubmit={this.update}>
                        <div className="field">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>

                        <div className="field">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>

                        <button className="ui button blue">Update</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default EditContact;