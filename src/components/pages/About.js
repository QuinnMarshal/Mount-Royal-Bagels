import React from 'react';
import '../../App.css';
import './About.css'

function About() {
  return (
    <>

    <body className='about-body'>
        <div class="container">
            <div class="image-box">
                <img src="images/bagelimage.png" alt="Fresh Montreal Bagels" width="100%"></img>
                </div>
            <div class="text-box">
                <h2>Our Story</h2>
                <p style={{marginBottom: 20}}>Welcome to the Mount Royal Bagel Factory, your destination for the finest Montreal style bagels in the heart of Kelowna, BC. Our journey started with a passion for the authentic taste of Montreal bagels, and a commitment to bringing that tradition to the beautiful Okanagan Valley.</p>

                <h2>What Makes Us Special</h2>
                <p style={{marginBottom: 20}}>At Mount Royal Bagel Factory, we take pride in making our bagels fresh daily, right here in our store. Our team of skilled bakers follows the time-honored Montreal tradition, hand-rolling each bagel to perfection. The result is a bagel that's crispy on the outside, soft and chewy on the inside, and bursting with flavor. Don't forget about our wide variety of delicious coffees that pair perfectly with one of our mouthwatering bagel sandwiches.</p>

                <h2>Visit Us</h2>
                <p style={{marginBottom: 20}}>We invite you to visit our store, where the aroma of freshly baked bagels will greet you at the door. Whether you're a long-time bagel enthusiast or trying Montreal style bagels for the first time, we promise an unforgettable experience. Check out our menu!</p>

                <h2>Contact Us</h2>
                <p style={{marginBottom:20}}>If you have any questions or feedback, don't hesitate to get in touch. We're here to serve you with the best Montreal style bagels in Kelowna.</p>
                <a href="/contact" class="contact-button">Contact Us</a>
            </div>
            <div class="clear"></div>
            
        </div>
    </body>
    </>
  );
}

export default About;