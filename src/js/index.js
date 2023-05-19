// const é uma variável constante que não muda o valor, ela está armazenando essas informações
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

// querySelector, consultar um seletor que pode ser uma classe ou uma tag
//buscando a tag body
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
// identificando o clique do usuario, adicionar um ouviente ao elelemento
// precisa do event e da acao
botaoAlterarTema.addEventListener("click", () => { 

    
    // mudando para o modo claro
    // se contem .contains() metodo retorna true ou false
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    // toggle alterar entre 2 estados
    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo){
        // removendo a classe modo escuro
     
        //colocando a imagem sol
       imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png")
    }else{
    // codigo que vai ser executado quando clicar no botao
    // lista das classes que tem nesse elemento
    // metodo adicionar add()
    // body.classList.add("modo-escuro");
    // trocando a imagem do sol para a lua
    //setAttribute, qual atributo que queremos mudar e o caminho
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png")
    }
});

// arrow function (funcao de seta),nao tem parametros
/* () => {
    
}
*/