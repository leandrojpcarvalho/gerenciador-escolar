
# Gerenciador Escolar

## Descrição 
<details>
<summary>backend</summary>
Este projeto é uma aplicação Node.js desenvolvida em TypeScript, utilizando o framework Express e o ORM Sequelize. Gerencia informações de usuários, estudantes e endereços, oferecendo rotas para autenticação de usuários e interações com o banco de dados. O projeto visa fornecer uma estrutura escalável e modular para aplicações web, com suporte a autenticação de usuários e gerenciamento de dados relacionais.

### Tipo de Programação
O projeto é desenvolvido usando TypeScript em class, um superset do JavaScript que adiciona tipos estáticos e outras funcionalidades à linguagem.

## Bibliotecas Utilizadas
 * Express: Um framework minimalista e flexível de aplicação web Node.js que oferece um conjunto robusto de recursos.
 * Sequelize: Um ORM (Object-Relational Mapping) Node.js baseado em promessas para PostgreSQL, MySQL, MariaDB, SQLite e Microsoft SQL Server.
 * Bcryptjs: Biblioteca para hash e comparação de senhas.
 * Jsonwebtoken (JWT): Para geração e verificação de tokens JSON web.
 * http-status-codes: Biblioteca para códigos de status HTTP.


## Estrutura do Projeto
* app: Contém a lógica principal da aplicação.
* controllers: Gerencia as requisições recebidas e o fluxo de dados entre o modelo e as visões.
* middlewares: Middlewares personalizados para o Express.
* models: Modelos Sequelize representando tabelas do banco de dados.
* routes: Define as rotas da aplicação.
* services: Lógica de negócios e interações com o banco de dados.
* database: Arquivos relacionados ao banco de dados, como migrações e seeds.
README.md: Documentação para o projeto.
### Rotas
* POST /login: Endpoint para autenticação de usuário. Espera um payload JSON com credenciais de usuário.

### Banco de Dados
O projeto utiliza o Sequelize como ORM e suporta as seguintes entidades:

 * User: Representa informações do usuário.
* Student: Representa informações do estudante.
* Address: Representa informações de endereço.


### Variáveis de Ambiente
SECRET_TOKEN: Chave secreta para a geração de tokens JWT.
Certifique-se de definir essas variáveis de ambiente antes de executar a aplicação.
</details>

<details>
<summary>frontend</summary>

Este projeto frontend do Gerenciador Escolar é desenvolvido em React.js e TypeScript. Ele faz parte de um sistema que gerencia informações de usuários, estudantes e endereços, proporcionando rotas para autenticação de usuários e interações com o backend, construído com Node.js, Express e Sequelize.

## Bibliotecas Utilizadas

Este projeto frontend do Gerenciador Escolar utiliza as seguintes bibliotecas:

* React.js: Uma biblioteca JavaScript para a construção de interfaces de usuário.
* TypeScript: Um superset do JavaScript que adiciona tipos estáticos à linguagem.
* Redux: Uma biblioteca de gerenciamento de estado que auxilia no controle do estado da aplicação.
* React-Redux: Facilita a integração do Redux com o React.
* axios: Uma biblioteca para fazer requisições HTTP.
* react-router-dom: Facilita a navegação entre diferentes componentes React.
* @reduxjs/toolkit: Fornece funcionalidades adicionais e simplifica o uso do Redux.
* redux-thunk: Middleware para lidar com ações assíncronas no Redux.
* @testing-library/react: Biblioteca de testes para componentes React.


 ## Estrutura do Projeto

* src: Contém a lógica principal da aplicação.
 * components: Componentes reutilizáveis da aplicação.
* models: Modelos utilizados na aplicação.
* redux: Configurações e ações do Redux.
* store: Configurações da store do Redux.
* view: Componentes responsáveis pelas diferentes visualizações da aplicação.
* index.tsx: Arquivo principal da aplicação.
* App.tsx: Componente principal da aplicação.
</details>

## Executando Testes
 em construção

## Como Executar
Este projeto pode ser executado de duas maneiras:

### Docker
Para executar este projeto usando Docker, siga os passos abaixo:

Instale o Docker e o Docker Compose. [Link para instalação do Docker Compose](https://docs.docker.com/compose/install/)

Execute o seguinte comando para iniciar a aplicação:
```ruby
docker-compose up -d
```

O frontend estará disponível em [localhost:3001](http://localhost:3001), e o backend em [localhost:3000](http://localhost:3000).

### Localmente
Se preferir executar localmente, siga os passos abaixo:

Clone o repositório.

Execute o seguinte comando para instalar as dependências:
```ruby
npm install
```

Execute o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

```ruby
npm run dev
```
O frontend estará disponível em [localhost:3001](http://localhost:3001), e o backend em [localhost:3000](http://localhost:3000).



## Contribuições
[Vinicius Tibo](https://github.com/vinTibo)
