import React from 'react';

// import 'ContactForm.css';

const ContactForm = props => {
    return (
        <div>
            <form>
                <h1>For business, please reach out to me by filling out the following form:</h1>
                <div>
                    <label className="name-label">Name:</label>
                    <input id="name-bar" />
                </div>
                <div>
                    <label className="email-label">Email:</label>
                    <input id="email-bar" />
                </div>
                <div>
                    <label className="descrip-label">Description:</label>
                    <input id="descrip-bar" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;