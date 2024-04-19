const nodemailer = require("nodemailer");

 function sendEmail(){

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "gbrioto@gmail.com",
            pass: "Gab04022003"
        }
    
    });
    
    transporter.sendMail({
        from: "Gabriel Henrique Brioto <gbrioto@gmail.com>",
        to: "gabriel.h.brioto@gmail.com",
        subject: document.getElementById("subject"),
        text: "Nova solicitação de contato",
        hmtl: "Nome: " + document.getElementById("name") + "<br/>Email: " + document.getElementById("email") + "<br/>Mensagem: " + document.getElementById("content")
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.error(err);
    });

}