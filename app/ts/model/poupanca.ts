class Poupanca extends Conta {
    private _dataVencimento: Date;

    constructor(numero: string, saldo: number, dataVencimento: Date) {
        super(numero, saldo);
        this._dataVencimento = dataVencimento;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(novaDataVencimento: Date) {
        this._dataVencimento = novaDataVencimento;
    }

    atualizarSaldoAniversario() {
        if (this._dataVencimento.getDay() === (new Date()).getDay()) {
            this.creditar(this.saldo * 0.10);
        }
    }
}
