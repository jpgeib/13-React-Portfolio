import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactContent.css';

class ContactContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="col-sm-3" id="contact-heading">
                        <h1>Contact</h1>
                    </div>
                </div>

                <div className="container" id="contact-container">
                    <ContactForm/>
                </div>
            </div>
        );

    }
}

export default ContactContent;