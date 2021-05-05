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
    
    const usuario = new Form(req.body);
    const templateCliente = new TemplateClienteView(usuario);
    const templateEmpresa = new TemplateEmpresaView(usuario);
    const email = new EmailController(usuario);
    
    email.Send(templateEmpresa.render()).then(()=>{   
        email.Send(templateCliente.render()).then(()=>{
            res.send('email foram enviados');    
        });
    });
})

app.listen(process.env.PORT || 3000);