$(document).ready(function() {
    //console.log( "ready!" );

});


// Regras adicionais para o pedido:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. O produto com o tamanho (grande) deve acrescer o preço unitário em 5%.

// 3. A embalagem presente tem um custo de 2.00 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo:
    // faixa 1: acima de 20 - Desconto de 15%
    // faixa 2: acima de 10 - Desconto de 10%
    // faixa 3: acima de 5 - Desconto de 5%

var catalogo = {
    "cake" :{
        "produto_01": {
            "nome": "Salvador",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, velit eu consequat ultricies, metus massa bibendum eros, ac pellentesque velit leo eu ante. Donec in tortor sem. Integer eget consectetur lectus.",
            "tamanho": {
                "pequeno": {
                    "massa": {
                        "chocolate":{
                            "valor": 2.50,
                            "imagem": "cake_salvador_chocolate_01.jpg"
                        },
                        "morango": {
                            "valor": 2.20,
                            "imagem": "cake_salvador_morango_01.jpg"
                        },
                        "baunilha": {
                            "valor": 2.70,
                            "imagem":"cake_salvador_baunilha_01.jpg"
                        },
                        "limao": {
                            "valor": 2.00,
                            "imagem": "cake_salvador_limao_01.jpg"
                        },
                        "pao_de_lo": {
                            "valor": 2.10,
                            "imagem":"cake_salvador_pao-de-lo_01.jpg"
                        },
                        "integral": {
                            "valor": 2.60,
                            "imagem":"cake_salvador_integral_01.jpg"
                        }
                    },
                    "recheio": {
                        "chocolate_leite":{
                            "valor": 2.50
                        },
                        "chocolate_preto":{
                            "valor": 2.60
                        },
                        "chocolate_vegano":{
                            "valor": 2.70
                        },
                        "morango": {
                            "valor": 2.20
                        },
                        "baunilha_natural":{
                            "valor": 2.10
                        },
                        "limao_siciliano": {
                            "valor": 2.10
                        },
                        "sem_recheio": {
                            "valor": 0
                        }
                    },
                    "fruta": {
                        "morango":{
                            "valor": 1.50
                        },
                        "banana":{
                            "valor": 1.60
                        },
                        "cereja":{
                            "valor": 1.70
                        },
                        "laranja": {
                            "valor": 1.20
                        },
                        "limao":{
                            "valor": 1.10
                        },
                        "amora": {
                            "valor": 1.10
                        },
                        "sem_fruta": {
                            "valor": 0
                        }
                    }
                },
                "grande":{
                    "massa": {
                        "chocolate":{
                            "valor": 3.50,
                            "imagem": "cake_salvador_chocolate_01.jpg"
                        },
                        "morango": {
                            "valor": 3.20,
                            "imagem": "cake_salvador_morango_01.jpg"
                        },
                        "baunilha": {
                            "valor": 3.70,
                            "imagem":"cake_salvador_baunilha_01.jpg"
                        },
                        "limao": {
                            "valor": 3.00,
                            "imagem": "cake_salvador_limao_01.jpg"
                        },
                        "pao_de_lo": {
                            "valor": 3.10,
                            "imagem":"cake_salvador_pao-de-lo_01.jpg"
                        },
                        "integral": {
                            "valor": 3.60,
                            "imagem":"cake_salvador_integral_01.jpg"
                        }
                    },
                    "recheio": {
                        "chocolate_leite":{
                            "valor": 3.50
                        },
                        "chocolate_preto":{
                            "valor": 3.60
                        },
                        "chocolate_vegano":{
                            "valor": 3.70
                        },
                        "morango": {
                            "valor": 3.20
                        },
                        "baunilha_natural": {
                            "valor": 3.10
                        },
                        "limao_siciliano": {
                            "valor": 3.10
                        },
                        "sem_recheio": {
                            "valor": 0
                        }
                    },
                    "fruta": {
                        "morango":{
                            "valor": 2.50
                        },
                        "banana":{
                            "valor": 2.60
                        },
                        "cereja":{
                            "valor": 2.70
                        },
                        "laranja": {
                            "valor": 2.20
                        },
                        "limao":{
                            "valor": 2.10
                        },
                        "amora": {
                            "valor": 2.10
                        },
                        "sem_fruta": {
                            "valor": 0
                        }
                    }
                }
            }
        },
        "produto_02": {
            "nome": "Salvador",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, velit eu consequat ultricies, metus massa bibendum eros, ac pellentesque velit leo eu ante. Donec in tortor sem. Integer eget consectetur lectus.",
            "tamanho": {
                "pequeno": {
                    "massa": {
                        "chocolate":{
                            "valor": 2.50,
                            "imagem": "cake_salvador_chocolate_01.jpg"
                        },
                        "morango": {
                            "valor": 2.20,
                            "imagem": "cake_salvador_morango_01.jpg"
                        },
                        "baunilha": {
                            "valor": 2.70,
                            "imagem":"cake_salvador_baunilha_01.jpg"
                        },
                        "limao": {
                            "valor": 2.00,
                            "imagem": "cake_salvador_limao_01.jpg"
                        },
                        "pao_de_lo": {
                            "valor": 2.10,
                            "imagem":"cake_salvador_pao-de-lo_01.jpg"
                        },
                        "integral": {
                            "valor": 2.60,
                            "imagem":"cake_salvador_integral_01.jpg"
                        }
                    },
                    "recheio": {
                        "chocolate_leite":{
                            "valor": 2.50
                        },
                        "chocolate_preto":{
                            "valor": 2.60
                        },
                        "chocolate_vegano":{
                            "valor": 2.70
                        },
                        "morango": {
                            "valor": 2.20
                        },
                        "baunilha_natural":{
                            "valor": 2.10
                        },
                        "limao_siciliano": {
                            "valor": 2.10
                        },
                        "sem_recheio": {
                            "valor": 0
                        }
                    },
                    "fruta": {
                        "morango":{
                            "valor": 1.50
                        },
                        "banana":{
                            "valor": 1.60
                        },
                        "cereja":{
                            "valor": 1.70
                        },
                        "laranja": {
                            "valor": 1.20
                        },
                        "limao":{
                            "valor": 1.10
                        },
                        "amora": {
                            "valor": 1.10
                        },
                        "sem_fruta": {
                            "valor": 0
                        }
                    }
                },
                "grande":{
                    "massa": {
                        "chocolate":{
                            "valor": 3.50,
                            "imagem": "cake_salvador_chocolate_01.jpg"
                        },
                        "morango": {
                            "valor": 3.20,
                            "imagem": "cake_salvador_morango_01.jpg"
                        },
                        "baunilha": {
                            "valor": 3.70,
                            "imagem":"cake_salvador_baunilha_01.jpg"
                        },
                        "limao": {
                            "valor": 3.00,
                            "imagem": "cake_salvador_limao_01.jpg"
                        },
                        "pao_de_lo": {
                            "valor": 3.10,
                            "imagem":"cake_salvador_pao-de-lo_01.jpg"
                        },
                        "integral": {
                            "valor": 3.60,
                            "imagem":"cake_salvador_integral_01.jpg"
                        }
                    },
                    "recheio": {
                        "chocolate_leite":{
                            "valor": 3.50
                        },
                        "chocolate_preto":{
                            "valor": 3.60
                        },
                        "chocolate_vegano":{
                            "valor": 3.70
                        },
                        "morango": {
                            "valor": 3.20
                        },
                        "baunilha_natural": {
                            "valor": 3.10
                        },
                        "limao_siciliano": {
                            "valor": 3.10
                        },
                        "sem_recheio": {
                            "valor": 0
                        }
                    },
                    "fruta": {
                        "morango":{
                            "valor": 2.50
                        },
                        "banana":{
                            "valor": 2.60
                        },
                        "cereja":{
                            "valor": 2.70
                        },
                        "laranja": {
                            "valor": 2.20
                        },
                        "limao":{
                            "valor": 2.10
                        },
                        "amora": {
                            "valor": 2.10
                        },
                        "sem_fruta": {
                            "valor": 0
                        }
                    }
                }
            }
        }
    }
}



