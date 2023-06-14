function validandoForm() {
    let nome = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["femail"].value;
    if (nome == "" || email == " " || nome == null || email == null) {
        alert("Inválido");
        return false;
    } else {
        alert("Você recebera sua planilha em breve");
        return true;
    }
}