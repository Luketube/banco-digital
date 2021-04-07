import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAuteticacao} from "./SistemAutenticacao.js";

const diretor = new Diretor("Lucas", 10000, 123546698);
const gerente = new Gerente("Beatriz", 5000, 96546498);
const cliente = new Cliente("Ronaldo", 456974545, 456);

diretor.cadastrarSenha(123456);

const estaLogado = SistemaAuteticacao.login (diretor, 123456);
const clienteLogado = SistemaAuteticacao.login(cliente, 456);

console.log(estaLogado);
console.log(clienteLogado);
