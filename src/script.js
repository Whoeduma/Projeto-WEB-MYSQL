function mostrarOrcamento() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var orcamento = "Orçamento para: " + nome + "\n email: " + email + "\n\n";

    var produtos = document.querySelectorAll('.produto');
    var total = 0;

    for (var i = 0; i < produtos.length; i++) {
        var quantidadeInput = produtos[i].querySelector('.quantidade');
        var quantidade = parseInt(quantidadeInput.value);

        if (quantidade > 0) {
            var produto = produtos[i].querySelector('h3').innerHTML;
            var valor = parseFloat(produtos[i].getAttribute('Valor-produtos'));
            var subtotal = quantidade * valor;

            orcamento += produto + ": " + quantidade + " unidades - R$ " + subtotal.toFixed(2) + "\n";
            total += subtotal;
        }
    }

    orcamento += "\nTotal: R$ " + total.toFixed(2);

    alert(orcamento);
    
    var sql = "INSERT INTO dados (id_orcamento, nome, email, valor) VALUES (default, '" + nome + "', '" + email + "', '" + total + "');";
    var str = "http://localhost:8080/servidor.js?";  // Após o ?, colocamos os dados do formulário
    str = str + "sql=" + sql;

    window.location.href = str; /* Redirecionando para o servidor*/

}

function calcularTotal() {
    var produtos = document.querySelectorAll('.produto');
    var total = 0;

    for (var i = 0; i < produtos.length; i++) {
        var quantidadeInput = produtos[i].querySelector('.quantidade');
        var quantidade = parseInt(quantidadeInput.value);
        var valor = parseFloat(produtos[i].getAttribute('Valor-produtos'));

        total += quantidade * valor;
    }

    document.getElementById('total').innerHTML = "Total: R$ " + total.toFixed(2);
}

function incrementQuantity(inputId) {
    var inputElement = document.getElementById(inputId);
    inputElement.value = parseInt(inputElement.value) + 1;
  }
  
  function decrementQuantity(inputId) {
    var inputElement = document.getElementById(inputId);
    if (inputElement.value > 0) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  }

  function alterarQuantidade(aumentar, inputId) {
        var inputQuantidade = document.getElementById(inputId);
        var valorAtual = parseInt(inputQuantidade.value);

        if (aumentar) {
            inputQuantidade.value = valorAtual + 1;
        } else {
            if (valorAtual > 0) {
                inputQuantidade.value = valorAtual - 1;
            }
        }

        calcularTotal();
    }
