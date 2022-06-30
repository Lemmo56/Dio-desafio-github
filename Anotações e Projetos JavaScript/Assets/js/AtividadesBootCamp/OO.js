class contaBancaria {
    constructor (agencia, numero, tipo, saldo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;

    }
    set saldo(valor){
        this._saldo = valor;
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}
class ContaCorrente extends contaBancaria{
    constructor (agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor (agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Poupança';
    }
}
class ContaUniversitaria extends contaBancaria{
    constructor (agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Universitária';
    }
    sacar(valor){
        if(valor > 500) return 'Operação negada';
        else{
            this._saldo = this._saldo = valor;
        }
    }
}