import React from 'react';
import '../../App.css';
import './About.css'

function About() {
  return (
    <>

    <body className='about-body'>
        <div class="container">
            <div class="image-box">
                <img src="images/bagels.png" alt="Fresh Montreal Bagels" width="100%"></img>
            </div>
            <div class="text-box">
                <h2>Our Story</h2>
                <p style={{marginBottom: 20, wordSpacing: "1px", lineHeight: "1.4"}}>Welcome to the Mount Royal Bagel Factory, where the enticing aroma of freshly baked Montreal-style bagels welcomes you to Kelowna, BC. Our story began with a love for the traditional taste of Montreal bagels, driving our commitment to bring that iconic flavor to the stunning Okanagan Valley.</p>

                <h2>What Makes Us Special</h2>
                <p style={{marginBottom: 20, wordSpacing: "1px", lineHeight: "1.4"}}>At Mount Royal Bagel Factory, excellence is baked into every bagel. Each day, our skilled bakers meticulously follow the time-honored Montreal tradition, hand-rolling and crafting every bagel to perfection. It's this artisanal touch that gives our bagels their distinct qualities – a crispy exterior, a soft and chewy interior, and a symphony of flavors. Pair our exceptional bagel sandwiches with a wide selection of gourmet coffees, creating a delightful harmony of taste and aroma.</p>

                <h2>Visit Us</h2>
                <p style={{marginBottom: 20, wordSpacing: "1px", lineHeight: "1.4"}}>Step into our store and experience more than just delicious bagels; it's an immersion into a tradition that's been cherished for generations. The moment you walk through our doors, the warm, fragrant embrace of our freshly baked bagels will captivate your senses. Whether you're a seasoned bagel connoisseur or venturing into the world of Montreal-style bagels for the first time, our promise remains the same – an unforgettable culinary journey. Explore our menu to discover a diverse array of tantalizing options that will satisfy your cravings.</p>
                <h2>Contact Us</h2>
                <p style={{marginBottom:20, wordSpacing: "1px", lineHeight: "1.4"}}>Your satisfaction is our priority. Should you have any inquiries, feedback, or simply want to share your bagel experience with us, please don't hesitate to reach out. We're dedicated to serving you the finest Montreal-style bagels in Kelowna and are eager to ensure your experience with us exceeds expectations.</p>
                <a href="/contact" class="contact-button">Contact Us</a>
            </div>
            <div class="clear"></div>
            
        </div>
    </body>
    </>
  );
}

export default About;