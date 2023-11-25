
# Gerenciador Escolar
## Descrição
Este projeto é uma aplicação Node.js desenvolvida em TypeScript, utilizando o framework Express e o ORM Sequelize. Gerencia informações de usuários, estudantes e endereços, oferecendo rotas para autenticação de usuários e interações com o banco de dados. O projeto visa fornecer uma estrutura escalável e modular para aplicações web, com suporte a autenticação de usuários e gerenciamento de dados relacionais. Colaborador: Vinicus Tibo.

## Bibliotecas Utilizadas
Express: Um framework minimalista e flexível de aplicação web Node.js que oferece um conjunto robusto de recursos.
Sequelize: Um ORM (Object-Relational Mapping) Node.js baseado em promessas para PostgreSQL, MySQL, MariaDB, SQLite e Microsoft SQL Server.
Bcryptjs: Biblioteca para hash e comparação de senhas.
Jsonwebtoken (JWT): Para geração e verificação de tokens JSON web.
http-status-codes: Biblioteca para códigos de status HTTP.
[Qualquer outra biblioteca que você esteja usando...]
Tipo de Programação
O projeto é desenvolvido usando TypeScript, um superset do JavaScript que adiciona tipos estáticos e outras funcionalidades à linguagem.

## Estrutura do Projeto
app: Contém a lógica principal da aplicação.
controllers: Gerencia as requisições recebidas e o fluxo de dados entre o modelo e as visões.
middlewares: Middlewares personalizados para o Express.
models: Modelos Sequelize representando tabelas do banco de dados.
routes: Define as rotas da aplicação.
services: Lógica de negócios e interações com o banco de dados.
config: Arquivos de configuração para a aplicação.
database: Arquivos relacionados ao banco de dados, como migrações e seeds.
types: Tipos e interfaces TypeScript personalizados.
README.md: Documentação para o projeto.
### Rotas
POST /login: Endpoint para autenticação de usuário. Espera um payload JSON com credenciais de usuário.
[Quaisquer outras rotas que você tenha implementado...]
## Como Executar
Este projeto pode ser executado de duas maneiras:

### Docker
Para executar este projeto usando Docker, siga os passos abaixo:

Instale o Docker e o Docker Compose. [Link para instalação do Docker Compose](https://docs.docker.com/compose/install/)

Execute o seguinte comando para iniciar a aplicação:
```ruby
bash
Copy code
docker-compose up -d
```

O frontend estará disponível em [localhost:3001](http://localhost:3001), e o backend em [localhost:3000](http://localhost:3000).

### Localmente
Se preferir executar localmente, siga os passos abaixo:

Clone o repositório.

Execute o seguinte comando para instalar as dependências:
```ruby
bash
Copy code
npm install
Execute o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

bash
Copy code
npm run dev
```
O frontend estará disponível em [localhost:3001](http://localhost:3001), e o backend em [localhost:3000](http://localhost:3000).

## Banco de Dados
O projeto utiliza o Sequelize como ORM e suporta as seguintes entidades:

User: Representa informações do usuário.
Student: Representa informações do estudante.
Address: Representa informações de endereço.
Executando Testes
[Se você tiver testes, forneça instruções sobre como executá-los.]

## Variáveis de Ambiente
SECRET_TOKEN: Chave secreta para a geração de tokens JWT.
Certifique-se de definir essas variáveis de ambiente antes de executar a aplicação.

## Contribuições
[Vinicius Tibo](https://github.com/vinTibo)
