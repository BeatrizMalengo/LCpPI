// No VS Code, resolva as seguintes situações em JavaScript.
// Os exercícios possuem soluções que vocês poderão consultar.A ideia é que essa atividade
// sirva como aquecimento para a Prática Guiada, por isso pratique bastante.Tente fazer
// todos os exercícios antes de analisar o código com as respostas:




// 1. Crie uma variável produtos, que contenha um array de objetos, com no
// mínimo 3 itens.Dentro da variável, liste produtos disponíveis, informando os
// seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.
// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
//A informação Status deve ser um Booleano, indicando se o produto está
//disponível em estoque.

let produtos = [{
        nome: "camiseta",
        valor: 150,
        qualidade: 6,
        status: true
    },
    {
        nome: "calca",
        valor: 200,
        qualidade: 7,
        status: false
    },
    {
        nome: "tenis",
        valor: 600,
        qualidade: 10,
        status: true
    },
    {
        nome: "bermuda",
        valor: 60,
        qualidade: 4,
        status: false
    },
    {
        nome: "oculos",
        valor: 1500,
        qualidade: 3,
        status: true
    },
    {
        nome: "jaqueta",
        valor: 700,
        qualidade: 8,
        status: true
    }
];



//2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns
// critérios.Selecione todos os produtos que tenham:

//Valor entre 482 e 1600;
//Qualidade superior a 6;
//Status como disponível.
//O resultado do filtro deve ser armazenado na variável carrinho.

let carrinho = produtos.filter(
    (produtos) => {
        return (produtos.qualidade > 6 &&
            produtos.valor >= 482 && produtos.valor <= 1600 &&
            produtos.status)
    }
);



// 3. Por fim, é necessário exibir todos os itens presentes no carrinho, com seus
// nomes e preços correspondentes, e no final um valor total, resultante da
// somatória de todos os produtos.


let paginacarrinho = carrinho.map(
    (produtos) => {
        {
            produtos.nome,
                produtos.valor
        }

        return ('  produto: ' + produtos.nome + '     preço: R$' + produtos.valor)

    });



let precototal = carrinho.reduce((ac, va) => ac + va.valor, 0);


console.log('Confira seus produtos: ')
//console.log(paginacarrinho)
paginacarrinho.forEach((produto) => console.log(produto))

console.log('Total da sua compra: R$' + precototal);