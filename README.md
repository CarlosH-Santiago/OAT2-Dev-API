# OAT 2 - Consumo de APIs Públicas (PokéAPI & ReqRes)

Este projeto é uma aplicação Web desenvolvida para a disciplina de **Desenvolvimento de APIs**. O objetivo é demonstrar o consumo de duas APIs públicas simultaneamente, utilizando arquitetura REST, JavaScript (Fetch API) e um servidor Node.js com Express.

## 📋 Funcionalidades

A aplicação é dividida em duas seções interativas, respeitando o princípio de **Mobile First**:

1.  **PokéDex (PokéAPI):**

      * **Método:** `GET`
      * Busca informações reais de Pokémons (imagem, ID, nome, tipos) a partir de um nome ou ID fornecido pelo usuário.

2.  **Gerenciamento de Treinador (API ReqRes):**

      * Simula um sistema de cadastro (CRUD) para um "Treinador".
      * **Método:** `POST` - Cria um novo perfil de treinador.
      * **Método:** `PUT` - Edita as informações de um treinador (simulado no ID 2).
      * **Método:** `DELETE` - Remove um perfil de treinador (simulado no ID 2).

## 🛠️ Tecnologias Utilizadas

  * **Backend:** Node.js, Express.js (para servir os arquivos estáticos).
  * **Frontend:** HTML5, CSS3 (Bootstrap 5 + Custom CSS), JavaScript (ES6+ Async/Await).
  * **APIs:**
      * [PokéAPI](https://pokeapi.co/) (v2)
      * [ReqRes.in](https://reqres.in/)
  * **Conceitos:**
      * Arquitetura REST (consumo de *endpoints*).
      * Manipulação de DOM.
      * Requisições HTTP Assíncronas (Fetch API).
      * Design Responsivo (Mobile First).

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1.  **Clone ou baixe** este repositório.
2.  Abra o terminal na pasta do projeto.
3.  Instale as dependências do projeto (o framework Express):
    ```bash
    npm install
    ```
4.  Inicie o servidor:
    ```bash
    node server.js
    ```
5.  Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## 📂 Estrutura de Pastas

  * `server.js`: Arquivo principal do servidor backend (com todos os comentários exigidos).
  * `README.md`: Este arquivo.
  * `package.json`: Definições do projeto Node.js.
  * `public/`: Contém todos os arquivos do frontend.
      * `index.html`: Estrutura da página.
      * `style.css`: Estilização personalizada (tema escuro).
      * `script.js`: Lógica de consumo das APIs e manipulação do DOM.

-----

**Alunos:** Caralos Henrique de Souza Santana Santiago; <br> Murillo dos Santos Marinho Ferreira
<br>
**Disciplina:** Desenvolvimento de APIs