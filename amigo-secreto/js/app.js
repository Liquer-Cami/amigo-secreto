let listaDeNomes = [];
function adicionar() {
    let nomesDigitados = document.querySelector(".form__input").value;

    if(nomesDigitados == "") return;
    if(listaDeNomes.includes(nomesDigitados)){
        alert("Nome já incluído")
        return;
    }
    let amigosIncluidos = document.querySelector(".friends__container");
    listaDeNomes.push(nomesDigitados);
    amigosIncluidos.innerHTML = listaDeNomes;
   
   
}

function sortear() {
    embaralha(listaDeNomes);

    if(listaDeNomes.length <= 3){
        alert("Digite mais nomes");
        return;
     }

    let sorteio = document.querySelector('#lista-sorteio');
   
    for (let i = 0; i < listaDeNomes.length; i++) {
        if (i == listaDeNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + ' --> ' + listaDeNomes[i + 1] + '<br>';
            }
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.querySelector('#lista-sorteio').innerHTML = " ";
    document.querySelector(".friends__container").innerHTML = " ";

    listaDeNomes = [];
}
