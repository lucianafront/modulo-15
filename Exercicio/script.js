
var app = window.app || {}
app.tudoValidado = true;


app.validarTelefoneBR = function () {

    var resultado = document.getElementById('resultado');

    var telefone = document.getElementById('telefone');
    var msg_erro = document.getElementById('telefone_erro');

    console.log(telefone.value)

    var semErros = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/.test(telefone.value);

    /*
    * // Exemplo de uso:
        console.log(validarTelefoneBR("(31)3233-4343")); // Retorna true
        console.log(validarTelefoneBR("31.3233.4343")); // Retorna true
        console.log(validarTelefoneBR("31 32334343")); // Retorna true
        console.log(validarTelefoneBR("(31)3233-4343 ramal 123")); // Retorna false
        console.log(validarTelefoneBR("1234-5678")); // Retorna false
    * */

    if (semErros === false) {
        app.tudoValidado = false
        telefone.classList.add("erro")
        msg_erro.style.display = 'block'
    } else {
        telefone.classList.remove("erro")
        msg_erro.style.display = 'none'
    }
}







app.validarTudo = function (elemento) {
    elemento.preventDefault();
    app.tudoValidado = true;
    
    app.validarTelefoneBR();




    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var cep = document.getElementById('cep');
    var cidade = document.getElementById('cidade');
    var uf = document.getElementById('uf');

    if (nome.value === "") {
        app.tudoValidado = false;
        nome.classList.add("erro");
        var erro_nome = document.getElementById('nome_erro');
        erro_nome.style.display = 'block'

    } else {
        nome.classList.remove("erro");
        var erro_nome = document.getElementById('nome_erro');
        erro_nome.style.display = 'none'
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "" || !regexEmail.test(email.value)) {
        app.tudoValidado = false;
        email.classList.add("erro");
        
        var email_erro= document.getElementById('email_erro');
        email_erro.style.display = 'block'
    } else {
        email.classList.remove("erro");
        var erro_email = document.getElementById('email_erro');
        erro_email.style.display = 'none'
    
    }

    var regex = new RegExp('^[0-9]{5}-[0-9]{3}$');

    if (cep.value === "" || !regex.test(cep.value)) {
        app.tudoValidado = false
        cep.classList.add("erro")

        var cep_erro= document.getElementById('cep_erro');
        cep_erro.style.display='block'
    } 
    else {
        cep.classList.remove("erro")
        var cep_erro= document.getElementById('cep_erro');
        cep_erro.style.display = 'none'

    }

    if (cidade.value === "") {
        app.tudoValidado = false
        cidade.classList.add("erro")
        var cidade_erro= document.getElementById('cidade_erro');
        cidade_erro.style.display='block'
    }
     else {
        cidade.classList.remove("erro")
        var cidade_erro= document.getElementById('cidade_erro');
        cidade_erro.style.display = 'none'


    }

    const regexuf = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;

    if (uf.value === "" || !regexuf.test(uf.value)) {
        app.tudoValidado = false
        uf.classList.add("erro")
        var uf_erro= document.getElementById('uf_erro');
        uf_erro.style.display='block'
    } else {
        uf.classList.remove("erro")
        var uf_erro= document.getElementById('uf_erro');
        uf_erro.style.display = 'none'

    }


    console.log(uf, cep, email, nome, telefone, cidade);


    var resultado = document.getElementById('resultado');
    if(app.tudoValidado === true){

        resultado.style.display = 'block';
        app.limparFormulário();
    }
    else
        resultado.style.display = 'none'

}


app.limparFormulário = function () {
    document.getElementById("meuForm").reset();
}