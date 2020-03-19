class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, dependentes) {
        super(nome, cpf, conta);
        this.dependentes = dependentes;
    }
}
