import React from 'react';
import Arrow from '../Assets/arrowRight.png';

const ContactForm = () => {
  return (
    <div>
        <div className="contact-form-container">
            <hr />
            <div className="contact-information">
                
                <div className="contact-info-text">
                    <h2>CONTACT INFORMATION</h2>
                    <p>Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience.</p>
                </div>
                <div className='contact-info-link'>
                    <div><a href="">+00-000-0000</a></div>
                    <div><a href="">klenz@gmail.com</a></div>
                </div>
                
            </div>
            <hr />
            <div className="send-message">
                <div className="send-message-text">
                    <h2>SEND ME A MESSAGE</h2>
                    <p>Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.</p>
                </div>
                <form action="">
                    <div className="contact-form-input">
                        <div>
                            <label for='firstname'>First Name</label><br />
                            <input type="text" id='firstname' name='firstname' placeholder='FIRST NAME'/>
                        </div>
                        <div>
                        <label for='lastname'>Last Name</label><br />
                        <input type="text" id='lastname' name='lastname' placeholder='LAST NAME'/>
                        </div>
                        <div>
                        <label for='email'>Email</label><br />
                        <input type="email" id='email' name='email' placeholder='EMAIL ADDRESS'/>
                        </div>
                        <div>
                        <label for='phone'>Phone number</label><br />
                        <input type="number" id='phone' name='phone' placeholder='PHONE NUMBER'/>
                        </div>
                    </div>
                    <div>
                    <label for='message'>Your Message</label><br />
                    <input type="text" id='message' name='message' placeholder='MESSAGE'/>
                    </div>
                    <div className='send-button'>
                        <h3>SEND MESSAGE</h3><button className='special-btn'>
                        <img src={Arrow}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;