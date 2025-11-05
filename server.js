'use strict';

const express = require('express');
const cors = require('cors'); // 引入cors中间件

const PORT = 8888;
const HOST = '0.0.0.0';

const app = express();

// 使用cors中间件，允许所有来源跨域（也可以自定义origin）
// 这里 origin 必须是完整的协议+域名（或ip+端口），不能只写 ip:端口
// 例如：'http://192.168.0.55:5173' 是正确的，'192.168.0.55:5173' 不行
// 开放所有来源跨域
// app.use(cors({
// //     origin: 'http://192.168.0.55', // 只允许前端开发服务器访问
//     origin: ['http://192.168.0.55','http://192.168.0.55:5173'], // 只允许前端开发服务器访问
//     credentials: true // 如果需要携带cookie等凭证
// }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/json', (req, res) => {
    res.json({
        code: 0,
        data :'This is message from node container --xi xi'
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);