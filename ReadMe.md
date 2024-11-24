# 영화 검색 사이트 만들기 프로젝트 <br/>
---
- 자바스크립트 or 타입스크립트 버젼으로 <br/>
- store & router 개념을 활용 <br/>
- vercel 배포 
- vercel 배포 

## 프로젝트 설정 <br/>
---
- `npm init -y`<br/>
- `npm i -D parcel `<br/>
-  json에서 script에 dev 개발용 build 배포용 설정해주기 <br/>
- `reset.css cdn`로 css 리셋하기 <br/>
- `google fonts`로 폰트 설정 <br/>



## 타입스크립트 브랜치 변환 <br/>
- `git checkout -b typescript`<br/>
- `npm i -D typescript`<br/>
- tsconfig.json 생성 환경설정 <br/>

## jsu.js에서의 타입 변경 <br/>
- payload의 타입 선언 <br/>
- el, props ,state public 선언 <br/>
- route 타입 component 선언 createRouter -> index.js에서 컴포넌트로 받음 <br/>
- 스토어 부분 -> 제네릭 <>을 사용하여 타입 선언 -> 여러가지 타입 입력 <br/> 
- SubscribeCallback를 통해 함수 타입으로 만들고 storeObservers에서 함수 타입 배열형태로 받음<br/> 

## 기존의 데이터를 기본으로 interface 자동화 사이트<br/>
- `https://transform.tools/` -> json -> to Typescript선택<br/>
- console창에서 JSON.stringfy()를 사용해서 데이터 추출<br/>


