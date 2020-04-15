import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <ContactForm/>
                </div>
            </div>
        );

    }
}

export default ContactContent;