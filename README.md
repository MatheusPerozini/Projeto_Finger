# Distribuicao-Leads API

## ℹ️ About Distribuicao-Leads API
API responsable for connecting the bot dialog-flow

## Getting started

- [ ] To access you have to put the **Secret Key** inside the header in every request.

- [ ] Must check also if the request is coming from a domain inside on the **CORS whitelist**.


## 🛠 Built with

This project was developed with the following technologies:

-   [Express](https://www.npmjs.com/package/express)
-   [Axios](https://www.npmjs.com/package/axios)
-   [VS Code](https://code.visualstudio.com/)
-   [CORS](https://www.npmjs.com/package/cors)
-   [Celebrate](https://www.npmjs.com/package/celebrate)
-   [MySql driver](https://www.npmjs.com/package/mysql)


## 🚀 How to run

```bash
# Clone this repository
$ git clone https://gitlab.com/unitybrasil/api-bot-omni.git

# Access the project folder
$ cd api-bot-omni

# install all dependencies
$ npm install

#execute the server
$ npm start

```
For debug porpuse: 

```bash
$ yarn debug
```

## 📨 Requests

Router: **/distribuicaoLead/recupera/{id_distribuicao_lead}**

Method: **GET**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Success:
 ```response
[
	{
		id: number,
		id_empresa: number,
		descricao: string,
		sequencia: string,
		ultimo_usado: number,
		data_cadastro: date,
		data_alteracao: date,
		removido: number,
		ativo: number,
		id_equipe: number,
		por_horario: number,
		usuario_padrao ?: number
	}
]
```
<h1></h1>

Router: **/distribuicaoLead/listar/{id_empresa}**

Method: **GET**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Success:
 ```response
[
	{
		id: number,
		id_empresa: number,
		descricao: string,
		sequencia: string,
		ultimo_usado: number,
		data_cadastro: date,
		data_alteracao: date,
		removido: number,
		ativo: number,
		id_equipe: number,
		por_horario: number,
		usuario_padrao ?: number
	}
]
```
<h1></h1>

Router: **/distribuicaoLead/definirUsuario?id_empresa=number&id_equipe=number**

Method: **GET**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Success:
 ```response
{
	proximo: string
}
```

<h1></h1>

Router: **/distribuicaoLead/removerUsuario?id_empresa=number&id_usuario=number**

Method: **GET**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Success:
 ```response
{
	msg: "alterado com sucesso"
}
```

<h1></h1>

Router: **/distribuicaoLead/salvar**

Method: **POST**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Body:
```response
{
    id: <REQUIRED> : number {id_distribuicao_lead},
    id_empresa: <REQUIRED> : number,
    to: <NOT_REQUIRED> : number[ {id_usuario} ],
    ultimo_usado: <NOT_REQUIRED> : number {id_usuario},
}
```

Success:
 ```response
{
	msg: "alterado_sucesso"
}
```

<h1></h1>

Router: **/distribuicaoLead/deletar/{id_empresa}**

Method: **DELETE**

Header:
 ```response
  {
    'Content-Type': 'application/json',
    'access_key': 'secret_key'
  } 
```

Body:
```response
{
    ids: <REQUIRED> : number[ {id_usuario} ],
}
```

Success:
 ```response
number[ {id_usuario} ]
```