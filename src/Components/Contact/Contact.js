import React from 'react'
import './Contact.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';



export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d1b512b6-0490-4e2f-8972-9016a89519dc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      }
  return (
    <div id ="Contact" className='contact'>
        <div className='contact-title'>
            <h1>Contact Me</h1>
            <p className='contact-description'>Feel free to reach out to me for any inquiries or collaborations.</p>
        </div>

        <div className='contact-section'>
            <div className="contact-left">
                <h2>Let's talk</h2>
                <p>If you have any questions, feedback, or just want to say hello, don't hesitate to get in touch!</p>

                <div className="contact-details">
                    <FaEnvelope className='icon'/><p>chiranjali89@gmail.com</p>
                </div>

                <div className="contact-details">
                    <FaPhoneAlt className='icon'/><p>+94 767596214 / +94 774969929 </p>
                </div>

                <div className="contact-details">
                    <MdLocationOn className='icon'/><p>"Tashila Niwasa", Wedagedara,Thibbotuwawa,Akuressa</p>
                </div>
            </div>

            <div className="contact-right">
                <form onSubmit={onSubmit} className='contact-form'>
                    <label htmlFor ="">Your Name </label>
                    <input type="text" placeholder='enter your Name' name ='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='enter your Email' name='email' />
                    <label htmlFor="">Write your Message here</label>
                    <textarea name='message' rows={8} placeholder='Enter your message' />
                    <button type='submit' className='contact-submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
