function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada encontrado nesse destino. Você pode pesquisar o nome de outro estado brasileiro.</p>";
        return;
    }

    let estado = "";
    let nome = "";
    let localizacao = "";
    let resultados = "";

    campoPesquisa = campoPesquisa.toLowerCase();

    // Verifica se há dados disponíveis
    if (!pontosTuristicosBrasil || pontosTuristicosBrasil.length === 0) {
        section.innerHTML = "<p>Nenhum ponto turístico disponível no momento.</p>";
        return;
    }

    // Itera sobre cada dado da lista de pontos turísticos
    for (let pontoTuristico of pontosTuristicosBrasil) {
        estado = pontoTuristico.estado.toLowerCase();
        nome = pontoTuristico.nome.toLowerCase();
        localizacao = pontoTuristico.localizacao.toLowerCase();

        if (estado.includes(campoPesquisa) || nome.includes(campoPesquisa) || localizacao.includes(campoPesquisa)) {

            // Criar um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${pontoTuristico.imagem}" alt="${pontoTuristico.nome}">
                <div class="resultado-nome">
                        <a href="${pontoTuristico.link}" target="_blank">${pontoTuristico.nome}</a>
                        <p class="descricao-meta">${pontoTuristico.localizacao}</p>
                    </div>
                <div class="content">
                    <p class="descricao-meta">${pontoTuristico.descricao}</p>
                    <div class="saiba-mais"> 
                        <a href="${pontoTuristico.link}" target="_blank">VER MAIS</a>
                    </div>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
