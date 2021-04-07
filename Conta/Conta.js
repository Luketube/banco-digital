export class Conta{

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this.cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //Metodo Abstrato
    sacar(valor){
        throw new Error ("O método sacar da conta é abstrato");
    }

    _sacar (taxa, valor){
        let valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valor;
        }
        return 0;
    }

    depositar(valor){
        if(valor > 0 ){
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}