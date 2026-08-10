const form = document.getElementById("formCampanha");

const resultadoFaturamento = document.getElementById("resultadoFaturamento");
const resultadoLucro = document.getElementById("resultadoLucro");
const resultadoCPA = document.getElementById("resultadoCPA");
const resultadoCPC = document.getElementById("resultadoCPC");
const resultadoROAS = document.getElementById("resultadoROAS");
const resultadoCPAMaximo = document.getElementById("resultadoCPAMaximo");
const diagnostico = document.getElementById("diagnostico");

const listaCampanhas = document.getElementById("listaCampanhas");

let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];

function formatarDinheiro(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function salvarCampanhas() {
    localStorage.setItem("campanhas", JSON.stringify(campanhas));
}

function mostrarCampanhas() {
    listaCampanhas.innerHTML = "";

    if (campanhas.length === 0) {
        listaCampanhas.innerHTML = "<p>Nenhuma campanha analisada ainda.</p>";
        return;
    }

    campanhas.forEach((campanha) => {
        const item = document.createElement("div");

        item.innerHTML = `
            <strong>${campanha.nome}</strong>
            <span>${campanha.plataforma}</span>
            <span>Investimento: ${formatarDinheiro(campanha.investimento)}</span>
            <span>ROAS: ${campanha.roas.toFixed(2).replace(".", ",")}x</span>
            <span>Lucro: ${formatarDinheiro(campanha.lucro)}</span>
        `;

        listaCampanhas.appendChild(item);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const plataforma = document.getElementById("plataforma").value;

    const investimento = Number(
        document.getElementById("investimento").value
    );

    const preco = Number(
        document.getElementById("preco").value
    );

    const taxa = Number(
        document.getElementById("taxa").value
    );

    const vendas = Number(
        document.getElementById("vendas").value
    );

    const cliques = Number(
        document.getElementById("cliques").value
    );

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

    resultadoFaturamento.textContent =
        formatarDinheiro(faturamento);

    resultadoLucro.textContent =
        formatarDinheiro(lucro);

    resultadoCPA.textContent =
        vendas > 0
            ? formatarDinheiro(cpa)
            : "Sem vendas";

    resultadoCPC.textContent =
        cliques > 0
            ? formatarDinheiro(cpc)
            : "Sem cliques";

    resultadoROAS.textContent =
        `${roas.toFixed(2).replace(".", ",")}x`;

    resultadoCPAMaximo.textContent =
        formatarDinheiro(cpaMaximo);

    if (vendas === 0) {
        diagnostico.textContent =
            "Campanha ainda não possui vendas.";
    } else if (cpa < cpaMaximo) {
        const diferenca = cpaMaximo - cpa;
        const percentualAbaixo =
            (diferenca / cpaMaximo) * 100;

        diagnostico.textContent =
            `Campanha saudável. Seu CPA está ${percentualAbaixo.toFixed(1)}% abaixo do ponto de equilíbrio, com ${formatarDinheiro(diferenca)} de margem por aquisição.`;
    } else if (Math.abs(cpa - cpaMaximo) < 0.01) {
        diagnostico.textContent =
            "Campanha no ponto de equilíbrio. O CPA atual está praticamente igual ao CPA máximo.";
    } else {
        const diferenca = cpa - cpaMaximo;

        diagnostico.textContent =
            `Campanha em prejuízo. Seu CPA está ${formatarDinheiro(diferenca)} acima do ponto de equilíbrio.`;
    }

    const novaCampanha = {
        nome,
        plataforma,
        investimento,
        faturamento,
        lucro,
        cpa,
        cpc,
        roas,
        cpaMaximo
    };

    campanhas.push(novaCampanha);

    salvarCampanhas();
    mostrarCampanhas();
});

mostrarCampanhas();
