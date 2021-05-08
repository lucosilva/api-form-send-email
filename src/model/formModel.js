class Form {
    constructor({ name, email, tel }) {
        this._name = name.toString();
        this._email = email.toString();;
        this._tel = tel;
    }

    get getName() {
        return this._name;
    }
    get getEmail() {
        return this._email;
    }
    get getTel() {
        return this._tel;
    }

    validadeEmail() {
        let IsOthersChar = [];
        const positionAT = this._email.indexOf("@"); //@
        const positionDOT = this._email.lastIndexOf("."); //(.)

        const othersChar = [' ', '!', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '=', ',', '?', '´', '^', '~', '}', '{', '[', ']', ';', ':', '|', '₢', '/', '°'];

        // eslint-disable-next-line
        othersChar.map((charItem) => {
            IsOthersChar.push(this._email.indexOf(charItem) > 0); // se retornar true, a string contem uma um char especial nela. 
        })


        if (positionAT < 1 || positionDOT < positionAT + 2 || positionDOT + 2 >= this._email.length || IsOthersChar.indexOf(true) >= 0) {
            //Não é um endereço de e-mail válido
            return false;
        } else {
            return true;
        }
    }
    
}

module.exports = Form;