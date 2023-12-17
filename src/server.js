// const express = require('express');
// const app = express();

// // 미들웨어 설정
// // app.use(...);

// // 라우트 설정
// // app.get(...);

// // 서버 실행 - 포트 8080에서 서버 실행
// app.listen(8080, function () {
//     console.log('Server running on port 8080');
// });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.post('/', function(req, res) {
    console.log(req.body);
    
    res.status(200).send('POST 요청을 받았습니다.');
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});
