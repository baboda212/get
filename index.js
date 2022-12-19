const express = require('express');
const app = express();
const ejs = require('ejs');

//ejs 를  view엔진으로 설정하기
app.set('view engine', 'ejs');
//정적파일 경로 지정(외부css파일 불러오기)
//index.ejs가 html로 변환되어 구동되는 폴더는 public 폴더임(소스경로)
app.use(express.static("public"));

//home 라우팅
app.get('/', function(요청, 응답){
    
    응답.render('pages/index.ejs',{ 
        title: 'About', // title의 변수명은 title이다 일때 간단하게 단축해서 작성 가능
     });
})

//별도로 create에 요청
app.get('/create', function(요청, 응답){
    const title = 'About';
    //form에서 (클라이언트) 에서 요청한 name값
    let name = 요청.query.name;
    console.log(name);
    응답.render('pages/about.ejs', {title, name});
})

//coffee제품 페이지
app.get('/coffee', function(req, res){
    let title = '커피페이지';
    let name = req.query.name;
    console.log(name);
    res.render('pages/coffee.ejs', {title, name});
})


//about 라우팅
app.get('/about', function(req, res){
    res.render('pages/about.ejs',{
        name: '홍길동',
        title:'About', //구지 선언할 필요 없이 직접 변수를 넣을수 있음. 
        age: 30 ,
        adress: '안양',
    });
})

const port = 3001;
app.listen(port,() =>{
    console.log(`sever running at ${port}`);
});