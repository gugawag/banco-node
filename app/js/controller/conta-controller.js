class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }
    remover(event) {
        this.contas.remover(event.target.id);
        event.target.parentElement.remove();
    }
    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(conta) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${conta.numero} - ${conta.saldo}`;
        const botaoApagar = document.createElement("button");
        botaoApagar.id = conta.numero;
        botaoApagar.textContent = 'X';
        botaoApagar.onclick = this.remover.bind(this);
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
