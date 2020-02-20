var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Estou procurando pala classe paciente pois todos os demais a possuem
// dessa forma posso perquisar todos ao invés de um por um.
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso   = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura   = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";

        // style.color muda a cor da fonte da linha(tr)
        //paciente.style.color = "red";

        // classList.add vai adicionar a classe "paciente-invalido" para
        // assim ser referenciado no css e ter apenas um acesso de modificação
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";

        // style.backgroundColor já muda a cor do background da linha(tr)
        //paciente.style.backgroundColor = "lightcoral";

        // classList.add vai adicionar a classe "paciente-invalido" para
        // assim ser referenciado no css e ter apenas um acesso de modificação
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc   = Math.round(peso / Math.pow(altura,2));

        // A função toFixed() limita o número de casas decimais;
        tdImc.textContent = imc.toFixed(2);
    }
}

// addEventListener irá identificar/escutar o evento que está sendo executado
// "click" é o tipo de evento que ele irá identificar;
//
// titulo.addEventListener("click", mostraMensagem);
// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Funções anônimas são bastante utilizadas, principalmente no caso de eventos.
// Além disso, chamamos uma função quando interagimos com um evento de clique,
//que só existirá quando o botão for clicado.
botaoAdicionar.addEventListener("click", function (event){

    //faz com que o evento não faça seu comportamento padrão. Desta forma, ele
    //não executará este comportamento e reagirá conforme o que pedimos no evento
    event.preventDefault();

    // Através do formulário,temos acesso aos seus inputs, acessando através
    // propriedade name; Mas não estamos interessados no campo em si, e sim no seu valor
    // Para acessar o valor utilizaremos value
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Tendo os dados do formulario em mãos utilizaremos a função createElement()
    // para criar os componentes do novo paciente a ser incerido no html;
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Resultado do passo a cima
    /*<tr></tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>*/

    // Da mesma forma q o textContent substitui/captura os valores do meu html
    // ele será usado para incerir os dados do novo paciente
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //appendChild. Ela adiciona como filho o elemento passado a ela como
    // parâmetro. Logo, vamos chamar essa função na tr, passando a td como
    //parâmetro
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // Procurando pela tabela no DOM
    var tabela = document.querySelector("#tabela-pacientes");
    // Adicionando o "tr" com todos os seus filhos a tabela com o appendChild
    tabela.appendChild(pacienteTr);

});
