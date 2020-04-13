import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
class ContactContent extends Component {
    render () {
       return(
       <Navbar/>
       <div className="container-lg">
        <h1>Contact</h1>
        <div id="master-content-contact">
            <div className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8">
                    <h1 id="contact-main-header">For business, please reach out to me by filling out the following form:</h1>
                </div>
                <div className="col-lg-2">

                </div>  
            </div>
            <div className="row">
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">

                            </div>
                            <div className="col-lg-4">
                                <label className="name-label">Name:</label>
                                    <input id="name-bar">
                            </div>
                            <div className="col-lg-4">

                            </div>
                        </div>
                        <br>
                        <div className="row">
                            <div className="col-lg-4">

                            </div>
                            <div className="col-lg-4">
                                <label className="email-label">Email:</label>    
                                    <input id="email-bar">
                            </div>
                            <div className="col-lg-4">

                            </div>
                        </div>
                        <br>
                        <div className="row">
                            <div className="col-lg-4">

                            </div>
                            <div className="col-lg-4">
                                <label className="descrip-label">Description:</label>    
                                <input id="descrip-bar">
                            </div>   
                                
                        
                            <div className="col-lg-4">

                            </div>
                        </div>
                        <br>
                        <div className="row">
                            <div className="col-lg-4">

                            </div>
                            <div className="col-lg-4">
                                <button id="submit">Submit</button>
                            </div>
                            <div className="col-lg-4">

                            </div>
                     </div>    
                    </div>
                    <div className="col-lg-2 col-xs-4">

                    </div>     
            </div>
        </div>
        <br>
        <div className="row">
            <div className="col-lg-5">

            </div>
            <div className="col-lg-4, text-center">
              <h2>Copyright © 2019</h2>  
            </div>
            <div className="col-lg-2">
                
            </div>
        </div>
    </div> 
       );

    }
}

export default ContactContent;