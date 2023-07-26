function percorreListaEImprimeValoresLista(lista, funcao) {
    for (var i = 0; i < lista.length; i++) {
        const element = lista[i];
        const texto = funcao(element)
        console.log(texto)
    }
}

function transformaParaMaiusculo(element) {
    return element.toUpperCase()
}

minhaLista = ['Rafael Meneses', 'João Pedros', 'Maria Silva', 'José Santos']

percorreListaEImprimeValoresLista(minhaLista, transformaParaMaiusculo)