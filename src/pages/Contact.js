import React from 'react';
import '../styles/commons.css';
import '../styles/contact.css';

const Contact = () => (
  <div id="form_container">
    <div className="text_form">
      <div id="header" className="d-flex flex-row">
        <h1 id="titleContacto" className="mx-auto">¡Catarsis... aquí!:</h1>
      </div>
    </div>
    <form id="form_section" className="d-flex flex-column" action="https://formspree.io/f/mwkjoewd" method="post">
      <div id="name_container" className="d-flex">
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
      <div id="message_container" className="d-flex">
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
