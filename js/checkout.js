//Variaveis do formulario
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputCpf = document.getElementById("cpf");
var inputCvv = document.getElementById("cvv");
var inputFlag = document.getElementById("flag");
var inputDate = document.getElementById("date");

//comando que executa a função
window.onload = loadPrice;

//Função que atualiza o preço de acordo com a quantidade de itens
function loadPrice(){
    var inputAmountProduct = document.querySelector('[name=amountProduct]');
    var outputPrice = document.querySelector('[name=totalPrice]');
    inputAmountProduct.oninput = function() {
        return outputPrice.value = "R$ " + ((inputAmountProduct.value*69.9).toFixed(2)).replace('.', ',');
    }
}

//Comando que executa a função de checar os inputs quando o botão é clicado
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    checkInputs();
})

//Função que retonar o valor do input
function inputValue(dataInput){
    return dataInput.value.trim();
}

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

//Função para entrada invalida
function setError(status, msg){
    var inputBox = status.parentElement;
    inputBox.className= "input-field error";
    var span = inputBox.querySelector("span");
    span.innerText = msg;
    var fa = inputBox.querySelector(".fa");
    fa.className= "fa fa-times-circle";
}

//Função para entrada valida
function setSucess(status){
    var inputBox = status.parentElement;
    inputBox.className=("input-field");
    var span = inputBox.querySelector("span");
    span.innerText= "";
    var fa = inputBox.querySelector(".fa");
    fa.className= "fa";
}

//Função que retorna o resultado da validação
function validationResult(string, textError, textSucess){
    var value = inputValue(string);
    return (isVoid(value)) ? setError(string, textError) : setSucess(string, textSucess);
}

//Função q verificar as regras do email, cpf e cvv
function rulesInput(string, typeInput){

    var value = inputValue(string);
    return  (typeInput === "email") ? validEmail(value) :
            (typeInput === "cpf") ? validCpf(value) : validCvv(value);   
}

//Função que verificar as entradas
function checkInputs(){

    //Checando Nome
    validationResult(inputName, "Nome Obrigatório", "");

    //Checando bandeira
    validationResult(inputFlag, "Bandeira obrigatória", "");

    //Checando Data
    validationResult(inputDate, "Data obrigatória", "");

    //Checando Email
    if(isVoid(inputValue(inputEmail))){
        setError(inputEmail, "Email obrigatório!");
    }else{
        (rulesInput(inputEmail, "email")) ? setError(inputEmail, "Padrão inválido para o Email!") : setSucess(inputEmail);
    }

    //Checando CPF
    if(isVoid(inputValue(inputCpf))){
        setError(inputCpf, "CPF obrigatório!");
    }else{
        (rulesInput(inputCpf, "cpf")) ? setError(inputCpf, "Padrão inválido para o CPF!") : setSucess(inputCpf);
    }
    
    //Checando CVV
    if(isVoid(inputValue(inputCvv))){
        setError(inputCvv, "Cvv obrigatório!");
    }else{ 
        (!rulesInput(inputCvv, "cvv")) ?  setError(inputCvv, "Padrão invalido para o CVV!") : setSucess(inputCvv);
    }
}