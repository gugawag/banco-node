class ContaController {

    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private contas: Contas;

    constructor() {
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");

        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));

        this.contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }

    remover(event: Event): void {
        this.contas.remover((<Element>event.target).id);
        (<Element>event.target).parentElement.remove();
    }

    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }

    inserirContaNoHTML(conta: Conta) {
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
