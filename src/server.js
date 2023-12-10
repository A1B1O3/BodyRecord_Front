const express = require('express');
const app = express();

// 미들웨어 설정
// app.use(...);

// 라우트 설정
// app.get(...);

// 서버 실행 - 포트 8080에서 서버 실행
app.listen(8080, function () {
    console.log('Server running on port 8080');
});