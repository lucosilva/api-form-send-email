# backend-form-send-email
  
## Introdução

Este projeto, tem como objetivo receber dados de um formulario, e enviar estes dados para um e-mail principal e um agradecimento para o e-mail de quem preencheu o formulario.  
<br><br>
Express.JS é a tecnologia ultizada para criação da API que recebe os dados. 
<br>
Para o envio dos e-mail foi ultilizado Nodemailer.
<br><br><br>
Autor Lucas Correia.
<br>
<br>
Este projeto foi ultilizado em [frontend-clf-contabilidade](https://github.com/lucosilva/frontend-clf-contabilidade)
<br>
[veja a demonstração do projeto no site da clf contabilidade](https://clf-contabilidade.vercel.app/)

## Instalação

```
npm install
```
script de inicialização
```
npm start
```
<br>

## Variaveis de ambiente

* SMTP_EMAIL - é o protocolo ultilizado pelo servidor de cliente de email. exemplo: smtp.gmail.com.
* USER_EMAIL - conta de e-mail. exemplo: teste@gmail.com
* PASS_EMAIL - senha da conta de e-mail.

para ultilzar essas variaveis de ambiente localmente, recomendavel instalar [dotenv](https://www.npmjs.com/package/dotenv) criando um arquivo .env na raiz do projeto.

## Bibliotecas usadas

* Node JS
* Express JS
* Nodemailer

## Outras informações

* Padrão de projeto MVC <br>
* Para entender mais detalhes sobre Nodemailer na [documentação oficial](https://nodemailer.com/about/).


</details>
