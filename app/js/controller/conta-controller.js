class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        alert('Conta criada com sucesso:'
            + novaConta.numero);
    }
}
