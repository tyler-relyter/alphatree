import React from "react";


const Contact = () => {
    return (
        <div id="contact">
            <div className="container-fluid bg-light">
                <h2 className="display-2 text-center p-3 m-3">Need A Quote?</h2>
                <form action="mailto:" method="post" encType="text/plain">
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone:</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <h1 className="display-1 text-center p-3 m-3">Contact Us</h1>
                <p className="text-center p-3 m-3">Please call us at <strong>555-555-5555</strong> or email us at</p>
            </div>
        </div>
    )
}


export default Contact;