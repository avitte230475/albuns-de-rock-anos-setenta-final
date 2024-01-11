
const botoes = document.querySelectorAll(".botao");
const bandas = document.querySelectorAll(".banda");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarBanda();

		botao.classList.add("selecionado");
		bandas[indice].classList.add("selecionada");
	});
});

function desselecionarBanda() {
	const bandaSelecionada = document.querySelector(".banda.selecionada");
	bandaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
