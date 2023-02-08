# wanted-pre-onboarding-challenge-fe

<div align=center>
  <img src="https://img.shields.io/badge/CRA-5.0.1-09D3AC?&logo=createreactapp" />
  <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/React_Router-^6.6.1-CA4245?logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Query-^4.22.0-FF4154?logo=reactquery&logoColor=white" />
</div>
<div align=center>
  <img src="https://img.shields.io/badge/Styled_Components-^5.3.6-DB7093?logo=styledcomponents&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-^4.9.4-3178C6?logo=typescript&logoColor=white" />
</div>
<br>

### 데모링크 : [crud0626-todolist.vercel.app](https://crud0626-todolist.vercel.app/)

|| 테스트 계정 |
|---|---|
|ID|`abcd@naver.com`|
|PW|`12345678`|

## 프로젝트 설명

- **[메인 페이지]**<br> 투두리스트 아이템 추가, 수정, 삭제

<div align='center'>
  <img width='700' src="https://user-images.githubusercontent.com/72868495/213367397-7f7afc1c-d043-4f74-a05e-c184696e8dd7.gif" />
</div>

- **[로그인 화면]**<br>

<div align='center'>
  <img width='700' src="https://user-images.githubusercontent.com/72868495/213435501-c1e4c599-d86f-4e62-8cc6-ae613f9c00ee.gif" />
</div>

- **[회원가입 화면]**<br>
<div align='center'>
  <img width='700' src="https://user-images.githubusercontent.com/72868495/213435542-1c87ca2a-8adf-455a-b555-e6241d8f5563.gif" />
</div>

## 실행방법

- server

```
> cd backend

> yarn install

> yarn start # http://localhost:8080
```

- client

```
> cd client

# API 엔드포인트 설정
> echo REACT_APP_API_END_POINT=http://localhost:8080 > .env

> npm install

> npm start # http://localhost:3000
```

## 폴더구조

```
src
├─assets   # 이미지, 로고와 같은 정적 파일
├─components
│  ├─Footer
│  ├─Header
│  ├─Router
│  └─Section
│      ├─DetailBox
│      │  ├─DetailContent
│      │  └─DetailForm
│      ├─LoginBox
│      ├─SignUpBox
│      │  └─ValidBox
│      └─TodoBox
│          └─TodoList
├─config
├─constants   # 재사용되거나 오타 입력시 오동작을 유발할 수 있는 값
├─hooks
│  ├─common
│  └─queries
│      ├─auth
│      └─todo
├─pages   # 라우터 관련 페이지 컴포넌트
├─service   # API호출 로직
├─store   # Redux의 store와 reducer
│  └─reducer
├─styles   # 공통 스타일 컴포넌트와 mixins
│  ├─common
│  └─mixins
├─types
└─utils   # 여러 컴포넌트에서 재사용되는 함수
```

1차적으로 기능에 따라 레이어를 분리하였으며 컴포넌트 폴더 내부에서는 관련된 파일들을 동일 폴더에 배치하여 추후 유지보수 및 특정 모듈 요소를 탐색하는데 용이하도록 위와 같은 폴더 구조를 사용하였습니다.

### 기술스택

- **React**

- **React-query**<br> 이번 챌린지를 통해 단기간에 익히고 적용해보았습니다.<br> 초기에는 서버의 상태를 별도로 관리한다는 개념이 와닿지 않았는데 Redux에서 서버 관련 상태와 로직들을 걷어내다보니 비동기 함수로 인해 생긴 과도한 보일러플레이트 코드를 없애고 불필요한 반복 요청을 줄일 수 있다는점이 장점이였다고 생각합니다.

- **React-router**<br> 메인, 로그인, 회원가입 3가지의 페이지로 분기하기 위해 적용하였습니다.

- **Redux**<br> user와 todo로 나눠진 두 유형의 상태들을 효과적으로 관리하고 props driling을 방지하기 위해 Redux를 도입하였습니다.<br> 보일러플레이트가 많다는 단점이 있지만 FLUX 패턴 덕분에 상태 변화를 예측하기 쉽다는 점, 자체적으로 개발자도구를 지원하는 점이 장점이라고 생각하여 적용하였습니다.

- **TypeScript**<br> 챌린지 신청을 늦게 하여 초기에는 빠르게 진행하기 위해 JS를 사용하였고 이후 리팩토링 과정에서 TS로 마이그레이션을 진행하였습니다.<br> JS에 비해 코드 작성에 소요되는 비용이 많지만 타입 명시를 통해 얻는 안정성과 문서화 효과 등 장점이 많기에 적용하였습니다.

- **Styled-components**<br> 리액트와 스타일간에 변수를 공유할 수 있고 props에 따른 스타일링 변화가 쉬우며 클래스명의 중복과 네이밍 규칙에 대해 큰 신경을 쓰지 않아도 된다는 장점이 있어 적용하였습니다.

## 과제 진행시 주안점

- 특정 파일에 대한 경로를 예측하기 쉽고 손대기 쉬운 폴더구조를 구성하고자 했습니다.

- 변수와 함수, 컴포넌트와 같은 요소들의 이름만으로도 그들의 목적과 역할을 나타낼 수 있는 이름을 작성하고자 하였습니다.

- 리액트 쿼리를 사용해 클라이언트와 서버의 상태를 분리했을 때의 차이점과 효과를 명확히 이해하고 적용하고자 했습니다.

## 과제 요구사항

<details>
  <summary>
    <h3>
      1 - Login / SignUp
    </h3>
  </summary>
  <div markdown="1">

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요

  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

    </div>
  </details>

<details>
  <summary><h3>2 - TodoList</h3></summary>
  <div markdown="1">

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

    </div>
  </details>
