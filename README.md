# localStorageUsage

### 윈도우 공유메모리를 사용할 때 localStorage를 적용해보면
### 이런 식으로 코딩을 할 수 있을 것 같다.
### 단점은 생각하지 않고 코딩했으므로 실적용은 어려울 수 있다.

### 시작
1. 다음의 명령어를 입력해서 node.js 시작
```
npm init -y         // node.js 프로젝트 생성
npm install express // Express 모듈 설치
```

2. 다음의 명령어를 입력해서 웹서버 실행
```
node index.js   // index.js가 실행되는 파일
```

3. 웹서버 작동 시 브라우저에서 localhost:3000으로 정상진입

4. 작동
    1. Get New Value button: 새로운 값을 가져오기
        * 여기서는 임시 데이터 생성
        * 실제로는 서버에서 새로운 데이터를 받아오면 됨
    2. Init Value: 값 초기화
    3. 각각의 Tab: 탭들을 클릭하면 value값을 볼 수 있다.