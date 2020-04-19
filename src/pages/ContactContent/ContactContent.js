import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactContent.css';

class ContactContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container" id="content-container">
                    <ContactForm/>
                </div>
            </div>
        );

    }
}

export default ContactContent;