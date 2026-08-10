# AdPulse

Dashboard web para análise de rentabilidade e desempenho de campanhas de marketing digital.

🔗 **Aplicação:** https://niktti.github.io/adpulse/

## Sobre o projeto

O AdPulse foi desenvolvido para facilitar a análise de campanhas de tráfego pago a partir de métricas importantes para tomada de decisão.

A aplicação recebe dados como investimento, preço do produto, taxas, vendas e cliques e transforma essas informações em indicadores de desempenho.

Além dos cálculos, o sistema gera um diagnóstico da campanha e mantém um histórico das análises realizadas no navegador.

## Funcionalidades

- Cadastro dos dados de uma campanha
- Cálculo automático de faturamento
- Cálculo de lucro após investimento e taxas
- Cálculo de CPA (Custo por Aquisição)
- Cálculo de CPC (Custo por Clique)
- Cálculo de ROAS
- Cálculo do CPA de equilíbrio
- Diagnóstico automático de rentabilidade
- Histórico de campanhas analisadas
- Persistência dos dados utilizando LocalStorage
- Interface responsiva para desktop e dispositivos móveis

## Métricas utilizadas

### Faturamento

```text
Faturamento = Preço do produto × Número de vendas
```

### Lucro

```text
Lucro = Faturamento - Investimento - Taxas
```

### CPA

```text
CPA = Investimento ÷ Número de vendas
```

Representa quanto foi gasto em anúncios para gerar cada venda.

### CPC

```text
CPC = Investimento ÷ Número de cliques
```

Representa o custo médio de cada clique recebido pela campanha.

### ROAS

```text
ROAS = Faturamento ÷ Investimento
```

Indica quanto de faturamento foi gerado para cada real investido em anúncios.

### CPA de equilíbrio

```text
CPA de equilíbrio = Preço do produto - Taxa por venda
```

Representa o custo máximo de aquisição antes que a venda deixe de ser rentável, considerando os dados informados na aplicação.

## Diagnóstico

O AdPulse compara o CPA atual da campanha com seu CPA de equilíbrio.

Com isso, a aplicação consegue identificar situações como:

- campanha saudável;
- campanha no ponto de equilíbrio;
- campanha operando com prejuízo;
- campanha ainda sem vendas.

Quando a campanha está saudável, também é calculada a margem disponível por aquisição.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- LocalStorage
- GitHub Pages

## Persistência de dados

Nesta primeira versão, o histórico é armazenado utilizando o `localStorage` do navegador.

Essa abordagem permite manter as campanhas disponíveis após atualizar ou fechar a página sem necessidade de servidor ou banco de dados.

Como consequência, os dados permanecem somente no navegador em que foram cadastrados.

## Decisões do projeto

O projeto foi construído inicialmente priorizando as regras de negócio e os cálculos antes da camada visual.

A interface foi desenvolvida posteriormente, após a validação das principais funcionalidades.

A aplicação também trata situações como campanhas sem vendas ou sem cliques para evitar divisões por zero nos cálculos de CPA e CPC.

## Próximas melhorias

Algumas possíveis evoluções do projeto:

- edição e exclusão de campanhas;
- filtros e ordenação do histórico;
- gráficos comparativos;
- exportação dos resultados;
- backend para persistência das campanhas;
- autenticação de usuários;
- banco de dados;
- testes automatizados.

## Objetivo

O AdPulse é um projeto de portfólio desenvolvido para aplicar conceitos de desenvolvimento web, manipulação do DOM, lógica de programação, persistência local e implementação de regras de negócio em um problema relacionado à análise de campanhas digitais.
