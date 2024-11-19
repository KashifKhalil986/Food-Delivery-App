import React from 'react';

const removedPrevent=(e)=>{
e.preventDefault();
alert("Message Send Successfuly")

}

const Contact = () => {
  return (
    <div 
      className="bg-light" 
      style={{
        width: "100vw", // Full viewport width
        margin: 0, // Remove any margin
        paddingTop: "5rem", // Top spacing
        paddingBottom: "5rem", // Bottom spacing
      }}
    >
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <h1 className="text-danger">Contact Us</h1>
            <p className="text-black">
              We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-danger">Get in Touch</h3>
            <form onSubmit={removedPrevent}>
              <div className="mb-3">
                <label htmlFor="formName" className="form-label text-black">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formName"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formEmail" className="form-label text-black">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="formEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formMessage" className="form-label text-black">Message</label>
                <textarea
                  className="form-control"
                  id="formMessage"
                  rows="1"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger mt-3" >Submit</button>
            </form>
          </div>

          <div className="col-md-6 text-black mt-2">
            <h3 className='text-danger'>Contact Details</h3>
            <p className='mt-4'><strong>Email:</strong> kashifkhalil720@gmail.com</p>
            <p><strong>Phone:</strong> +923495262735</p>
            <p><strong>Address:</strong> 123 Hayatabad, Peshawar, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
