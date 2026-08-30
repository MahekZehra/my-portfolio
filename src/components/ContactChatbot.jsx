import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ContactChatbot.css";

const services = [
  "Website Design & Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Content",
  "Social Media Management",
  "SEO",
  "Other / General Inquiry",
];

const EMAIL = "mahekinzamam1992@gmail.com";
const WHATSAPP = "923353149929";

const ContactChatbot = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Keep the modal tactile and accessible: Escape closes it and the page
  // behind the neomorphic panel never scrolls while the chat is open.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const handleClose = () => {
    setSelectedService(null);
    onClose?.();
  };

  const emailSubject = selectedService
    ? `Project Inquiry - ${selectedService}`
    : "Project Inquiry - Mahek Zehra";

  const emailBody = selectedService
    ? `Hi Mahek,

I am interested in your ${selectedService} service.

I would love to discuss my project with you.

Thank you.`
    : `Hi Mahek,

I would love to discuss a project with you.

Thank you.`;

  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappMessage = selectedService
    ? `Hi Mahek! I am interested in your ${selectedService} service. I would love to discuss my project with you.`
    : `Hi Mahek! I would love to discuss a project with you.`;

  const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const chatbotContent = (
    <div
      className="mz-chatbot-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className="mz-chatbot-shell"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Mahek Zehra"
        onMouseDown={(e) => e.stopPropagation()}
      >

        {/* DECORATIVE STAR */}
        <div className="mz-chatbot-star">
          ✦
        </div>


        {/* HEADER */}
        <div className="mz-chatbot-header">

          <div className="mz-chatbot-brand">

            <div className="mz-chatbot-avatar">
              MZ
            </div>

            <div className="mz-chatbot-header-text">

              <h3>
                Let’s connect
                <span> ✦</span>
              </h3>

              <small>
                Mahek Zehra
              </small>

            </div>

          </div>


          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="mz-chatbot-close"
            onClick={handleClose}
            aria-label="Close chatbot"
          >
            ×
          </button>

        </div>


        {/* SCROLLABLE BODY */}
        <div className="mz-chatbot-body">

          {!selectedService ? (

            <>
              {/* INTRO MESSAGE */}

              <div className="mz-chatbot-message">

                <span className="mz-chatbot-label">
                  HELLO THERE ✨
                </span>

                <h4>
                  Let’s make something
                  <span>
                    beautiful together.
                  </span>
                </h4>

                <p>
                  Hi! I’m Mahek — a Digital Marketer & Creative
                  Designer. I help businesses build a strong digital
                  presence through creative, strategic, and
                  result-focused solutions.
                </p>

                <p>
                  Have a project in mind? I’d love to hear about it.
                </p>

              </div>


              {/* QUESTION */}

              <div className="mz-chatbot-question">
                How can I help you today?
              </div>


              {/* SERVICES */}

              <div className="mz-chatbot-options">

                {services.map((service) => (

                  <button
                    key={service}
                    type="button"
                    className="mz-chatbot-option"
                    onClick={() => handleServiceSelect(service)}
                  >

                    <span className="mz-chatbot-option-text">
                      {service}
                    </span>

                    <span className="mz-chatbot-option-arrow">
                      ↗
                    </span>

                  </button>

                ))}

              </div>
            </>

          ) : (

            <>
              {/* SELECTED SERVICE */}

              <div className="mz-chatbot-message">

                <span className="mz-chatbot-label">
                  PERFECT CHOICE ✨
                </span>

                <h4>
                  Let’s talk about
                  <span>
                    your project.
                  </span>
                </h4>

                <p>
                  Great choice! I’d love to help you with{" "}
                  <strong>{selectedService}</strong>.
                </p>

                <p>
                  Choose your favourite way to get in touch with me
                  and we’ll take it from there.
                </p>

              </div>


              {/* CONTACT QUESTION */}

              <div className="mz-chatbot-question">
                How would you like to connect?
              </div>


              {/* CONTACT OPTIONS */}

              <div className="mz-chatbot-options">

                {/* EMAIL */}

                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mahekinzamam1992@gmail.com&su=Project%20Inquiry%20-%20Mahek%20Zehra&body=Hi%20Mahek%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThank%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="mz-chatbot-contact"
>

                  <span className="mz-chatbot-contact-icon">
                    ✉
                  </span>

                  <span className="mz-chatbot-contact-content">

                    <strong>
                      Contact me via Email
                    </strong>

                    <small>
                      {EMAIL}
                    </small>

                  </span>

                  <span className="mz-chatbot-option-arrow">
                    ↗
                  </span>

                </a>


                {/* WHATSAPP */}

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mz-chatbot-contact"
                >

                  <span className="mz-chatbot-contact-icon">
                    ☏
                  </span>

                  <span className="mz-chatbot-contact-content">

                    <strong>
                      Contact me via WhatsApp
                    </strong>

                    <small>
                      +92 335 3149929
                    </small>

                  </span>

                  <span className="mz-chatbot-option-arrow">
                    ↗
                  </span>

                </a>

              </div>


              {/* BACK BUTTON */}

              <button
                type="button"
                className="mz-chatbot-back"
                onClick={handleBack}
              >
                ← Choose another service
              </button>

            </>

          )}


          {/* FOOTER NOTE */}

          <div className="mz-chatbot-footer-note">
            Ideas, projects & possibilities — let’s talk ♡
          </div>

        </div>

      </div>
    </div>
  );

  /*
    Portal chatbot directly to document.body.
    This prevents portfolio layout / stacking / overflow
    styles from interfering with the chatbot.
  */

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(chatbotContent, document.body);
};

export default ContactChatbot;