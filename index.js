/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
*/

const botaoAplicarFiltros = document.querySelector('.btn-filtrar');

// 2. Função de aplicar os filtros
function aplicarFiltros() {
  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  const cartas = document.querySelectorAll('.carta');
  cartas.forEach(function (carta) {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = carta.dataset.preco;

    let mostrarCarta = true;

    const temFiltroDeCategoria = categoriaSelecionada !== "";
    const cartaNaoBateComFiltroDeCategoria =
      categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarCarta = false;
    }

    const temFiltroDePreco = precoMaximoSelecionado !== "";
    const cartaNaoBateComFiltroDePrecoMaximo =
      parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

    if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
      mostrarCarta = false;
    }

    carta.classList.toggle("mostrar", mostrarCarta);
    carta.classList.toggle("esconder", !mostrarCarta);
  });
}

// 3. Escutar o clique no botão
botaoAplicarFiltros.addEventListener('click', aplicarFiltros);

// 4. Escutar a tecla ENTER nos inputs
const inputsDeFiltro = document.querySelectorAll("#categoria, #preco");
inputsDeFiltro.forEach(input => {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      aplicarFiltros();
    }
  });
});