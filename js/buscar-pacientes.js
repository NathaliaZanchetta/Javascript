var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
  console.log("Buscando pacientes...");
  var xhr = new XMLHttpRequest();

  // Equivalente a chegarmos no navegador no momento em que ainda não
  // enviamos a requisição, apenas verificando se o endereço está correto,
  // se existe
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // Após fazer a verificação acessamos seu conteudo e podemos
  // guardar em uma variavel
  xhr.addEventListener("load", function() {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }

  });

  // Para que a requisição seja concluida, precisaremos chamar o método send()
  xhr.send();
});
