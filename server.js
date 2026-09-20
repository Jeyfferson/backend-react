const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Habilita o CORS para permitir requisições do Netlify
server.use(cors());
server.use(middlewares);
server.use(router);

// O Render define a porta automaticamente através do process.env.PORT
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});