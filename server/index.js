const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');

const server = new Koa();
const router = new Router();

// Serve static files
server.use(static(path.join(__dirname, '../client/dist')));

// Your API routes would go here
router.get('/api/data', async (ctx) => {
  ctx.body = { message: 'Hello from Koa!' };
});

server.use(router.routes());

module.exports = server;
