import { useContext } from "react";
import { LangContext } from "../../lang/context";

import { contactText } from "../../lang/data";

import { ContactForm } from "./";


export const Contact = () => {

  const { language } = useContext( LangContext );
  const { h3Text, h2Text } = contactText[language];

  return (
    <section className="contact-container" id="contact">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h3>{ h3Text }</h3>
        <h2>{ h2Text }</h2>
        
        <ContactForm />
        
      </div>
    </section>
  )
}
