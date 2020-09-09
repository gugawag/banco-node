class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisarPorCPF(cpf: string): Cliente {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }

    pesquisarClientesNegativados(): Array<Cliente> {
        return this._clientes.filter(cliente => cliente.conta.saldo < 0);
    }
}
