class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: String;

    constructor(nome: string, cpf: string, conta: String) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get conta(): String {
        return this._conta;
    }

    set conta(conta) {
        this._conta = conta;
    }

    toString(): string {
        return `Cliente: ${this._nome} 
        CPF: ${this._cpf} 
        Conta: ${this._conta}`;
    }
}
