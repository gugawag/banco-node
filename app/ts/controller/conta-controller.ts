class ContaController{

    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    constructor() {
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value));

        alert('Conta criada com sucesso:'
            + novaConta.numero);
    }

}
