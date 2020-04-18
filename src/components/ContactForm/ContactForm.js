import React from 'react';

import './ContactForm.css';

const ContactForm = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-10">
                    <h1 id="contact-heading">For business, please reach out to me by filling out the following form:</h1>
                </div>
                <div className="col-sm-1">

                </div>
            </div>
            <br />
            <form id="contact-form">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <label className="name-label">Name:</label>
                        <input id="name-bar" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <label className="email-label">Email:</label>
                        <input id="email-bar" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">
                        <label className="descrip-label">Description:</label>
                        <input id="descrip-bar" />
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-5">
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default ContactForm;