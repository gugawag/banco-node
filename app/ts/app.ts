let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', -100);
const c2 = new Conta('2', -200);
const p1 = new Poupanca('3', 100);
const cb1 = new ContaBonificada('4', 0);

// Cliente

const cli1 = new Cliente('joao', '123', c1);
const cli2 = new Cliente('maria', '124', c2);
const cli3 = new Cliente('pedro', '125', p1);

const clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);

const cliPesquisado = clientes.pesquisarPorCPF('124');
console.log(cliPesquisado.nome);

const clientesNegativados = clientes.pesquisarClientesNegativados();

console.log('Clientes Negativados:');

clientesNegativados.forEach(cliente => console.log(cliente.nome));

const cliPesquisado2 = clientes.pesquisarPorCPF('555');
if (cliPesquisado2) {
    console.log(cliPesquisado2.nome);
} else {
    console.log('Cliente com cpf 555 não encontrado!');
}



