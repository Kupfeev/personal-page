import { useContext, useRef, useState } from "react";
import { LangContext } from "../../lang/context";

import emailjs from '@emailjs/browser';

import { useForm } from "../../hooks";
import { contactText } from "../../lang/data";


const formData = {
    fromName: '',
    fromEmail: '',
    message: '',
  };
  
const formValidations = {
    fromName: [ (value) => value.length >= 1],
    fromEmail: [ (value) => value.includes('@')],
    message: [ (value) => value.length >= 10],
};

export const ContactForm = () => {

    const { language } = useContext( LangContext );
    const { labelName, helperName,
            labelEmail, helperEmail,
            labelMsg, helperMsg,
            buttonText,
            successTitle, successDesc } = contactText[language];

    const form = useRef();
    const { 
        formState, fromName, fromEmail, message, onInputChange,
        isFormValid, fromNameValid, fromEmailValid, messageValid
        } = useForm( formData, formValidations );

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formListener, setFormListener] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormListener(true);
        setFormSubmitted(true);
        if ( !isFormValid ) return;
        if ( isFormValid && formListener ) {
            emailjs.sendForm('service_xbz06ln', 'template_ql4ga37', form.current, 'yWPsLI5DUoSOb8wgI')
                .then( (result) => {
                    setFormSuccess("true");
                }, (error) => {
                    console.log(error.text);
                });
        }
        setFormListener(false);
    };

  return (
    <>
        <form className="contact-form mb-5" onSubmit={ onSubmit } ref={ form }>
            <div className="row mb-3">
                <label htmlFor="from" className="form-label">{ labelName }</label>
                <input 
                    type="text" 
                    name="fromName"
                    id="from" 
                    className="form-control fw-60" 
                    value={ fromName }
                    onChange={ onInputChange }
                />
                { (formSubmitted && !fromNameValid) 
                 && (
                    <div 
                        id="emailHelp" 
                        className="form-text"
                    >{ helperName }</div>  
                )}
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="form-label">{ labelEmail }</label>
                <input 
                    type="email" 
                    name="fromEmail" 
                    id="email" 
                    className="form-control fw-60"
                    value={ fromEmail }
                    onChange={ onInputChange }
                />
                { (formSubmitted && !fromEmailValid) 
                 && (
                    <div 
                        id="emailHelp" 
                        className="form-text"
                    >{ helperEmail }</div>   
                )}
            </div>
            <div className="row mb-3">
                <label htmlFor="message" className="form-label">{ labelMsg }</label>
                <textarea 
                    name="message" 
                    id="message" 
                    className="form-control" 
                    cols="30" 
                    rows="10" 
                    value={ message }
                    onChange={ onInputChange }
                />
                { (formSubmitted && !messageValid) 
                 && (
                    <div 
                        id="emailHelp" 
                        className="form-text"
                    >{ helperMsg }</div>
                )}
            </div>
            <div className="row">
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >{ buttonText }</button>
            </div>
        {
            formSuccess 
             && (
                <div className="success-message d-flex flex-column text-center">
                    <div className="success-title">{ successTitle }</div>
                    <div className="success-desc">{ successDesc }</div>
                </div>
             )
        }
        </form>
    </>
  )
}
