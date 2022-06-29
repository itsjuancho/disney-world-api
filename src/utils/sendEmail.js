async function sendMail(email, name) {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: email,
        from: process.env.SENDGRID_EMAIL_SENDER,
        subject: 'Bienvenido a Disney World API! v1',
        text: 'Te damos la bienvenida al maravilloso mundo de Disney',
        html: `<h3>¡Estamos felices de tenerte, ${name}!</h3>
        <hr>
        <p>Te damos la bienvenida al maravilloso mundo de Disney! Gracias por registrarte en nuestro sistema. Esperamos que sea de tu agrado tu estadia.</p>
        <p>Atentamente,
        <b>El equipo de Disney API.</b></p>
        <br>
        <small><i>Este email ha sido enviado gracias a Sendgrid.</i></small>`,
    }
    try {
        await sgMail.send(msg);
        return true;
    } catch (error) {
        console.log("Hubo un error...", error);
        return false;
    }
}

module.exports = sendMail;