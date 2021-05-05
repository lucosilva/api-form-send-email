const nodemailer = require("nodemailer");

class EmailController {

    constructor(dadosCliente) {
        this.dadosCliente = dadosCliente;

        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_EMAIL,
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.USER_EMAIL, // generated ethereal user
                pass: process.env.PASS_EMAIL, // generated ethereal password
            },
        });
    }


    async Send(template) {
        const emailTo = template.type === 'cliente' ? this.dadosCliente.getEmail : process.env.USER_EMAIL; // dadosCliente.getEmail ou a variavel de ambiente

        const configSend = {
            from: process.env.USER_EMAIL, // sender address
            to: emailTo, // list of receivers
            subject: template.subject, // Subject line
            html: template.context, // html body
        }

        let info = await this.transporter.sendMail(configSend);

        // return info;

        // send mail with defined transport object
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

}

module.exports = EmailController;