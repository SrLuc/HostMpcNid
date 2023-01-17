function alertFormPSI() {
    console.log(alert('Seu Email foi enviado com Sucesso! Aguarde o Retorno em seu endereço de Email'));
}

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    
    const name = document.querySelector("#inputUnit");
    
    const value = name.value;
    
    console.log(value);

    if (value == "Coelhos"){
        document.getElementById('form').action = 'https://formsubmit.co/cllaudio128@gmail.com';
    }
    if (value == "Piedade"){
        document.getElementById('form').action = 'https://formsubmit.co/claudioandrade.nid@gmail.com';
    }
    if (value == "Recife" || 'Recife Antigo'){
        document.getElementById('form').action = 'https://formsubmit.co/ruanlucenaramos@gmail.com';
    }
})
