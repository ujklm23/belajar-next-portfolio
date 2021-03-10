import { useState } from "react";

import Swal from "sweetalert2/dist/sweetalert2.js";

const Contact = () => {
  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    Swal.fire({
      title: `Thanks ${name}`,
      text: "I Hope can remember Your Name.",
      icon: "info",
      footer: "©2021 | ~ Ridhwan Rs",
      confirmButtonText: "Okay",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      <p>Let's Connected</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <input
            className="name"
            type="text"
            value={name}
            placeholder="Your Name *"
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            className="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            className="message"
            value={message}
            placeholder="Message *"
            required
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
