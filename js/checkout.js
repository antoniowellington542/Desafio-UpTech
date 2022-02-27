//Variaveis do formulario
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputCpf = document.getElementById("cpf");
var inputCvv = document.getElementById("cvv");
var inputFlag = document.getElementById("flag");
var inputDate = document.getElementById("date");

//comando que executa a função
window.onload = function(){
    
    var inputAmountProduct = document.querySelector('[name=amountProduct]');
    var outputPrice = document.querySelector('[name=totalPrice]');
    inputAmountProduct.oninput = function() {
        outputPrice.value = "R$ " + ((inputAmountProduct.value*69.9).toFixed(2)).replace('.', ',');
        console.log(outputPrice.value);
  }
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    checkInputs();
})

//Função que verificar se o input é um numero
function isNumber(a){
    return !isNaN(a);
}

//Função que verificar se o input esta vazio
function isVoid(a){
    return a == "" || a == null
}

//função que valida o email
function validEmail(string){
    var emailValid = /\S+@\S+\.\S+/;
    return string.search(emailValid) == -1 ? true : false;
}

//função que valida o cpf
function validCpf(string){
    var cpfValid = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
    return cpfValid.test(string) != true ? true : false;
}

//função que valida o cvv
function validCvv(string){
    return (string.length == 3 && isNumber(string)) ? true : false;
}


//Função que executa caso a entrada seja invalida
function setError(status, msg){
    var inputBox = status.parentElement;
    inputBox.className= "input-field error";
    var span = inputBox.querySelector("span");
    span.innerText = msg;
    var fa = inputBox.querySelector(".fa");
    fa.className= "fa fa-times-circle";
}

//Função que executa caso a entrada seja valida
function setSucess(status){
    var inputBox = status.parentElement;
    inputBox.className=("input-field");
    var span = inputBox.querySelector("span");
    span.innerText= "";
    var fa = inputBox.querySelector(".fa");
    fa.className= "fa";
}

//Função que checa as Entradas
function checkInput(string, textError, textSucess){
    var stringValue = string.value.trim();

    return (isVoid(stringValue)) ? setError(string, textError) : setSucess(string, textSucess);
}

//Função q verificar as regras do email, cpf e cvv
function rulesInput(string, typeInput){

    var inputValue = string.value.trim(); 

    return  (typeInput === "email") ? validEmail(inputValue) :
            (typeInput === "cpf") ? validCpf(inputValue) : validCvv(inputValue);   
}

//Função que verificar as entradas
function checkInputs(){

    var inputEmailValue = inputEmail.value.trim();
    var inputCpfValue = inputCpf.value.trim();
    var inputCvvValue = inputCvv.value.trim();
    
    //Checando Nome
    checkInput(inputName, "Nome Obrigatório", "");

    //Checando bandeira
    checkInput(inputFlag, "Bandeira obrigatória", "");

    //Checando Data
    checkInput(inputDate, "Data obrigatória", "");

    //Checando Email
    if(isVoid(inputEmailValue)){
        setError(inputEmail, "Email obrigatório!");
    }else{
        (rulesInput(inputEmail, "email")) ? setError(inputEmail, "Padrão inválido para o Email!") : setSucess(inputEmail);
    }

    //Checando CPF
    if(isVoid(inputCpfValue)){
        setError(inputCpf, "CPF obrigatório!");
    }else{
        (rulesInput(inputCpf, "cpf")) ? setError(inputCpf, "Padrão inválido para o CPF!") : setSucess(inputCpf);
    }
    
    //Checando CVV
    if(isVoid(inputCvvValue)){
        setError(inputCvv, "Cvv obrigatório!");
    }else{ 
        (!rulesInput(inputCvv, "cvv")) ?  setError(inputCvv, "Padrão invalido para o CVV!") : setSucess(inputCvv);
    }
}