function enviarCorreo() {

    var n = document.getElementById("nombres").value;
    var t = (document.getElementById("telefono")).value;

    Email.send({
        //SecureToken: "b473b624-3e44-4ac4-9ea1-192284ced54d",
        Host: "in-v3.mailjet.com",
        Username: "36445dabc4207e6a6c6847e17d29a44a",
        Password: "05a5348151fdaa7a5b2918cb5107cefa",
        To: 'vincenzo.angelone02@gmail.com',
        From: "vinvezoxgaming@gmail.com",
        Subject: n,
        Body: t
    }).then(
        alert("Se enviaron los datos correctamente!")
    );

}