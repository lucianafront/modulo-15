var app = window.app || {}

app.validarEmail = function (elemento) {
    elemento.preventDefault();

    let tudoValidado = true;
    let mensagens=[];


    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var cep = document.getElementById('cep');
    var cidade = document.getElementById('cidade');
    var uf = document.getElementById('uf');


    if (nome.value === "") {
        tudoValidado = false;
        nome.classList.add("erro");
        
   mensagens.push ("nome precisa ser digitado.")
    } else {
        nome.classList.remove("erro");
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
     if (email.value === ""  || !regexEmail.test(email.value)) {
        tudoValidado = false;
        email.classList.add("erro");
        mensagens.push ("email precisa ser digitado.")
    } else {
        email.classList.remove("erro")
    }

    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    if (telefone.value === ""  || !regex.test(telefone.value)) {
        tudoValidado = false
        telefone.classList.add("erro")
        mensagens.push ("telefone precisa ser digitado")
    } else {
        telefone.classList.remove("erro")
    }


    var regex = new RegExp('^[0-9]{5}-[0-9]{3}$');

    if (cep.value === "" || !regex.test(cep.value)) {
        tudoValidado = false
        cep.classList.add("erro")
        mensagens.push ("cep precisa ser digitado")
    } else {
        cep.classList.remove("erro")
    }

    if (cidade.value === "") {
        tudoValidado = false
        cidade.classList.add("erro")
        mensagens.push ("cidade precisa ser digitado")

    } else {
        cidade.classList.remove("erro")
    }

    const regexuf = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;

    if (uf.value === "" || !regexuf.test(uf.value)) {
        tudoValidado = false
    uf.classList.add("erro")
    mensagens.push ("cidade precisa ser digitado")
    } else {
        uf.classList.remove("erro")
    }


    console.log(uf, cep, email, nome, telefone, cidade);


    return tudoValidado;

}