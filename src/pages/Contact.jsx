import "../Contact.css";

function Contact() {
  return (
    <>
    {/* My information */}
    <section id="contact" className="contact">
      <img src="https://i.pinimg.com/474x/69/32/1f/69321f22a90b3e77a7ccc0f125990f48.jpg" alt="Contact" style={{ width: "100%", height: "auto" }} />
      <div className="contact-content">
        <h2>Contact Info</h2>
        <div className="contact-details">
          <h1>Email: <span>manav7421@gmailcom</span></h1>
          <h1>Mobile.no: <span>9213818205</span></h1>
        </div>
      </div>
       {/* Detail Form */}
    <form noValidate action="" className="User-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" id="email" placeholder="Enter Your mail-id" />
      </div>
      <div className="form-group">
        <label type="message">Message</label>
        <textarea name="message" id="message" placeholder="Your message" rows="5"></textarea>
      </div>
      <button type="submit" className="submit-btn">Send Message</button>
    </form>
    </section>

   
    </>
  );
}

export default Contact;
