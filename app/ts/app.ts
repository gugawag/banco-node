let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cli_1 = new Cliente('Fulano','10011122233',c1.numero);
const cli_2 = new Cliente('Cicrano','20011122230',c2.numero);

console.log(cli_1.toString())

let clientes = new Clientes();

console.log(clientes.listar());


