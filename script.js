function validar() {
    var senha = formAcao.senha.value;

    if (senha.length < 6) {
        alert("Digite uma senha com mais de 6 digitos");
        formAcao.senha.focus();
        return false;
    }
    if (document.getElementById("nome").value == "") {
        alert("Por favor, preencha o campo nome");
        document.getElementById("nome").focus();
        return false;
    }
}