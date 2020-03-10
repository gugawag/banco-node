let contaController = new ContaController();
document.querySelector(".form")
    .addEventListener("submit", contaController.inserir.bind(contaController));
