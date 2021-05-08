const express = require('express');
const cors = require('cors')

const Form = require('./src/model/formModel');
const EmailController = require('./src/controller/emailController');
const TemplateClienteView = require('./src/views/templateCliente');
const TemplateEmpresaView = require('./src/views/templateEmpresa');

var app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors()) //{origin:'https://wwww.clf.srv.br/formulario/'}

app.post('/data/form/', function (req, res) {

    const dadaFormModel = new Form(req.body);
    if (dadaFormModel.validadeEmail()) {
        const templateCliente = new TemplateClienteView(dadaFormModel);
        const templateEmpresa = new TemplateEmpresaView(dadaFormModel);
        const email = new EmailController(dadaFormModel);

        async function sendEmail() {
            let infoEmpresa = await email.Send(templateEmpresa.render());
            let infoCliente = await email.Send(templateCliente.render());

             return await infoEmpresa
        }
        sendEmail().then((obj)=>{
            console.log("informormação >",obj);

            res.send({
               status: 'foi'
            })
        })


    } else {
        res.send({
            status: 406,
            mensagemStatus: "Solicitação não aceita, por recurso recebido não validado"
        });
    }

})

app.listen(process.env.PORT || 3000);