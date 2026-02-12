// escolhemos os itens que iremos manipular e os atribuímos nas variáveis
let escurinho = localStorage.getItem("modoEscuro");
const mudarTema = document.getElementById("mudarTema");

// declaramos uma função que adiciona a classe modoEscuro ao body quando chamada
// também salva a escolha no armazenamento local do navegador
const enabledmodoEscuro = () => {
    document.body.classList.add("modoEscuro");
    localStorage.setItem("modoEscuro", "active");
};

// essa faz o contrário da outra
const disablemodoEscuro = () => {
    document.body.classList.remove("modoEscuro");
    localStorage.setItem("modoEscuro", "inactive"); 
};

// aqui a gente chama a função caso o modo escuro seja ativado pelo nosso botão
if (escurinho === "active") enabledmodoEscuro();

// aqui a gente só espera o botão ser clicado e dependendo do estado do modo escuro ele troca a paleta de cores
mudarTema.addEventListener("click", () => {
    escurinho = localStorage.getItem("modoEscuro");
    if (escurinho !== "active") {
        enabledmodoEscuro();
    } else {
        disablemodoEscuro();
    }
});
 