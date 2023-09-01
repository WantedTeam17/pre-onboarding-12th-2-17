# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 2주 차 과제 (기업)

## 👥 Member Info

### 이유승(Team Leader), 백하람, 변혜빈, 양음정, 임정훈

<br/>
<br/>

## 💪🏻 과제의 목표와 진행 방법

2주 차 기업과제는 특정 GitHub 레파지토리의 이슈 목록과 각 이슈의 상세 내용을 확인하는 웹 사이트를 구축하는 것으로 Best Practice를 도출하고 동료들과의 협업을 통해 지식을 공유하고 확장하는 것을 주요 목표로 삼았습니다.

### ✔️ BEST 선정 기준

코드의 가독성, 재사용성, 유지보수성이 가장 최적에 가까운 구현 방식을 BEST로 선정하였습니다.

<br/>
<br/>

## ✔️ 배포

- `AWS S3` [🔗Link](http://pre-onboarding-12th-2-17.s3-website.ap-northeast-2.amazonaws.com/)

<br/>
<br/>

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (3가지 중 1가지 선택)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행
  > 3. 아래 키워드를 통한 실행
```bash
$ git clone https://github.com/WantedTeam17/pre-onboarding-12th-2-17.git
$ cd pre-onboarding-12th-2-17
$ npm install
$ npm run start
```

<br/>
<br/>

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-gray?style=for-the-badge&logo=github)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img src="https://img.shields.io/badge/GITHUB OCTOKIT-181717?style=for-the-badge&logo=Github&logoColor=white">

<br/>
<br/>

## 📈 Best Practice Process

1. 프로젝트 구현 전 출제된 과제의 범위, 요구 사항 등을 분석하여 1차 모범사례 도출
2. 1차에 도출된 모범사례를 기반으로 프로젝트의 전반적인 이해와 최종 모범사례 도출을 위해 각자 요구사항 전체를 구현
3. 구현해 본 경험을 바탕으로 구현 시 고민했던 사항들을 토론하며 기능, 구조, UI, 컨벤션 등 각 항목의 최종 모범 사례 도출
4. 선정 사항을 기반으로 각 기능을 담당자별로 나누어 구현함으로써 체계적으로 관리하고 효율적으로 협업

<br/>
<br/>

## 🚀 요구사항

- 필수 요구사항

  - [x] 로딩 및 에러 화면 구현

- `/` 이슈 목록 페이지

  - [x] 특정 레파지토리의 이슈 목록 출력
  - [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - [x] 다섯 번째 셀마다 광고 이미지 출력
  - [x] 화면을 아래로 스크롤 시 추가 이슈 목록 로딩 (Infinity Scroll)

- `/issue:id` 이슈 상세 페이지
  - [x] 이슈의 상세 내용 표시

<br/>
<br/>

## ✨ Assignments별 구현 방식

#### 과제 소개

#### [Assignment 1] 이슈 데이터 가져오기

- GitHub Octokit 라이브러리를 사용
- 비동기 통신으로 API 로직 Custom Hook으로 구현

#### [Assignment 2] Open 상태인 이슈를, Comment가 가장 많은 순서대로 정렬하여 출력

- GitHub REST API에서 지원하는 parameters를 이용하여 정렬

#### [Assignment 3] 이슈 데이터를 출력할 때, 5번째 셀마다 광고 이미지 출력하기

- map 함수의 index 속성을 이용하여 일정 순서마다 지정된 광고 이미지가 출력되도록 구현

#### [Assignment 4] 이슈 데이터를 출력하는 무한 스크롤 기능 구현하기

- IntersectionObserver API를 사용해서 이슈 목록의 마지막 요소를 관찰자로 등록하고 해당 요소가 뷰포트에 포함될 때 이슈 목록 추가 로딩

#### [Assignment 5] 이슈 상세 페이지 구현

- 이슈 목록에서 특정 이슈 클릭 시 이슈 상세 페이지로 이동

#### [Assignment 6] 이슈 상세 페이지의 마크다운 렌더링

- react-markdown 라이브러리 사용

#### [Assignment 7] 데이터가 요청 중 로딩 화면을 렌더링

- API 호출 로직이 포함된 custom hook을 이용하여 데이터 및 로딩 상태를 관리하고, 상태 값에 따라 로딩 화면 렌더링

#### [Assignment 8] 에러 핸들링

- 에러 상태를 관리하는 Custom Hook을 구현해서 관리하고 상태 값에 따라 에러 페이지를 화면에 렌더링

<br/>
<br/>

## 🔥 과제 진행 방법

- 협업 도구(디스코드의 음성 채널, 화면 공유, 노션 팀 페이지) 및 트러블 슈팅 페이지를 통해 정보를 공유하고, 함께 팀의 역량을 향상하는 데 집중했습니다.
  [🔗 노션 팀스페이스](https://shorturl.at/exMQ8)
- 깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 코딩 표준을 도입하였으며, 이를 실제 프로젝트에 적용해 보면서 발생한 의문점과 개선 사항을 반영하였습니다.
  [🔗 코딩 컨벤션](https://shorturl.at/dAO08)

<br/>
<br/>

## 🐿️ 프로젝트 성능 진단

### 이슈 목록 페이지

![이슈 목록 페이지](https://github.com/WantedTeam17/pre-onboarding-12th-2-17/assets/88275787/34d0c0db-4905-4034-a1b2-dc1d7ddb06cf)

### 이슈 상세 페이지

![이슈 상세 페이지](https://github.com/WantedTeam17/pre-onboarding-12th-2-17/assets/88275787/8e4050dd-9c8e-42dc-a511-2e7c0bb1295e)

<br/>
<br/>

## 🌲프로젝트 구조

```bash
src/
├── api/
│   ├── issue.ts
│   ├── octokit.ts
│   └── repoData.ts
├── components/
│   ├── AdBanner/
│   │   └── AdBanner.tsx
│   ├── Issue/
│   │   ├── IssueAuthor.tsx
│   │   ├── IssueBodyContent.tsx
│   │   ├── IssueItem.tsx
│   │   └── IssueList.tsx
│   ├── Markdown/
│   │   └── MarkdownRenderer.tsx
│   └── UI/
│       ├── Error/
│       │   └── ErrorComponent.tsx
│       ├── Loading/
│       │   ├── LoadingComponent.tsx
│       │   ├── SkeletonComponent.tsx
│       │   └── SkeletonItem.tsx
│       └── Button.tsx
├── constants/
│   ├── color.ts
│   └── style.ts
├── hooks/
│   ├── useError.ts
│   ├── useInfiniteScroll.ts
│   ├── useIssueData.ts
│   ├── useLoading.ts
│   └── useRepoData.ts
├── laout/
│   ├── Header.tsx
│   └── PageLayout.tsx
├── pages/
│   ├── ErrorPage.tsx
│   ├── IssueDetailPage.tsx
│   └── IssueListPage.tsx
├── utils/
│   └── convertDate.ts
├── App.tsx
├── index.css
├── index.tsx
└── routes.tsx
```
