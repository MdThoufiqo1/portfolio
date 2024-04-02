import React, {useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs
        .sendForm(
          "service_b81861h",
          "template_abwhd7n",
          form.current,
          "F5EdaVutfowwLItV_"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };  
        return (
            <>
               <main className="contact" id="contact_page">
                    <section className="flexed">                    
                        <div>
                            <h1>Contact me</h1>
                            <p>Name: Mohamed Thoufiq</p>
                            <p>places:chennai </p>
                            <p>Phone: 9751116769</p>
                            <p>Gmail: thoufiq07.t@email.com</p>
                                                 
                        </div>
                        <div className="form">
                            <p>Use a valid email address, So I can reply back.</p>
                            <form ref={form} onSubmit={sendEmail}>
                              <input type="text" name="user_name" />
                              <input type="email" name="user_email" />
                              <textarea name="message" />
                              <input type="submit" value="Send" />
                           </form>
                        </div> 
                  </section>
                </main>
            </>
        )
    }


export default Contact;