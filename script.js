const form = document.getElementById("formCampanha");

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

    console.log("Faturamento:", faturamento);
    console.log("Lucro:", lucro);
});
