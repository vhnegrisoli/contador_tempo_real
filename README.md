# contador_tempo_real

Contador em tempo real utilizando 2 aplicações em React e um servidor em Node.js com Express, MongoDB e Socket.io

## Tecnologias

* Node.js
* Express.js
* Socket.io
* React.js
* Axios
* SocketIO Client
* Mongoose
* Banco de Dados NoSQL - MongoDB

Foram criados 2 aplicativos simples em React, um que possui um formulário para inserir um nome de usuário, um
botão de incrementar o valor do estado da aplicação e um para enviar.

Ao enviar, é recebido por um endpoint em um servidor NodeJs, que gera um log e salva em um banco de dados MongoDB,
e, por fim, recebe esse objeto salvo e emite uma mensagem para o socket "chat message" utilizando Socket.io.

A segunda aplicação em React fica ouvindo as mensagens do socket.io utilizando SocketIO Client e atualiza o estado, sempre 
recebendo, em tempo real, o dado atualizado do outro aplicativo.

## Instalação

Basta adentrar a cada diretório e digitar: 

```
yarn
```

Para rodar as aplicações front-end:

```
yarn start
```

Estarão disponíveis nos endereços:

```
http://localhost:3000
http://localhost:3001
```

Para rodar o back-end:

```
yarn dev
```

Ficará disponível no endereço:

```
http://localhost:8080
```
