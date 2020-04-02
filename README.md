# Realtime Chat

Aplicação simples de chat desenvolvida em Node.js, utilizando Socket.IO para funcionalidade de troca de mensagens em tempo real.

Foi desenvolvida como estudo de Node.js e tecnologias relacionadas para aplicações web.

## Principais tecnologias utilizadas
- [Express.js](https://expressjs.com/pt-br/) (framework para desenvolvimento web com Node.js);
- [Socket.IO](https://socket.io/) (funcionalidades de tempo real do chat);
- [Body parser](https://github.com/expressjs/body-parser) (Permite que clientes externos possam enviar informação para sua aplicação Node. js);
- [Bootstrap](https://getbootstrap.com/) (framework CSS);
- [Consign](https://github.com/jarradseers/consign) (Gerenciamento de rotas);
- [EJS](https://ejs.co/) (Linguagem de modelagem para criação de páginas HTML utilizando JavaScript);



## Como testar

Como pré-requisitos, é necessário instalar o [Node.js](https://nodejs.org/en/download/) 

Com a aplicação instalada, abra o terminal ou prompt de comando (dependendo do sistema operacional utilizado) na pasta da aplicação. Em seguida, execute os seguintes comandos, em sequência:

```
npm install
node app
```

**Observação:** pode ser necessário utilizar `sudo` para instalar as dependências caso esteja usando Linux ou MacOS.

Após executar esses comandos, navegue  para `http://localhost:3000/`para visualizar a tela inicial da aplicação.

## Limitações

Como a aplicação foi desenvolvida com o intuito de apresentar as capacidades do Node.JS a novos desenvolvedores, a aplicação possui um escopo bem limitado, contendo apenas o básico para funcionamento do chat.

Algumas bibliotecas são importadas de CDNs diretamente nas views ou foram incluídas manualmente na pasta do projeto. Podem haver bugs de utilização e de segurança, então utilize a aplicação apenas para fins educativos.