const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());

// 必应搜索代理接口
app.get('/api/search', async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const q = req.query.q;
        const url = `https://api.bing.com/qsonhs.aspx?q=${q}&type=json`;
        const result = await axios.get(url);
        res.json(result.data);
    } catch (err) {
        res.status(500).json({ error: '请求失败' });
    }
});

app.listen(3000, () => {
    console.log('代理服务器运行在 http://localhost:3000');
});