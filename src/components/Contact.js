import React from "react";
import QuoteForm from "./QuoteForm";


const Contact = () => {
    return (
        <div id="contact">
            <div className="container bg-light border border-dark border-3 justify-content-center text-center">
                <h2 className="display-2 text-center p-3 m-3">Need A Quote?</h2>
                <a href="mailto: hytyler23@gmail.com" className="btn btn-primary btn-lg">Email Us</a>
                <hr/>
                <p className="text-center p-3 m-3 fs-3">Please call us at <a href="tel:+19105208878"><strong>+1-910-520-8878</strong></a></p>
                <p className="text-center p-3 m-3 fs-3">Or <a href="tel:+19106028081"><strong>+1-910-602-8081</strong></a></p>
            </div>
            <QuoteForm />
        </div>
    )
}


export default Contact;