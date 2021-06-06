/**
 * 
 * AddContact.js 
 * Parrent component: App.js
 * 
 * component accepts addContactHandler() function 
 * to handle data from form to App.js parrent component 
 *
 */
import React, {Component} from 'react';

class AddContact extends Component {

    state = {
        name: "",
        email: "",
    }
 
    add = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert('Fill data');
            return;
        }

        // We use addContactHandler() which is passed from App.js
        // To create new contact out of form data
        this.props.addContactHandler(this.state);

        // We want to remove values from input fields for next use
        this.setState({name: "", email: "" });

        // We want to return to ContactList.js when submit form
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="ui main">
                <div className="ui container">
                    <h2>Add Contact</h2>

                    <form action="" className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value })} />
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

                        <button className="ui button blue">Send</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default AddContact;