let nomeUsario = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsario == ""){
    nomeUsario = prompt("Qual o seu nome?")
}

if(nomeUsario == null){
    elemento.textContent = "Seja muito bem vindo!";
    }else{ 
        elemento.textContent = nomeUsario   

    }
