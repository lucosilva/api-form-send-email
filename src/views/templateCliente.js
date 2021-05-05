const templateModel = require('../model/templateModel');

class Template {

    constructor(usuario){
        this._dataUsuario = usuario;

        this._dataTemplate = new templateModel('cliente','Obrigado pelo contato!','');
    }

    render() {
        this._dataTemplate.setContext(
            `<h1>Olá ${this._dataUsuario.getName}</h1>
            <br>
            <h2>Recebemos tudo! Logo entraremos em contato!</h2>`
        )
        return {
            type: this._dataTemplate.getType,
            subject: this._dataTemplate.getSubject,
            context: this._dataTemplate.getContext,
        }
    }
}

module.exports = Template;