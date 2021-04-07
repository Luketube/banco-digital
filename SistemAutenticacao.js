export class SistemaAuteticacao {
    static login(autenticavel, senha) {
        if(SistemaAuteticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}