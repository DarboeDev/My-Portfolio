import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./ContactButtons.scss";

const ContactButtons = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/2207595999`, "_blank", "noopener");
  };

  const handleEmail = () => {
    window.open(`mailto:darboedev@gmail.com`, "_blank", "noopener");
  };

  return (
    <div className="app__contact-buttons">
      <button
        onClick={handleWhatsApp}
        className="contact-button whatsapp"
        title="Chat on WhatsApp"
      >
        <BsWhatsapp />
        <span className="tooltip">+220 7595999</span>
      </button>
      <button
        onClick={handleEmail}
        className="contact-button email"
        title="Send Email"
      >
        <MdEmail />
        <span className="tooltip">darboedev@gmail.com</span>
      </button>
    </div>
  );
};

export default ContactButtons;
