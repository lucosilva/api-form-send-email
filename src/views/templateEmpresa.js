const templateModel = require('../model/templateModel');

class Template {

    constructor(usuario){
        this._dataUsuario = usuario;

        this._dataTemplate = new templateModel('empresa','Cliente vindo pelo formulario!','');
    }

    render() {
        this._dataTemplate.setContext(
            `
               <h1>Olá, Potencial cliente vindo do formulario!</h1>
               <br>
               <p>Nome completo: ${this._dataUsuario.getName}</p> 
               <br>
               <p>Email: ${this._dataUsuario.getEmail}</p> 
               <br>
               <p>Telefone: ${this._dataUsuario.getTel}</p> 
            `
        )
        return {
            type: this._dataTemplate.getType,
            subject: this._dataTemplate.getSubject,
            context: this._dataTemplate.getContext,
        }
    }
}

module.exports = Template;
