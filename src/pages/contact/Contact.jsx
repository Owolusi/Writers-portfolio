import React from 'react';
import{
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaDiscord,
  
} from "react-icons/fa";
import {FiSend} from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact.section'>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Dont be shy!</h3>
          <p className="contact__description">get in touch with me. 
          i am always open to discussing new projects, 
          creative ideas or opportunitiesto be part ofn your vision
          </p>
          <div className='contact__info'>
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>
                  Mail me
                </span>
                <h4 className="info__desc">m.bunmi5@gmail.com</h4>
              </div>    
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>
                  Call me
                </span>
                <h4 className="info__desc">+234 813 854  0190</h4>
              </div>    
            </div>

                  <div className="contact__socials">
                    <a href='https://facebook.com' className='contact__social-link'>
                      <FaFacebookF />
                    </a>

                    <a href='https://twitter.com' className='contact__social-link'>
                      <FaTwitter />
                    </a>

                    <a href='https://Youtube.com' className='contact__social-link'>
                      <FaYoutube />
                    </a>

                    <a href='https://Discord.com' className='contact__social-link'>
                      <FaDiscord />
                    </a>
                    </div>

          </div>
        </div>
        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text"
              placeholder='your Nmae'
              className='form__control' 
              />
            </div>
            <div className="form__input-div">
              <input type="email"
              placeholder='your Email'
              className='form__control' 
              />
            </div>
            
            <div className="form__input-div">
              <input type="text"
              placeholder='your Subject'
              className='form__control' 
              />
            </div>
            
            <div className="form__input-div">
             <textarea className='form__control' 
             placeholder='Your message
             '></textarea>
            </div>



          </div>
          
          <button className="button">Send Message 
            <span className='button__icon contact__button-icon'></span>
            <FiSend/>
            
            </button>
        </form>
      </div>
      </section>

  )
}

export default Contact