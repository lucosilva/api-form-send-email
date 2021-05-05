class TemplateModel{
    constructor(type, subject, context) {
        this._type = type;
        this._subject = subject;
        this._context = context;
    }

    get getType(){
        return this._type; //cliente ou empresa
    }
    get getSubject(){
        return this._subject;
    }
    get getContext(){
        return this._context;
    }
    setType(prop){
         this._type = prop;
    }
    setSubject(prop){
        this._subject = prop;
    }
    setContext(prop){
        this._context = prop;
    }
}

module.exports = TemplateModel;