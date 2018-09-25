var like = document.querySelector(".like");
like.addEventListener("click", function(event){
    event.preventDefault();
    var likecounter = this.parentNode.querySelector(".likecounter");
    var dislike = this.parentNode.querySelector(".dislike");
    if (!this.classList.contains("liked")){
        var temp = parseInt(likecounter.textContent,10) + 1;
        console.log(temp);
        likecounter.textContent = temp;
        this.classList.add("liked");
        if (dislike.classList.contains("disliked")){
            var temp = parseInt(likecounter.textContent,10) + 1;
            likecounter.textContent = temp;
            dislike.classList.remove("disliked");
            console.log(temp);
        }
    }else{
        var temp = likecounter.textContent - 1;
        likecounter.textContent = temp;
        this.classList.remove("liked")
        console.log(temp);
    }
});

var dislike = document.querySelector(".dislike");
dislike.addEventListener("click", function(event){
        event.preventDefault();
        var likecounter = this.parentNode.querySelector(".likecounter");
        var like = this.parentNode.querySelector(".like");
        if (!this.classList.contains("disliked")){
            var temp = parseInt(likecounter.textContent,10) - 1;
            likecounter.textContent = temp;
            this.classList.add("disliked");
            if (like.classList.contains("liked")){
                var temp = parseInt(likecounter.textContent,10) - 1;
                likecounter.textContent = temp;
                like.classList.remove("liked")
            }
        }else{
            var temp = parseInt(likecounter.textContent,10) + 1;
            likecounter.textContent = temp;
            this.classList.remove("disliked");
        }

    });

var deletar = document.querySelector(".deletar");
deletar.addEventListener("click", function(event){
    event.preventDefault();
    this.parentNode.classList.add("fadeOut");
    var isso = this;
    setTimeout(function(){
        isso.parentNode.remove();
    },500)
});


function AdcionaPiuAoFeed(piu){
    var feed = document.querySelector("#feed");

        
    var postagem = document.createElement("div");
    postagem.classList.add("postagem");
    feed.appendChild(postagem);

    var deletar = document.createElement("button");
    deletar.classList.add("deletar");
    postagem.appendChild(deletar);
    deletar.addEventListener("click", function(event){
        event.preventDefault();
        this.parentNode.classList.add("fadeOut");
        var isso = this;
        setTimeout(function(){
            isso.parentNode.remove();
        },500)
    });

    var imgPost = document.createElement("img");
    imgPost.classList.add("foto");
    imgPost.src = piu.imgUrl;
    postagem.appendChild(imgPost);

    var h1 = document.createElement("h1");
    h1.classList.add("usuario");
    h1.textContent = piu.user;
    postagem.appendChild(h1);

    var p = document.createElement("p");
    p.classList.add("conteudo");
    p.textContent = piu.message;
    postagem.appendChild(p);

    var likeometer = document.createElement("h2");
    likeometer.classList.add("likeometer");
    likeometer.textContent = "Likeometer ";
    
    var likecounter = document.createElement("span");
    likecounter.classList.add("likecounter");
    likecounter.textContent = 0;
    likeometer.appendChild(likecounter);
    

    var like = document.createElement("button");
    like.classList.add("like")
    like.textContent = "Like";
    like.addEventListener("click", function(event){
        event.preventDefault();
        var likecounter = this.parentNode.querySelector(".likecounter");
        var dislike = this.parentNode.querySelector(".dislike");
        if (!this.classList.contains("liked")){
            var temp = parseInt(likecounter.textContent,10) + 1;
            console.log(temp);
            likecounter.textContent = temp;
            this.classList.add("liked");
            if (dislike.classList.contains("disliked")){
                var temp = parseInt(likecounter.textContent,10) + 1;
                likecounter.textContent = temp;
                dislike.classList.remove("disliked");
                console.log(temp);
            }
        }else{
            var temp = likecounter.textContent - 1;
            likecounter.textContent = temp;
            this.classList.remove("liked")
            console.log(temp);
        }

    });

    postagem.appendChild(like);


    var dislike = document.createElement("button");
    dislike.classList.add("dislike");
    dislike.textContent = "Dislike";
    dislike.addEventListener("click", function(event){
        event.preventDefault();
        var likecounter = this.parentNode.querySelector(".likecounter");
        var like = this.parentNode.querySelector(".like");
        if (!this.classList.contains("disliked")){
            var temp = parseInt(likecounter.textContent,10) - 1;
            likecounter.textContent = temp;
            this.classList.add("disliked");
            if (like.classList.contains("liked")){
                var temp = parseInt(likecounter.textContent,10) - 1;
                likecounter.textContent = temp;
                like.classList.remove("liked")
            }
        }else{
            var temp = parseInt(likecounter.textContent,10) + 1;
            likecounter.textContent = temp;
            this.classList.remove("disliked");
        }

    });

    postagem.appendChild(dislike);
    
    postagem.appendChild(likeometer);
}

function CriaPiuMeu(){
    var corfundo = document.querySelector("#corfundo").value;
    var mensagem = document.querySelector("#post");
    var tipoborda = document.querySelector("#tipoborda").value;
    var corborda = document.querySelector("#corborda").value;
    var piu = {
        user: "GusCarvas",
        message: mensagem.value,
        imgUrl: "img/perfil.png",
        background: corfundo,
        bordercolor: corborda,
        bordertype: tipoborda

    }
    mensagem.value = "";
    return piu;
}
