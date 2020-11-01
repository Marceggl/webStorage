function impressao(media) {
    const impressao = document.getElementById("impressao");
    const entrada = document.getElementsByName("entrada");
    const mostrar = document.getElementsByName("mostrar");

    impressao.style.display = "block"
    for (let i = 0; i < 6; i++) {
        mostrar[i].innerHTML = entrada[i].value;
    }
    if (media > 5) {
        mostrar[6].innerHTML = media + " aluno Aprovado!!";
    } else if (media < 6 && media > 2.5) {
        mostrar[6].innerHTML = media + " Aluno de Exame!!"
    } else if (media <= 2.5) {
        mostrar[6].innerHTML = media + " Aluno Reprovado!!"
    }
    /* Adicionando no localStorage */
    localStorage.setItem("nome", entrada[0].value);
    localStorage.setItem("rgm", entrada[1].value);
    localStorage.setItem("Nota Final", media);
    /* Adicionando cookies */
    document.cookie = "nome=" + entrada[0].value + ";";
    document.cookie = "rgm=" + entrada[1].value + ";";
    document.cookie = "Nota Final=" + media + ";";


}

function calculo() {
    const entrada = document.getElementsByName("entrada");
    const form = document.getElementById("myForm")
    let soma = 0;
    let media;
    let i, j = false;

    for (i = 0; i < 6 && j == false; i++) {
        if (entrada[i].value == "") {
            alert("Preencha os campos !!!");
            j = true;
        }

    }
    if (j == false) {
        for (i = 2; i < 6 && j == false; i++) {
            soma += parseFloat(entrada[i].value);
        }
        media = soma / 4
        impressao(media);
    }
    form.reset();


}