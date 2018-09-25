var post = document.querySelector("#post");
post.addEventListener("input", function(){
    var numeroCaracteres = document.querySelector("#numero-caracteres");
    var numero = post.value.length;
    numeroCaracteres.textContent = numero;
    var contador = document.querySelector("#contador");
    
    if (numero > 140){
        
        contador.classList.add("erro");
        post.classList.add("errofundo");
    
    }else{
    
        contador.classList.remove("erro");
        post.classList.remove("errofundo");
    }
});

var botao = document.querySelector("#postar");
botao.addEventListener("click", function(event){
    event.preventDefault();
    var numero = post.value.length;
    var mensagemErro = document.querySelector("#ErroPost");
    if (numero == 0 || numero > 140){
        if (numero == 0){
            mensagemErro.textContent = "O Post não pode ter conteúdo vazio!";
            return;
        }else{
            mensagemErro.textContent = "O Post não pode ter mais que 140 caracteres!";
            return;
        }
    }
    mensagemErro.textContent = "";
    
    piu = CriaPiuMeu();

    AdcionaPiuAoFeed(piu);    
});



