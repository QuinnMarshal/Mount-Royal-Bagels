import React from 'react';
import '../../App.css';
import './Contact.css'

function Contact() {
    return (
        <>
            <body>
                <div class="contact-container">

                    <div class="map-section">
                        <h2>Visit Us</h2>
                        <br></br>
                        <iframe title="my map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10283.884271454173!2d-119.4643513!3d49.8805699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cad83cc7b75%3A0x5992cb1462cc0836!2sMount%20Royal%20Bagel%20Factory!5e0!3m2!1sen!2sca!4v1699499001903!5m2!1sen!2sca"
                            width="900"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div class="contact-info">
                        <div class="contact-item">
                            <a href="tel:+12509790091">
                                <p>Call Us</p>
                                <i class="fas fa-phone"></i>
                            </a>
                        </div>
                        <div class="contact-item">
                            <a href="mailto:ppazad@hotmail.com">
                                <p>Email Us</p>
                                <i class="far fa-envelope"></i>
                            </a>
                        </div>
                        <div class="contact-item">
                            <a href="https://www.facebook.com/KMRBF/?view_public_for=1557350977695146" target="_blank" rel='noreferrer'>
                                <p>Find us on Facebook</p>
                                <i class="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Contact;