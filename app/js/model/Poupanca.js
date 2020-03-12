class Poupanca extends Conta {
    constructor(numero, saldo, dataVencimento) {
        super(numero, saldo);
        this._dataVencimento = dataVencimento;
    }
    get dataVencimento() {
        return this._dataVencimento;
    }
    set dataVencimento(novaDataVencimento) {
        this._dataVencimento = novaDataVencimento;
    }
    atualizarSaldoAniversario() {
        if (this._dataVencimento.getDay() === (new Date()).getDay()) {
            this.creditar(this.saldo * 0.10);
        }
    }
}
