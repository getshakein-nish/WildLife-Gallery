import React from 'react'

const Contact = () => {
  return (
<div className='contact'>
<div className="cont">
<h2 className="common-heading">Submit your Feedback here</h2>
  <div className="contact-form">
    <form
      action="https://formspree.io/f/xjvdjabp"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        name="username"
        placeholder="username"
        autoComplete="off"
        required
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
      />

      <textarea
        name="message"
        cols="30"
        rows="6"
        autoComplete="off"
        required></textarea>

      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    </div>
  )
  }

export default Contact
