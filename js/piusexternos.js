var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");
xhr.send();
xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    console.log(resposta);
    var pius = JSON.parse(resposta);
    console.log(pius);
    pius.forEach(function(piu) {
        AdcionaPiuAoFeed(piu);
        
    });
});