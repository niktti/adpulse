const form = document.getElementById("formCampanha");

const resultadoFaturamento = document.getElementById("resultadoFaturamento");
const resultadoLucro = document.getElementById("resultadoLucro");
const resultadoCPA = document.getElementById("resultadoCPA");
const resultadoCPC = document.getElementById("resultadoCPC");
const resultadoROAS = document.getElementById("resultadoROAS");
const resultadoCPAMaximo = document.getElementById("resultadoCPAMaximo");
const diagnostico = document.getElementById("diagnostico");

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
    const cliques = Number(document.getElementById("cliques").value);

    const faturamento = preco * vendas;
    const custoTaxas = taxa * vendas;
    const lucro = faturamento - investimento - custoTaxas;

    const cpa = vendas > 0
        ? investimento / vendas
        : 0;

    const cpc = cliques > 0
        ? investimento / cliques
        : 0;

    const roas = investimento > 0
        ? faturamento / investimento
        : 0;

    const cpaMaximo = preco - taxa;

    resultadoFaturamento.textContent = formatarDinheiro(faturamento);
    resultadoLucro.textContent = formatarDinheiro(lucro);

    resultadoCPA.textContent =
        vendas > 0 ? formatarDinheiro(cpa) : "Sem vendas";

    resultadoCPC.textContent =
        cliques > 0 ? formatarDinheiro(cpc) : "Sem cliques";

    resultadoROAS.textContent =
        `${roas.toFixed(2).replace(".", ",")}x`;

    resultadoCPAMaximo.textContent =
        formatarDinheiro(cpaMaximo);

    if (vendas === 0) {
        diagnostico.textContent = "Campanha ainda não possui vendas.";
    } else if (cpa < cpaMaximo) {
        diagnostico.textContent = "Campanha rentável";
    } else if (Math.abs(cpa - cpaMaximo) < 0.01) {
        diagnostico.textContent = "Campanha no ponto de equilíbrio";
    } else {
        diagnostico.textContent = "Campanha operando com prejuízo";
    }
});
