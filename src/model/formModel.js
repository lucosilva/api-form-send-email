class Form {
    constructor({name, email, tel}) {
        this._name = name;
        this._email = email;
        this._tel = tel;
    }

    get getName(){
        return this._name;
    }
    get getEmail(){
        return this._email;
    }
    get getTel(){
        return this._tel;
    }
}

module.exports = Form;