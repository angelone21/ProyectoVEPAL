function enviarCorreo() {
    Email.send({
        SecureToken: "9bce41b6-6b17-4fbd-8c91-ab3737272258",
        Host: "smtp.elasticemail.com",
        To: 'vincenzo.angelone02@gmail.com',
        From: "vincenzo.angelone2199@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        alert("Se enviaron los datos correctamente!")
    );
}