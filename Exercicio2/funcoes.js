function cadastro() {
    const formulario = document.getElementById("myForm");
    let i, j = false;

    for (i = 0; i < entrada.length && j == false; i++) {
        if (entrada[i].value == "") {
            alert("Preencha os campos !!!");
            j = true;
        }
    }
    if (j == false) {
        let nP = parseInt(entrada[2].value);
        let nE = parseInt(entrada[3].value);
        let nR = parseInt(entrada[4].value);
        if (nP > 2 || nP < 0) {
            alert("Nota Parcial aceita apenas notas entra 0 e 2");
        } else if (nE > 3 || nE < 0) {
            alert("Nota Exercicio aceita apenas notas entre 0 e 3");
        } else if (nR > 5 || nR < 0) {
            alert("Nota Regimental aceita apenas notas entra 0 e 5")
        } else {
            let nota;
            for (i = 2; i < 5; i++) {
                nota = nP + nE + nR;
            }
            impressao.style.display = "block"
            setTimeout(() => impressao.style.display = "none", 2000)
            sessionStorage.setItem("Nome", entrada[0].value);
            sessionStorage.setItem("RGM", entrada[1].value);
            sessionStorage.setItem("NotaParcial", entrada[2].value);
            sessionStorage.setItem("NotaProjeto", entrada[3].value);
            sessionStorage.setItem("NotaRegimental", entrada[4].value);
            sessionStorage.setItem("ConceitoFinal", nota);
            document.cookie = "EasterEgg=Você me achou hehe;"
            formulario.reset();
        }
    }

}

function exibir() {
    const chave = Object.keys(sessionStorage);
    const impressao = document.getElementById("info");
    const div = document.getElementById("impressao")
    div.style.display = "block";

    let valor = [];
    for (let i = 1; i < 7; i++) {
        valor[i] = sessionStorage.getItem(chave[i]);
    }
    console.log(valor)

    let cf = valor[4];
    let tabela = "<tr><th>Nome</th><th>RGM</th><th>Nota Parcial</th><th>Nota Projeto</th><th>Nota Regimental</th><th>Conceito Final</th></tr><tr><td>" + valor[3] + "</td><td>" + valor[6] + "</td><td>" + valor[1] + "</td><td>" + valor[2] + "</td><td>" + valor[5] + "</td>"
    if (cf > 5) {
        tabela += "<td style='background-color: #1e90ff;'>" + valor[4] + " Aprovado!!</td>"
    } else if (cf < 6 && cf > 2.5) {
        tabela += "<td style='background-color: #ff8c00;'>" + valor[4] + " Exame!!</td>"
    } else if (cf <= 2.5) {
        tabela += "<td style='background-color: #b22222;'>" + valor[4] + " Reprovado!!</td>"
    }

    impressao.innerHTML = tabela;
}