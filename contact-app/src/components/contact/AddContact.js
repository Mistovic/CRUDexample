import React from 'react';

class AddContact extends React.Component {

    render() {
        return (
            <div className="ui main">
                <div className="ui container">
                    <h2>Add Contact</h2>
                    <form action="" className="ui form">
                        <div className="field">
                            <label htmlFor="">name</label>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;