node.js 환경구성하기

터미널에 입력할 코드
1. npm init
2. npm install nodemon -g
- nodemon : 프로젝트 폴더의 파일들을 모니터링, 파일 수정되면 서버를 자동으로 restart 시켜주는 패키지
3. package.json의 debug 밑에 "start" : "nodemon index.js" 추가해주기
- 그러면 index.js 파일을 모니터링