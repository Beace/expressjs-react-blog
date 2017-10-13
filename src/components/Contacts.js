import React from 'react';

const Contacts = () => (
  <div>
    <header
      className="intro-header"
      style={{ backgroundImage: "url('images/contact-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <div className="page-heading">
              <h1>Contact Me</h1>
              <hr className="small" />
              <span className="subheading">
                Have questions? I have answers (maybe).
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <p>
            Want to get in touch with me? Fill out the form below to send me a
            message and I will try to get back to you within 24 hours!
          </p>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  required
                  data-validation-required-message="Please enter your name."
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="name"
                  className="form-control"
                  placeholder="Email Address"
                  id="email"
                  required
                  data-validation-required-message="Please enter your email address."
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label htmlFor="tel">Phone Number</label>
                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  id="phone"
                  required
                  data-validation-required-message="Please enter your phone number."
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  required
                  data-validation-required-message="Please enter a message."
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />
            <div id="success" />
            <div className="row">
              <div className="form-group col-xs-12">
                <button type="submit" className="btn btn-default">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
