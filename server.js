const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 4400;

app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
    service: 'gmail', // email provider
    auth: {
        user: 'hytyler23@gmail.com', // email
        pass: 'yrmmjaemccnqgqfn' // email app password
    }
});

app.post('/quote', (req, res) => {
    const quoteData = req.body;
    
    let mailOptions = {
        from: 'hytyler23@gmail.com', // sender address
        to: 'hytyler23@gmail.com', // list of receivers
        subject: 'Quote Request', // Subject line
        text: JSON.stringify(quoteData), // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });

    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});