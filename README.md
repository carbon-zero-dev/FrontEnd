# 탄소노노(Carbon zero)

* ✨ publised with [![Deploy with Vercel](https://vercel.com/button)](https://carbon-zero-frontend-git-feat-connectapi-carbon-zero-fe.vercel.appd)

* ✨ contributor <br/>
🙋‍♂️[WonjongOh](https://github.com/dev-owen) <br/>
🙋‍♀️[JayoungLee](https://github.com/joielee09) <br/>

### [ What is Carbon Zero ]


### [ 개발환경 ]

- node: v14.17.4
- npm: 6.14.14
- next: "^11.0.1"
- typescript: ^4.3.5
- react: "^17.0.2"
- jest: "^27.0.6"

### [ 개발도구와 선택이유 ]

- NextJS:
    웹 어플리케이션이기 때문에 SSR을 지원하는 NextJS를 선택
    Babel 내장
    Webpack 내장
    hot encoding 내장
- 통신: axios : Node를 지원하고 JSON 데이터를 자동으로 변환해주는 axios 선택.
- ESLint, Prettier: 주요 사용 툴인 nextJS 라이브러리의 eslint를 사용.
- Styled-components: html 태그의 스타일 지정하는 툴로 각 요소를 개별적으로 관리하기에 용이해 사용.
- Jest: zero-config 테스트 툴로 개발 기간이 짧은 프로젝트에 사용하기 적합해 사용.
- Enzyme: React의 개별 컴포넌트를 테스팅 하기 위해 사용.
- CI: github
- Deploy: Vercel

### [ 시스템 구성 및 아키텍처 ]

![structure](https://user-images.githubusercontent.com/67178982/132516863-f0fc6198-6546-4b95-9954-bd10c1852c06.png)
(업데이트 예정)
- Route53
- 무중단 배포: green-blue deployment로 무중단 배포지원
- CloudWatch로 상태 로깅
- Vercel: FrontEnd WAS 지원
- EC2: 백엔드(SpringBoot) 지원
- Amazon RDS로 MariaDB 지원
- GitAction+ ECR+ ECS: 배포자동화

![file 구조](https://user-images.githubusercontent.com/67178982/132516775-3a587315-2bfa-49c1-9e97-93eb7772f767.PNG)
(업데이트 예정)
- pages: 라우팅 구현.
- components: 페이지 컴포넌트 구현
- coverage: jest 커버리지 관련 파일
- public: 관련 assets 모음
- recoil: 상태관리 툴 Recoil 관련 파일
- types: TS 타입 모음
- mock/ test: Jest 테스트 툴 관련 파일

### [ 프로젝트 주요기능 ]

1. 제품 리스트 제공
- 일반 제품과 친환경 제품 두 가지 종류를 모두 제공.
- 친환경 제품의 certificate을 제공.
- 일반 제품 대신 구매할 수 있는 친환경 제품을 추천.
- 각 제품의 탄소배출양을 알려준다.
- 정렬 기능
- 검색 기능

2. 선택한 제품에 대한 친환경 제품 추천
일반 제품 대신 구매할 수 있는 친환경 제품을 추천해준다.

### [ 설치 및 사용방법 ]

개발용:

1. git clone https://github.com/joielee09/NextTS-template.git <br/>
2. cd NextJS-template <br/>
3. npm install (at root dir) <br/>
4. npm run dev <br/>

테스트용:

1. git clone https://github.com/joielee09/NextTS-template.git <br/>
2. cd NextJS-template <br/>
3. npm install (at root dir) <br/>
4. (한 번 만 테스트 ) npm run test <br/>
5. (--watchAll 옵션) npm run test:watch <br/>

배포용:

1. git clone https://github.com/joielee09/NextTS-template.git <br/>
2. cd NextJS-template <br/>
3. npm install (at root dir) <br/>
4. npm run build <br/>
5. npm run start <br/>
