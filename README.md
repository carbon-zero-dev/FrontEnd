# 탄소노노(Carbon zero)

* ✨ publised with [![Deploy with Vercel](https://vercel.com/button)](https://carbon-zero-frontend-git-feat-connectapi-carbon-zero-fe.vercel.appd)

* ✨ contributor <br/>
🙋‍♂️[WonjongOh](https://github.com/dev-owen) <br/>
🙋‍♀️[JayoungLee](https://github.com/joielee09) <br/>

### [ What is Carbon Zero ]

- 

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

[structure 이미지]
- Route53
- 무중단 배포: green-blue deployment로 무중단 배포지원
- CloudWatch로 상태 로깅
- Vercel: FrontEnd WAS 지원
- EC2: 백엔드(SpringBoot) 지원
- Amazon RDS로 MariaDB 지원
- GitAction+ ECR+ ECS: 배포자동화

[file 구조 이미지]
- pages: 라우팅 구현.
- components: 페이지 컴포넌트 구현
- coverage: jest 커버리지 관련 파일
- public: 관련 assets 모음
- recoil: 상태관리 툴 Recoil 관련 파일
- types: TS 타입 모음
- mock/ test: Jest 테스트 툴 관련 파일

### [ 프로젝트 주요기능 ]

1. 제품 리스트 소개
- 우리가 기존에 많이 쓰고 있는 제품들 중에, 재활용이 어렵거나, 재활용 비율이 낮은 제품들을 중심으로 보여준다.
- 바코드를 찍었을 때, 해당 제품 페이지로 이동 가능
- 검색 기능

2. 특정 제품에 대한 대안 제시
- 친환경 제품 추천
- 올바른 재활용 방법 제안
- 일회용품인 경우 안 쓸 수 있는 방법 제시
- 이런 선택을 했을 때 탄소배출이 얼마나 줄어들 수 있는지 정량적인 수치로 제공

3. 리워드(마일리지) 제공
- 탄소배출 경감에 기여, 마일리지 형태의 리워드 제공
- 마일리지 -> 친환경 제품 구매할 수 있게 관련 회사와 협의

4. 시각화 대시보드 페이지
- 개인별, 지역별, 단체별 탄소배출 경감에 얼마나 기여했는지 시각적으로 보여줌

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