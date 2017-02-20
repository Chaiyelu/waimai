const jsonServer = require('json-server')
const uuid = require('node-uuid');
const bodyParser = require('body-parser')
const low = require('lowdb')
const storage = require('lowdb/file-async')

// import jsonServer from 'json-server';
// import uuid from 'node-uuid';
// import bodyParser from 'body-parser';

// import low from 'lowdb';
// import storage from 'lowdb/file-async';

var crypto = require('crypto');

//创建一个Express服务器
const server = jsonServer.create();

//使用json-server默认选择的中间件（logger，static, cors和no-cache）
server.use(jsonServer.defaults());

//使用body-parser中间件
server.use(bodyParser.json());

//数据文件
const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

//创建一个lowdb实例
const db = low(dbfile, {storage});



var md5 = function(str) {
  return crypto
      .createHash('md5')
      .update(str.toString())
      .digest('hex');
};

//获取卖家信息
server.get('/seller', (req, res) => {
  const seller = db('seller');
  res.json({'success':true, data:seller});
});

//获取货物信息
server.get('/goods', (req, res) => {
  const goods = db('goods');
  res.json({'success':true, data:goods});
});


server.get('/ratings', (req, res) => {
  const ratings = db('ratings');
  res.json({'success':true, data:ratings});
});

//路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);

//启动服务，并监听5000端口
server.listen(5001, () => {
  console.log('server is running at ', 5001, dbfile);
});
