import React from 'react';
import '../styles/commons.css';
import '../styles/contact.css';

const Contact = () => (
  <div id="form_container">
    <div id="header" className="flex row">
      <h1 id="titleContacto">Contacto:</h1>
    </div>
    <p id="paragraph" className="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Netus et malesuada fames ac.
      Faucibus purus in massa tempor nec.
    </p>
    <form id="form_section" className="flex column" action="https://formspree.io/f/mwkjoewd" method="post">
      <div id="name_container" className="flex">
        <label id="label_name" htmlFor="name">
          <input
            id="name"
            type="text"
            name="user_name"
            maxLength="30"
            placeholder="Nombre"
            required
          />
        </label>
      </div>
      <div id="message_container" className="flex">
        <label id="message_label" htmlFor="formMessage">
          <textarea
            id="message_area"
            name="text"
            maxLength="500"
            placeholder="Deja tu comentario"
            required
          />
        </label>
      </div>
      <div>
        <button id="summit_button" type="submit">Enviar</button>
      </div>
    </form>
  </div>
);

export default Contact;