//DÚVIDAS:
// 1)como colocar as coisas no html em perder os IDS?


// 2)Eu sei pegar as informações em um objeto mas não sei em um ajax.
// Por exemplo: como eu pego o nome "grande" e "pequeno" do objeto tamanho?"
// Fazendo assim (a baixo), eu pego os dois objetos que estão dentro de tamanho. Eu quero o nome apenas.
// console.log ("Catalogo: ", result.cake.produto_01.tamanho);




function catalogoProdutos(pesquisa) {
    $.ajax({
        url: "http://chooco.pt/public/js/produtos.json",
        type: "POST",
        dataType: "json",
        success: function(result) {
            set_data_values(result);
        },
        error: function(error) {
            console.log('Erro');
        }
    });
}
catalogoProdutos();


function set_data_values(result){
    var produto = result[parametros_produto.tipo][parametros_produto.produto].nome;

    var descricaoProduto = result[parametros_produto.tipo][parametros_produto.produto].descricao;

    $('.info_produto h3.nome_produto').html(produto);
    $('p.descricao_produto').html(descricaoProduto);
    
};



//Entrei a primeira vez, vou ver isso
var parametros_produto = {
    'quantidade': 1,
    'tipo': 'cake',
    'produto': 'produto_01',
    'nomeProduto': 'nome',
    'nomeDescricao': 'descricao',
    'tamanho': 'pequeno',
    'embalagem': 'normal',
    'massa': 'chocolate',
    'recheio': 'chocolate_leite',
    'fruta': 'sem_fruta',
}

