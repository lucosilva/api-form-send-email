const templateModel = require('../model/templateModel');

class Template {

    constructor(usuario) {
        this._dataUsuario = usuario;

        this._dataTemplate = new templateModel('cliente', 'Obrigado pelo contato!', '');
    }

    render() {
		// ${this._dataUsuario.getName}
        this._dataTemplate.setContext(
            `
			<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Use a versão mais recente (borda) do mecanismo de renderização do IE -->
    <meta name="x-apple-disable-message-reformatting"> <!-- Desativar totalmente a escala automática no iOS 10 Mail -->
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    <title></title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

        html,
        body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            font-family: 'Roboto', sans-serif !important;
            background: #F2F2F2 !important;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        table {
            border-spacing: 0 !important;
            /* border-collapse: collapse !important; */
            table-layout: fixed !important;
            margin: 0 auto;
        }

        a {
            text-decoration: none;
        }

        h1 {
            margin: 40px 40px 20px 40px;
            font-weight: bold;
            font-size: 80px;
            color: #595959;
        }

        p {

            color: #595959;
            ;
            float: left;

        }

        @media (max-width: 576px) {
            h1 {
                font-size: 32px;
            }
        }
    </style>
</head>

<body>

    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
        style="margin: 0 auto; background: #fff !important;">

        <!-- Email Header : INICIO -->
        <tr>
            <td align="left" style="border-radius: 0px 0px 6px 6px; background-color: #595959;">
                <img src="https://github.com/lucosilva/frontend-clf-contabilidade/blob/main/src/assets/logo/clf-logo-white.png?raw=true"
                    width="30" height="30" alt="logo CLF" border="0" style="margin: 15px 20px 15px 45px; float: left;">
                <p style="font-size: 16px; margin: 20px 0; font-weight: 300; color: #fff !important; ">Consultoria
                    Fiscal e Tributária</p>
            </td>
        </tr>
        <!-- Email Header : FIM -->


        <!-- 1 Coluna Texto + Button : INICIO -->
        <tr style="background-color: #fff !important;">
            <td>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                        <td>
                            <h1>
                                Recebemos
                                <br /> tudo!
                            </h1>

                            <p style="
								font-weight: 500;
								font-size: 14px;
								margin: 40px;">
                                Olá, ${this._dataUsuario.getName}.
                                <br />
                                <br />
                                Agradecemos o seu contato.
                                <br />
                                Recebemos suas informações e em breve entraremos em contato com você.
                            </p>
                            </h3>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- 1 Column Text + Button : FIM -->


        <!-- Email Header : INICIO -->
        <tr>
            <td align="left" style="background-color: #595959;">
                <img src="https://github.com/lucosilva/frontend-clf-contabilidade/blob/main/src/assets/logo/clf-logo-white.png?raw=true"
                    width="30" height="30" alt="logo CLF" border="0" style="margin: 15px 20px 15px 45px; float: left;">
                <p style="font-size: 16px; margin: 20px 0; font-weight: 300; color: #fff !important; ">Consultoria
                    Fiscal e Tributária</p>
            </td>
        </tr>
        <!-- Email Header : FIM -->
        <!-- 1 Coluna Texto + Button : INICIO -->
        <tr style="background-color: #595959;">
            <td>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                        <td>
                            <p style="
                                width: 100%;
								font-weight: 500;
								font-size: 12px;
                                text-align: center;
								margin: 30px auto;
                                color: #fff !important;">
                                © 2021 CLF - Todos os direitos reservados.
                                <br />
                                Este é um e-mail automático, não responda esse e-mail.
                            </p>
                            </h3>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- 1 Column Text + Button : FIM -->


    </table>


</body>

</html>
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