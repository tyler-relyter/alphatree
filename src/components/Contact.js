import React from "react";


const Contact = () => {
    return (
        <div id="contact">
            <div className="container-fluid bg-light justify-content-center text-center">
                <h2 className="display-2 text-center p-3 m-3">Need A Quote?</h2>
                <a href="mailto: hytyler23@gmail.com" className="btn btn-primary btn-lg">Email Us</a>
                <hr/>
                <p className="text-center p-3 m-3 fs-3">Please call us at <strong>555-555-5555</strong></p>
            </div>
        </div>
    )
}


export default Contact;