function orcamento_inicial(inicio) {
    //variaveis
    var quantidade = inicio.quantidade;
    var massaValor = catalogo[inicio.tipo][inicio.produto].tamanho[inicio.tamanho].massa[inicio.massa].valor;
    var recheioValor = catalogo[inicio.tipo][inicio.produto].tamanho[inicio.tamanho].recheio[inicio.recheio].valor;
    var frutaValor = catalogo[inicio.tipo][inicio.produto].tamanho[inicio.tamanho].fruta[inicio.fruta].valor;

    var imagem = 'img/' + catalogo[inicio.tipo][inicio.produto].tamanho[inicio.tamanho].massa[inicio.massa].imagem;

    //Calculo base
    var valorOrcamento = quantidade * (massaValor + recheioValor + frutaValor);

    // Calculo com o acrescimo da versão grande
    if (inicio.tamanho == 'grande') {
        valorOrcamento *=  1.05;
    }

    // Calculo da embalagem
    if (inicio.embalagem == 'presente') {
        valorOrcamento += quantidade * 2;
    }

    // Calculo do desconto por quantidade
    if (quantidade >= 20) {
        valorOrcamento *= 0.85;
    } else if (quantidade >= 10){
        valorOrcamento *= 0.90;
    } else if (quantidade >= 5) {
        valorOrcamento *= 0.95;
    }

    // Detalhe do pedido
    $('.resultado_produto').html(catalogo[inicio.tipo][inicio.produto][inicio.nomeProduto]),

    $('.resultado_quantidade').html(inicio.quantidade);

    idTamanho = '#' + inicio.tamanho;
    $('.resultado_tamanho').html($(idTamanho).html());

    idEmbalagem = '#' + inicio.embalagem;
    $('.resultado_embalagem').html($(idEmbalagem).html());

    idMassa = "option[value='" + inicio.massa + "']";
    $('.resultado_massa').html($(idMassa).html());

    idRecheio = "option[value='" + inicio.recheio + "']";
    $('.resultado_recheio').html($(idRecheio).html());

    idFruta = "option[value='" + inicio.fruta + "']";
    $('.resultado_fruta').html($(idFruta).html());


    $('.total_valor').html(valorOrcamento.toLocaleString('pt-BR', {
        minimumFractionDigits:2,
        maximumFractionDigits:2
    }));

    // Para saber se ta funcionando
    console.log('valor do orçamento inicial: ', 'R$',valorOrcamento);
}

orcamento_inicial(parametros_produto);

// Pegar valores dos botões
$(".opcao_filtro div").click(function(){
    $(this).parent().children("div").removeClass("selecionado");
    $(this).addClass("selecionado");

    var itemBotao = $(this).parent().attr('id');
    parametros_produto[itemBotao] = $(this).attr('id');

    //tornar dinâmico
    orcamento_inicial(parametros_produto);
})

$("select").change(function(){
    var itemSelect = $(this).attr("id");
    parametros_produto[itemSelect] = $(this).val();

    //tornar dinâmico
    orcamento_inicial(parametros_produto);
})

$("input").change(function(){
    var itemImput = $(this).attr("id");
    parametros_produto[itemImput] = $(this).val();
})