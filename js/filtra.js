var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //  Expressões regulares são um tipo especial de texto, que nos
            // auxilia a buscarmos por strings, facilitando quando o termo
            // for maior.
            // Há dois parâmetros para o objeto, o primeiro o texto que queremos
            // buscar, o segundo parâmetro será referente case sensitive
            // 'i' indica a opção case insensitive
            var expressao = new RegExp(this.value, "i");

            // A expressão regular tem o método test()
            // Esse teste irá retornar verdadeiro caso o nome
            // contenha a expressão, ou falso caso não contenha.
            if (!expressao.test(nome)){
              // Se não tem na expressao então vai ser adicionado a classe
              // ou seja, se for diferente não vai aparecer 
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
