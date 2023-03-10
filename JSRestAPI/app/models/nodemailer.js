const nodemailer = require('nodemailer');
const nodemailerConfig = require('../config/nodemailer.config.js');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: nodemailerConfig.user,
        pass: nodemailerConfig.pass
    }
});

module.exports = transporter;
