//Variaveis do formulario
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputCpf = document.getElementById("cpf");
var inputCvv = document.getElementById("cvv");
var inputFlag = document.getElementById("flag");
var inputDate = document.getElementById("date");


//comando que executa a função
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    checkInputs();
})

//Função que verificar se o a variavel é um numero
function isNumber(a){
    return !isNaN(a);
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

//Função que verificar as entradas
function checkInputs(){

    //Valores do formulario
    var inputNameValue = inputName.value.trim();
    var inputEmailValue = inputEmail.value.trim();
    var inputCpfValue = inputCpf.value.trim();
    var inputCvvValue = inputCvv.value.trim();
    var inputFlagValue = inputFlag.value.trim();
    var inputDateValue = inputDate.value.trim();

    //Checando Nome
    if(inputNameValue === ""){
        setError(inputName, "Nome obrigatório!");
    }else{
        setSucess(inputName);
    }

    //Checando Email
    if(inputEmailValue === ""){
        setError(inputEmail, "Email obrigatório!");
    }else{
        var check=/\S+@\S+\.\S+/;
        if(inputEmailValue.length > 300 || inputEmailValue.search(check) == -1){
            setError(inputEmail, "Padrão inválido para o Email!");
        }else{
            setSucess(inputEmail);
        }
    }

    //Checando CPF
    if(inputCpfValue === ""){
        setError(inputCpf, "CPF obrigatório!");
    }else{
        var cpfValido = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;
        if(cpfValido.test(inputCpfValue) != true || !isNumber){
            setError(inputCpf, "Padrão inválido para o CPF!");
        }else{
            setSucess(inputCpf);
        }
    }

    //Checando CVV
    if(inputCvvValue === "" || inputFlagValue == null){
        setError(inputCvv, "Cvv obrigatório!");
    }else{ 
        if(inputCvvValue.length == 3 && isNumber(inputCvvValue)){
            setSucess(inputCvv);
        }else{
            setError(inputCvv, "Padrão invalido para o CVV!");
        }
    }

    //Checando bandeira
    if(inputFlagValue == "" || inputFlagValue == null){
        setError(inputFlag, "Bandeira obrigatória!");
    }else{
        setSucess(inputFlag);
    }

    //Checando Data
    if(inputDateValue == "" || inputDateValue == null){
        setError(inputDate, "Data obrigatória!");
    }else{
        setSucess(inputDate);
    }
    
}