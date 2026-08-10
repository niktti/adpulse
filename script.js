const form = document.getElementById("formCampanha");

const resultadoFaturamento = document.getElementById("resultadoFaturamento");
const resultadoLucro = document.getElementById("resultadoLucro");

function formatarDinheiro(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const investimento = Number(document.getElementById("investimento").value);
    const preco = Number(document.getElementById("preco").value);
    const taxa = Number(document.getElementById("taxa").value);
    const vendas = Number(document.getElementById("vendas").value);

    const faturamento = preco * vendas;
    const custoTaxas = taxa * vendas;
    const lucro = faturamento - investimento - custoTaxas;

    resultadoFaturamento.textContent = formatarDinheiro(faturamento);
    resultadoLucro.textContent = formatarDinheiro(lucro);
});
