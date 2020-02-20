var tabela = document.querySelector("#tabela-pacientes");

// preciso passar o event como parametro da funçõa que irá chama-ló
tabela.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);

});
