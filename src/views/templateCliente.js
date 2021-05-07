const templateModel = require('../model/templateModel');

class Template {

    constructor(usuario) {
        this._dataUsuario = usuario;

        this._dataTemplate = new templateModel('cliente', 'Obrigado pelo contato!', '');
    }

    render() {
        this._dataTemplate.setContext(
            `
            <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #ffffff;">

	
	<!-- CSS Reset : INICIO -->
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

		/* O que ele faz: Remova espaços ao redor do design de email adicionado por alguns clientes de email. */
		/* Cuidado: Pode remover o preenchimento / margem e adicionar uma cor de fundo para compor uma janela de resposta. */
		html,
		body {
			margin: 0 !important;
			padding: 0 !important;
			height: 100% !important;
			width: 100% !important;
			font-family: 'Roboto', sans-serif !important;
		}

		/* O que faz: Para clientes de email redimensionamento de texto pequeno. */
		* {
			-ms-text-size-adjust: 100%;
			-webkit-text-size-adjust: 100%;
		}

		/* O que faz: Centraliza o email no Android 4.4 */
		div[style*="margin: 16px 0"] {
			margin: 0;
		}

		/* O que faz: Impede que o Outlook adicione espaçamento extra às tabelas. */
		table,
		td {
			mso-table-lspace: 0pt !important;
			mso-table-rspace: 0pt !important;
		}

		/* What it does: Replaces default bold style. */
		th {
			font-weight: normal;
		}

		/* O que faz: corrige o problema de preenchimento do webkit. */
		table {
			border-spacing: 0 !important;
			/* border-collapse: collapse !important; */
			table-layout: fixed !important;
			margin: 0 auto;
		}

		/* O que faz: impede que o Windows 10 Mail enfatize os links, apesar do CSS inline. Estilos para links sublinhados devem estar em linha. */
		a {
			text-decoration: none;
		}

		/* O que ele faz: usa um método de renderização melhor ao redimensionar imagens no IE. */
		img {
			-ms-interpolation-mode: bicubic;
		}

		/* O que ele faz: uma solução alternativa para clientes de email que se intrometem em links acionados. */
		a[x-apple-data-detectors],
		/* iOS */
		.unstyle-auto-detected-links a,
		.aBn {
			border-bottom: 0 !important;
			cursor: default !important;
			color: inherit !important;
			text-decoration: none !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		}

		/* O que ele faz: impede que o Gmail altere a cor do texto nos tópicos da conversa. */
		.im {
			color: inherit !important;
		}

		/* O que faz: impede que o Gmail exiba um botão de download em imagens grandes e não vinculadas. */
		.a6S {
			display: none !important;
			opacity: 0.01 !important;
		}

		/* Se o acima não funcionar, adicione uma classe .g-img a qualquer imagem em questão. */
		img.g-img+div {
			display: none !important;
		}

		/* O que ele faz: remove a gutter da direita no aplicativo do Gmail para iOS: iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
		/* Crie uma dessas consultas de mídia para cada tamanho de viewport adicional que você deseja corrigir */

		/* iPhone 4, 4S, 5, 5S, 5C, e 5SE */
		@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
			u~div .email-container {
				min-width: 320px !important;
			}
		}

		/* iPhone 6, 6S, 7, 8, e X */
		@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
			u~div .email-container {
				min-width: 375px !important;
			}
		}

		/* iPhone 6+, 7+, e 8+ */
		@media only screen and (min-device-width: 414px) {
			u~div .email-container {
				min-width: 414px !important;
			}
		}
	</style>

	<!-- O que faz: Faz com que as imagens de fundo em 72ppi Outlook sejam renderizadas no tamanho correto. -->
	<!-- [if gte mso 9]> -->
	<!-- <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml> -->
	<!-- [endif] -->

	<!-- CSS Reset : FIM -->

	<!-- Progressive Enhancements : INICIO -->
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

		*p {
			font-size: 16px;
		}

		*h3 {
			font-size: 20px;
			line-height: 30px;
			font-weight: bold;
			letter-spacing: 1.5px;
		}

		/* Media Queries */
		@media screen and (max-width: 640px) {

			.email-container {
				width: 100% !important;
				margin: auto !important;
			}

			/* O que faz: força as células da tabela em linhas de largura total. */
			.stack-column,
			.stack-column-center {
				display: block !important;
				width: 100% !important;
				max-width: 100% !important;
				direction: ltr !important;
			}

			/* E centraliza */
			.stack-column-center {
				text-align: center !important;
			}

			/* O que faz: Classe de utilidade genérica para centralização. Útil para imagens, botões e tabelas aninhadas. */
			.center-on-narrow {
				text-align: center !important;
				display: block !important;
				margin-left: auto !important;
				margin-right: auto !important;
				float: none !important;
			}

			table.center-on-narrow {
				display: inline-block !important;
			}

			/* O que faz: ajuste a tipografia em telas pequenas para melhorar a legibilidade */
			.email-container p {
				font-size: 17px !important;
			}

			/* O que faz: remove a quebra de linha no mobile */
			.hideThis {
				display: none !important;
			}
		}
	</style>
	<!-- Progressive Enhancements : END -->

	
	<center style="width: 100%; background-color: #ffffff;">
		<!--[if mso | IE]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff;">
            <tr>
            <td>
            <![endif]-->

		<!-- Texto do Preheader Visualmente Escondido : INICIO -->
		<div
			style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
			Obrigado pelo contato!
		</div>
		<!-- Texto do Preheader Visualmente Escondido : FIM -->

		<!-- Crie espaço em branco após o texto de visualização desejado para que os clientes de e-mail não peguem outro texto de distração na visualização da caixa de entrada. Estenda conforme necessário. -->
		<!-- Visualizar o espaçamento de texto Hack : INICIO -->
		<div
			style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
			&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
		</div>
		<!-- Visualizar o espaçamento de texto Hack : FIM -->

		<!-- Email Body : INICIO -->
		<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700"
			style="margin: auto; " class="email-container">

			<!-- Email Header : INICIO -->
			<tr>
				<td align="left"
					style="height: 80px;border-radius: 0px 0px 6px 6px; ;background-color: #595959; display: flex; align-items: center; ">
					<img src="https://github.com/lucosilva/frontend-clf-contabilidade/blob/main/src/assets/logo/clf-logo-white.png?raw=true"
						width="45" height="45" alt="logo CLF" border="0" style="margin: 15px 20px 15px 45px">
					<p style="font-family: Roboto;
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					color: #FFFFFF;">Consultoria Fiscal e Tributária</p>
				</td>
			</tr>
			<!-- Email Header : FIM -->

			<!-- 1 Coluna Texto + Button : INICIO -->
			<tr>
				<td style="background: #fff;">
					<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
						<tr>
							<td>
								<h3 style="
								margin: 40px 40px 20px 40px;
								font-family: Roboto;
								font-style: normal;
								font-weight: bold;
								font-size: 80px;
								color: #595959;">
									Recebemos<br />tudo!
								</h3>

								<p style="
								font-family: Roboto;
								font-style: normal;
								font-weight: 500;
								font-size: 19px;	
								color: #595959;
								margin: 40px 40px 20px 40px;">
									Olá, ${this._dataUsuario.getName}.
									<br />
									<br />
									Agradecemos o seu contato.
									<br />
									Recebemos suas informações e em bréve entraremos em contato com você.
								</p>
								</h3>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- 1 Column Text + Button : FIM -->


			<!-- 1 Coluna Texto + Button : INICIO -->
			<tr>
				<td style="background: #F2F2F2;">
					<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
						<tr>
							<td style="padding: 30px 40px; display: flex;">
								<span style="display: flex; margin-right: 30px;">
									<img width="20" height="20" style="margin-right: 15px;"
										src="https://raw.githubusercontent.com/lucosilva/frontend-clf-contabilidade/8e215a6b5953b940d228e272888586eb4e8df53e/src/assets/icones/phone-call.svg"
										alt="">
									(11) 94636-4636
								</span>
								<span style="display: flex;">
									<img width="20" height="20" style="margin-right: 15px;"
										src="https://raw.githubusercontent.com/lucosilva/frontend-clf-contabilidade/8e215a6b5953b940d228e272888586eb4e8df53e/src/assets/icones/email.svg"
										alt="">
									Correia23.lucas@gmail.com
								</span>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- 1 Column Text + Button : FIM -->

			<!-- Email Header : INICIO -->
			<tr>
				<td
					style="height: 155px;border-radius: 0px 0px 6px 6px; ;background-color: #262626; display: flex; flex-direction: column; align-items: center; ">
					<span style="display: flex; align-items: center;">
						<img src="https://github.com/lucosilva/frontend-clf-contabilidade/blob/main/src/assets/logo/clf-logo-white.png?raw=true"
							width="45" height="45" alt="logo CLF" border="0" style="margin: 15px 20px 0px 0px">
						<p style="font-family: Roboto;
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					color: #FFFFFF;">Consultoria Fiscal e Tributária</p>
					</span>

					<p style="font-family: Roboto;
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					color: #FFFFFF; 
					text-align: center;">
						© 2021 CLF  - Todos os direitos reservados.
						<br/>
						<br/>
						Este é um e-mail automático, Ok? Não responda esse e-mail.
					</p>
				</td>
			</tr>
			<!-- Email Header : FIM -->


		</table>
		<!-- Email Body : FIM -->

	</center>
</body>

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