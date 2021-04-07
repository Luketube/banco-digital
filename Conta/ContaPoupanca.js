import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar (valor){
        if(valor > 0){
            const taxa = 1.01;
            return this._sacar(taxa, valor)
        }
    }
}