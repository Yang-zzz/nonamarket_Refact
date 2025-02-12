# 1인 가구를 위한 공유 냉장고 노나먹자 - Refactoring 🍴

# [🔥🔥🔥Refactoring 항목으로 바로 이동하기🔥🔥🔥](#11-진행한-refactoring-내용)

<br/>

- 🔗[배포URL](https://nona-refact.vercel.app/)
- 🔒서비스 이용을 위한 계정  
  id : nonamukza@nona.com <br/>
  pw : 123456
  <br/>

![image](https://user-images.githubusercontent.com/107895498/210313512-a8a33e57-b403-439d-8fcc-32605cab5289.png)

<details>
<summary>목차</summary>
<div markdown="1">
<br/>

1. [프로젝트 소개](#intro)
2. [요구사항](#requirements)
3. [팀원소개](#members)
4. [역할 분담](#roles)
5. [개발 환경](#environments)
6. [UI](#ui)
7. [핵심 코드](#code)
8. [트러블슈팅](#trouble)
9. [폴더 구조](#tree)
10. [프로젝트 소감](#review)
11. [Refactoring](#refactoring)

</div>
</details>

# <sapn id="intro"> 1. 프로젝트 소개 </span>

```jsx
🔸 이 프로젝트는 1인가구에서 남는 식재료 또는 반찬을 공유할 수 있는 SNS 커뮤니티 입니다.

🔸 서비스 사용자들은 포스팅 기능을 통해 사진과 글을 기록하며 1인 가구에 도움이되는 정보를 공유할 수 있습니다.

🔸 무료로 나눔하고 싶거나 판매하고 싶은 물건이 있다면 상품 판매를 등록하고 본인의 SNS에 바로 홍보할 수 있습니다.
```

# <span id="requirements"> 2. 요구사항 </span>

🔐 인증

- 로그인 / 로그아웃
- 회원가입
- 회원 정보 수정
- 유효성 검증

🏕️ 게시글

- 게시글 등록/수정/삭제/신고
- 다중 이미지 파일 업로드/수정/미리보기
- 앨범뷰 / 리스트뷰
- 이미지 슬라이드
- 좋아요 기능

👥 팔로우

- 유저 팔로우/언팔로우
- 팔로잉, 팔로워 리스트

🥗 상품

- 상품 등록/수정/삭제
- 이미지 파일 업로드/수정/미리보기
- 유효성 평가

🔎 검색

- 유저 검색
- 무한 스크롤

💬 댓글

- 댓글 등록, 삭제, 신고
- 댓글 작성 시간
  <br><br>

# 3.<span id="members"> 팀원 소개 </span>

|                                                                      양지성                                                                       |                                                                      방현영                                                                       |                                                                                                 선은혜                                                                                                  |                                                                      한유진                                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src ="https://user-images.githubusercontent.com/107895498/210340041-c4e176b7-a510-4119-aa42-dae8a3c917a8.jpg" width="170px" height="210px"/> | <img src ="https://user-images.githubusercontent.com/107895498/210340227-c0478e03-f21e-4040-9e93-7fdbfebc1116.jpg" width="170px" height="210px"/> | <img src ="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5xRPt%2FbtrRXfkYEZz%2F939HTbExIPUONQKhxDgBj0%2Fimg.jpg" width="170px" height="210px"/> | <img src ="https://user-images.githubusercontent.com/107895498/210340563-714e23bb-5778-42e5-af79-37ca93aec0d6.jpg" width="170px" height="210px"/> |
|                                                      🔗[GitHub](https://github.com/Yang-zzz)                                                      |                                                    🔗[GitHub](https://github.com/Hyeonyeongg)                                                     |                                                         🔗[GitHub](https://github.com/EllaSEON)<br/> 🔗[blog](https://ella951230.tistory.com/)                                                          |                                                      🔗[GitHub](https://github.com/yoyoujin)                                                      |
|                                                                     총괄 팀장                                                                     |                                                                  코드 리뷰 리더                                                                   |                                                                                               회의록 리더                                                                                               |                                                                    디자인 리더                                                                    |

<br>

# 4. <span id = "roles"> 역할 분담 </span>

<img width="6752" alt="nona-role" src="https://user-images.githubusercontent.com/102464638/210340798-8cae5a95-65c0-4de9-8d9f-aae6d6f395d5.png">
<br><br>

### 🛠 공통 담당

- <strong>공통 작업 : 로그인 / 회원가입 / 프로필 등록 / 버튼 컴포넌트</strong>

# 5. <span id="environments"> 개발 환경 </span>

## 1) 개발기간 : 2022.12.09 ~ 2023.01.05

## 2) 기술

- FrontEnd : React, React-router, Styled-components
- BackEnd : 제공된 API 사용

## 3) 협업 도구

- Discord: 실시간 채팅 및 코드 리뷰를 위한 화면 공유
- Notion : 🔗[팀 노션](https://likelion.notion.site/TEAM-HI25-NOTION-eb56f0d2f9c041d08c2359f6a6282b4a)
- VSCode Live Share
- Figma : 🔗[디자인 시안 참고](https://www.figma.com/file/UiVmNohc371gSwo46cobj3/%EB%85%B8%EB%82%98%EB%A8%B9%EC%9E%90?node-id=1067%3A1263&t=9yzZIzAJSqqm9x8T-0)
- 컨벤션 :
  🔗[코드 컨벤션](https://github.com/TEAM-HI25/nonamarket/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)
  🔗[깃허브 컨벤션](https://github.com/TEAM-HI25/nonamarket/wiki/%EA%B9%83%ED%97%88%EB%B8%8C-%EC%BB%A8%EB%B2%A4%EC%85%98)

## 4) 이슈 관리

- 🔗[GitHub Issues](https://github.com/TEAM-HI25/nonamarket/issues) 와 🔗[GitHub Project](https://github.com/orgs/TEAM-HI25/projects/1) 를 사용하여 버전 관리 및 진행 상황을 공유함

![image](https://user-images.githubusercontent.com/102464638/210343011-282720b3-3ea8-4116-9e97-392647158537.png)

## 5) Git Flow

깃 브랜치 전략으로 GitFlow를 선택하였습니다.
큰 규모의 프로젝트에서 주로 사용되는 전략이지만, 기능 단위로 브랜치를 만들어 팀원간의 원활한 작업과 conflict를 최소화하기위해 경험삼아 도입하게되었습니다.
이 프로젝트에서는 규모에 맞게 3개의 브랜치를 사용하였으며 프로젝트기간동안 거의 confilct가 발생하지 않은, 기분좋은 경험을 할 수 있었습니다.

- main : 정식 배포된 버젼을 담고 있는 브랜치
- develop : 현재 개발이 완료된 상태와 일치하는 브랜치
- feature : 기능 개발을 위한 브랜치로, 기능 구현이 완료되면 삭제되는 브랜치

# 6. <span id="ui"> UI </span>

|                                                                  0. Splash                                                                   |                                                                  1. 로그인                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210337920-cd841417-2671-4fdb-9225-c318eedbc00f.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210339846-8b1fe0e2-dbca-43bd-a6e9-046506c7b9aa.gif" width="234" height="540"/> |

|                                                                 2. 회원가입                                                                  |                                                          3. 회원가입 - 프로필 설정                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338666-ac53876b-fb98-40f1-bc93-00bc5cc85239.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210338745-44963538-468f-4eb9-a901-9441b77dd60d.gif" width="234" height="540"/> |

|                                                                  4. 홈피드                                                                  |                                                                   5. 검색                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339750-9df81e06-f974-4c38-8854-beac8eb9f131.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210328938-c24f1c50-a159-413d-a39c-7bc00b21cebd.gif" width="234" height="540"/> |

|                                                                6. 게시글 등록                                                                |                                                                7. 게시글 수정                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338297-4469e07a-727a-4385-81ef-c0f2870f2d56.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210373137-77a9bd5a-d4d1-4b63-8fbb-b9ce8b35a661.gif" width="234" height="540"/> |

|                                                               8. 게시글 삭제                                                                |                                                               9. 게시글 신고                                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339511-0050705f-f92e-4670-a968-4d8c503d2c52.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210338431-ef35e70b-d6d4-4f57-b7d7-2d1e3d2e6d21.gif" width="234" height="540"/> |

|                                                         10. 게시글 댓글 등록 및 삭제                                                         |                                                            11. 게시글 댓글 신고                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338373-bbe3be94-a692-4c42-ba89-9596ec7ac326.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210351956-acd2dfb2-75fb-48d9-a596-e95ed311caa3.gif" width="234" height="540"/> |

|                                                                12. 내 프로필                                                                 |                                                              13. 내 프로필 수정                                                              |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210371913-27174f87-3b64-4ae7-88d5-c6905b4b941b.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210371551-c576205a-1a7f-40f0-8c46-90251c42a64b.gif" width="234" height="540"/> |

|                                                              14. 타 유저 프로필                                                              |                                                                  15. 팔로우                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210371659-48d98d07-0fe8-4941-8207-d087a822eed3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210371381-377aaf96-d649-479f-9700-d46de2f6efc9.gif" width="234" height="540"/> |

|                                                              16. 판매 상품 등록                                                              |                                                          17. 판매 상품 수정 및 삭제                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210339522-b8b0fb7c-0f5e-42e4-824b-ee75cd39e3d3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210339596-0b7661d6-b8c6-48ae-96dd-1076ac8d0964.gif" width="234" height="540"/> |

|                                                                18. 로그아웃                                                                 |                                                                  19. 좋아요                                                                  |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339672-6f04226f-86dc-4858-b1a9-5e146c6e6b0f.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210352545-337e3839-f769-4a27-8f61-cc77ce7774d7.gif" width="234" height="540"/> |

|                                                               20. 404 페이지                                                                |                                                                  21. 채팅                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210352642-af324b81-d61f-4e41-be98-214a79014ca3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210353691-11d38687-41cf-4f61-96ad-16f07095c8e9.png" width="234" height="540"/> |

# 7. <span id = "code"> 핵심 코드 </span>

### 1) useContext

- token, accountname이 여러 컴포넌트 내에서 api통신을 할 때 필요로 하는 것을 발견.
- 전역에서 필요한 token, accountname을 useContext를 이용하여 관리.
- useContext를 사용함으로써 prop drilling을 방지.
- token, accountname을 얻기 위한 불필요한 데이터 요청 방지.

### 2) CustomHook

- 모달 구현 시 모달이 필요한 여러 컴포넌트 내에서 동일한 로직이 반복적으로 사용되는 것을 발견.
- 이를, useModal 이라는 커스텀 훅으로 만듦으로써 코드의 중복 최소화 및 상태 관리 로직의 재사용성을 높임.

### 3) Button 컴포넌트

- 재사용성이 높은 버튼을 공통 컴포넌트로 만들어 여러 페이지 내에서 사용할 수 있게 구현함.
- 기본 버튼 컴포넌트 구현 후 버튼의 스타일 컴포넌트에서 사이즈,disabled,색상 등을 prop 인자로 받아와서 여러 페이지에서 사용할 수 있게 구현함.
- 특히, 버튼의 사이즈를 SIZES 라는 객체(s,ms,m)로 변수를 지정하여 확장성있는 코드로 구현함.

# 8. <span id = "trouble"> 트러블 슈팅 </span>

## 1) 양지성👨

[문제 상황]

- 타유저의 '프로필' 페이지 에서 하단 'TabMenu' 컴포넌트를 통해 '나의 프로필' 탭으로 이동 후, 뒤로가기 또는 url에 직접 입력하여 타유저의 '프로필 페이지' 이동시, **이동한 유저(타유저 또는 로그인한 유저)에 맞는 프로필 페이지 데이터가 렌더링 되지 않았음.**
- UserProfile(최 상위) -> profileInfo, productWrapp, postCard -> UserProfileBtnWrap -> FollowButton(최 하위) 와 같은 컴포넌트 구조이며, UserProfile 컴포넌트에서 서버통신을 통해 받아온 데이터를 props를 통해 최 하위 컴포넌트 까지 전달하였음. props driling 과 컴포넌트의 데이터 구조 복잡도가 올라가게 되었음.
- **컴포넌트 복잡도가 높고** UserProfile 컴포넌트 한곳에서 props를 통한 데이터를 전달로 인해 **state 변화 의존도가 하나의 컴포넌트에만 집중**되어있어 문제가 발생했다고 판단하였음.

[해결 과정]

- UserProfile 컴포넌트에 구현한 서버통신 코드(fetch code)의 동작 조건을 간소화 하여 특정 데이터의 변화를 감지할 수 있도록 수정하였음.
- 타유저 또는 로그인 유저 '프로필' 페이지 이동시 pageAccount 데이터가 변경되는 것을 활용하여, UserProfile 컴포넌트에서 fetch code를 useEffect hook 내부에 작성하고, **의존성 배열에 pageAccount(현재 화면에 보여지고 있는 유저의 Accountname)를 추가 하였음.** AccountName에 맞는 데이터를 리랜더링 할 수 있도록 수정하면서 프로필 페이지 이동시 리랜더링이 정상적으로 동작하게 되었음.
- UserProfile 컴포넌트에서 fetch 코드를 통해 가져온 서버 데이터를 **전역 데이터**로 관리할 수 있도록 **useContext + useReducer + useMemo hook**을 활용 하였음.
- UserProfile 컴포넌트에서 fetch 코드 내부에 서버데이터를 받아옴과 동시에 **dispatch**를 사용하여 전역 데이터 저장소인 ProfileInfoContext에 저장시켜 전역에 사용할 수 있도록 코드를 수정하였음.
- useContext + useReducer + dispatch 를 활용해 UserProfile에 몰려 있던 **state 변화 의존도를 분산 시킬 수 있었음.** <br>
  <br/><br/>

## 2) 방현영👧

[문제 상황]

- 폰트 파일(Spoqa Han SanS Neo)을 다운로드 받아서 프로젝트 폴더 안에 저장하여 사용하고 있었으나 적용되지 않는 문제를 발견하게 하였음.
- 개발자도구에서 렌더링된 글꼴이 'Spoqa Han Sans Neo'가 아닌 맑은 고딕이 적용되고 있었음.

[해결 과정]

- 기존에는 폰트 파일의 경로를 url의 인자로 직접적으로 불러 왔으나, **리액트에서는 경로를 인자로 직접쓸 경우 리액트 실행시 경로가 바뀌는 것을 확인함.** 따라서, 파일(이미지, 폰트)를 가져올 때는 각 파일이 사용되는 부분에 직접 경로를 작성하지 않고 별도로 **import 하여 load 해야하는 것을 확인함.**

- 경로를 import해서 가져왔음에도 불구하고 폰트가 적용되지 않았으며, 'Spoqa Han SanS Neo'가 아닌 다른 폰트를 적용하였더니 정상적으로 적용되었음. 파일에 문제가 있음을 의심하고, 폰트 파일을 다시 다운받아 적용하여 'Spoqa Han SanS Neo'가 폰트가 정상적으로 적용되었음.

- 추가적으로 발생한 문제는 해당 폰트가 모든 태그가 정상적으로 적용되지 않는 것을 확인하였음. 이는 **CSS 우선순위 문제**로 기존에는 **font-family를 \*(전체 선택자)에 작성**하였으나, reset css에 적힌 **font:inherit**은 태그 선택자에 작성되어있어 **가중치 점수**가 **더 높기** 때문에 전체 선택자에 작성한 font-family가 무시되었고 reset css에 포함되지 않은 태그들(ex. button)만 폰트가 적용이 되고, 나머지는 적용이 안되고 있음을 확인하였음.

- 이를 해결하고자 전체 선택자(\*)가 아닌 body 태그에 font-family를 적용하여, reset css에 font-inherit이 적힌 부분과 가중치 점수가 동일하기 때문에 **후자 우선의 원칙**으로 뒤에 작성된 body의 font-family가 적용이 되어 body에 포함된 태그들이 이를 상속받을 수 있도록 수정하였음.
  <br/><br/>

## 3) 선은혜👩‍🦰

[문제 상황]

- 상품 삭제/수정/웹사이트 보기 모달창 구현시 가장 상위의 부모 태그(모달창 밖 검정색 배경화면)에 onClick 이벤트를 주어 부모 태그를 클릭할 시에만 모달창이 닫히도록 구현할 계획이였으나, 자식 태그까지 onClick 이벤트가 적용되어 자식태그(모달창)를 클릭시 모달창이 닫히는 **이벤트 버블링 이슈**가 발생하였음.

[해결 과정]

- 초기, 자식 태그가 3개(삭제/수정/웹사이트에서 상품보기)가 있었기에 각각의 자식 엘리먼트에서 **e.stopPropagation을 활용하여 버블링 전파를 제한하였음.** 하지만, 코드가 중복되는 문제가 있었고 한번에 처리할 수 있는 부모 엘리먼트 단에서 **if(e.target !== e.currentTarget) return;** 을 써서 해결 할 수 있었음.
  <br/><br/>

## 4) 한유진👩

[문제 상황]

- '게시글'에서 작성 페이지에서 중요한 기능인 이미지 미리보기 기능을 구현하는 중 어려움이 있었음. input 태그를 사용하여 유저가 파일을 선택할 수 있도록하고, 파일을 선택하면 FileList 객체로 정보가 들어오게됨. 하지만 파일 선택 후 열기를 누르면 화면에 로드되지 않는 문제가 발생하였음.

[해결 과정]

- FileReader 객체를 이용하여 file 읽기 :
  **보안상의 이유로 이미지의 상대경로가 블러 처리되기 때문에 발생한 문제**였으며, Web API 중 FileReader라는 객체를 사용하여 미리보기 기능을 구현하였음. FileReader객체는 유저가 선택한 이미지를 File객체에 할당해 내용을 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 함(이미지 외에도 비디오, 오디오, csv 파일 등 가능). File객체에 담긴 이미지 파일 값들을 FileReader의 메서드(readAsDataURL)를 이용하여 base64로 인코딩 하고, 인코딩이 완료되면 문자열로 변환되며 이 문자열을 배열에 담아 map()을 사용하여 이미지 태그를 여러개 만들어주는 방법으로 미리보기 기능을 완성하였음.

# 9. <span id = "tree"> 폴더 구조 </span>

```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂font
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📂Comment
 ┃ ┣ 📂CommentInput
 ┃ ┣ 📂common           // 공통으로 사용되는 컴포넌트 폴더
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂ImageInput
 ┃ ┃ ┣ 📂LabelInput
 ┃ ┃ ┣ 📂Modals
 ┃ ┃ ┣ 📂PostAlbum
 ┃ ┃ ┣ 📂PostCard
 ┃ ┃ ┣ 📂Product
 ┃ ┃ ┣ 📂ProfileImg
 ┃ ┃ ┗ 📂TabMenu
 ┃ ┣ 📂ImagePreview
 ┃ ┣ 📂Loading
 ┃ ┣ 📂MenuBar
 ┃ ┣ 📂Nav
 ┃ ┣ 📂PostForm
 ┃ ┣ 📂ProductForm
 ┃ ┣ 📂ProfileInfo
 ┃ ┗ 📂UserListItem
 ┣ 📂context         // 로그인 한 사용자 정보를 담기 위한 context 파일 관리 폴더
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂AddProduct
 ┃ ┣ 📂ChatList
 ┃ ┣ 📂ChatRoom
 ┃ ┣ 📂EditPost
 ┃ ┣ 📂EditProduct
 ┃ ┣ 📂Follow
 ┃ ┣ 📂HomeFeed
 ┃ ┣ 📂JoinEmail
 ┃ ┣ 📂JoinProfileEdit
 ┃ ┣ 📂Login
 ┃ ┣ 📂LoginEmail
 ┃ ┣ 📂ModifyProfile
 ┃ ┣ 📂NotFound
 ┃ ┣ 📂PostDetail
 ┃ ┣ 📂Profile
 ┃ ┣ 📂SearchUser
 ┃ ┣ 📂Splash
 ┃ ┗ 📂UploadPost
 ┣ 📂Router
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜index.jsx
```

# 10. <span id = "review"> 프로젝트 소감 </span>

## 👨 양지성

- 코딩은 물론 프로젝트 개발환경 세팅, 기획논의 등등.. 어느하나 쉬운 것 없는 프로젝트였지만, 그 만큼 많이 성장할 수 있는 경험이였습니다. 불과 한달전에는 코드하나 칠때마다 쩔쩔 매고, 내가 가능할까 의심했었는데 지금은 그 순간도 미화된 추억처럼 ‘그랬었지..’ 할 정도로 시간이 빨리 지나갔고 성장 했음을 느낍니다. 본 프로젝트에서 많은 기능을 시도해보지는 못했지만 프로젝트를 완주했다는 만족감에 자신감도 얻어갈 수 있어 정말 좋았습니다. 마지막으로 팀장으로서 많이 모자란 저에게 팀장 대우 해주고 응원해준 25조 팀원들 덕분에 팀원들과 현생에서 conflict 없이 마무리 할 수 있었던 것 같습니다. 감사합니다.
  <br/><br/>

## 👩‍🦰 선은혜

- 팀프로젝트 하기 전 컴포넌트 조차 만들지 못했습니다.하지만, 이 팀프로젝트를 통해 API 명세를 해석하며 서버와 통신을 할수 있게 되었습니다. 특히, 다른사람의 코드를 한줄 도 이해하지 못했던 제가 이해가 잘 돼서 유레카! 외치던 그 순간을 아직도 잊지 못합니다. 그간 배워본 것을 실제로 프로젝트에 적용을 하니 코딩에 대한 흥미가 높아졌고, 무지성 클론코딩을 하던 습관에서 원리를 이해하고 활용할 수 있게 되었습니다~!! 👍
- 첫 협업 프로젝트 였지만, 팀원들 모두 너나 할 것 없이 자진해서 자신이 맡은 부분을 최선을 다해 하고자 했기에 팀원 간의 불화 없이 잘 마무리 할 수 있었다고 생각합니다. 더불어, 부트캠프에서 기본적으로 제공되는 협업 툴이 아닌 우리만의 Notion/Discord채널에서 바로바로 소통을 했기에 사소한 오해 조차 없이 순탄하게 진행될 수 있었던 것 같습니다. 🙇‍♀️🙇‍♂️🙇
  <br/><br/>

## 👩 한유진

- 서버에서 데이터를 받아오고 보내는 작업을 처음으로 해보았는데 이 과정속에서 실제로 에러를 직면하고 콘솔로 찍어보면서 에러를 해결하는 과정이 짜릿했습니다😊 프로젝트 이전에는 코드에 대한 이해나, 두려움이 있었다면 지금은 두려움보다는 흥미가 더 커진 것 같습니다 ! 첫 협업 프로젝트라 부족한점이 많았지만 팀원들과 고민을 나누고 함께 해결하는 과정이 즐겁고 고마웠습니다. 팀원들이 아니었다면 이 프로젝트를 무사히 완주하지 못했을 것 같아요 ! ❤️
- 팀원들과 개발환경을 맞추기 위해 프로젝트 초기에 eslint와 prettier 세팅을 진행하였는데
  초반에는 린트에서 잡아주는 오류들이 많아서 약간의 피로감이 있었습니다.
  그렇지만 어떤 부분이 잘못되었는지 알려주기 때문에 문제를 빠르게 해결할 수 있었고 불필요한 코드를 줄이게 되면서 코드의 질이 좋아졌다는 생각이 들었습니다.
  <br /><br />

## 👧 방현영

- 프로젝트 시작할 당시에는 모든 것이 낯설었던 것 같습니다. 리액트를 공부한 이후로 만들게된 첫 협업 프로젝트이기도 했고 깃에 대한 경험도 부족했기 때문에 이런 저런 생각이나 걱정도 많았습니다. 하지만 걱정했던 것과는 달리 직접 부딪혀보니 어느순간 개발에 재미를 느끼고 있는 제 모습을 발견할 수 있었습니다. 로직을 짜고, 머리를 맞대고 같이 에러를 해결하기도 하고, 서로의 코드를 리뷰하는 그런 과정 속에서 때로는 지치도 하고 때로는 벅차오르는 순간도 있었습니다. 이런 순간 순간들이 모여서 리액트, 깃 뿐만 아니라 협업에 대한 자신감을 얻을 수 있었고, 개발에 재미도 느끼며 조금은 성장하는 계기가 되었던 것 같습니다. 무사히 프로젝트를 마무리하게 되어 뿌듯하고, 각자의 자리에서 최선을 다해준 팀원들에게 감사하다고 전하고 싶습니다! 💗
  <br /><br />

# 11. <span id="refactoring">진행한 Refactoring 내용</span>

## <span id="refactoring_1"> ✏️ Fetch 코드 -> Axios 코드 변경 | [관련 PR 바로가기](https://github.com/Yang-zzz/nonamarket_Refact/pull/1)</span>

|                                                        수정 전 : Fetch 코드                                                         |                                                        수정 후 : Axios 코드                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/TEAM-HI25/nonamarket/assets/89332492/60938d64-9522-47ad-b231-059c5d1dd8ad" width="800" height="1100"> | <img src="https://github.com/TEAM-HI25/nonamarket/assets/89332492/d97ca642-e69c-453b-95c4-cfd40058cbb6" width="800" height="900"/> |

- 별도의 api 파일에서 객체형태로 서버 통신 코드를 Fetch를 기반으로 하는 서버통신 코드를 axios 기반 코드로 전환 하였음.
- 서버에 데이터를 저장하거나 불러와야하는 page컴포넌트에서 Axios를 호출하여 데이터를 받아올 수 있도록 하였음.
- Axios 파일을 분리하여 instance를 생성하여 통신 코드를 모듈화 시킴으로써 재사용성을 높임.
- 서버 전송 전 Interceptor를 활용해 Authorization 속성에 token을 추가함으로써, 각 페이지에서 token을 인자로 보내는 수고를 덜어낼 수 있게 되었음.
- 전반적으로 Axios 통신 코드로 변경 후 통신 코드량이 감소하여 가독성이 향상 되었음.

## <span id="refactoring_2">✏️ Redux & ReduxTolkit 상태관리 라이브러리 적용<span> <br />

[Redux PR 바로가기](https://github.com/Yang-zzz/nonamarket_Refact/pull/2) | [RTK PR 바로가기](https://github.com/Yang-zzz/nonamarket_Refact/pull/5)

### Redux
  🧐 적용사유
  - 리팩토링 이전 Context API + useReducer hook을 적용하여 전역상태를 관리하였음.
  - ContextAPI 를 적용할 경우 하나의 Context 저장소(store)를 구독하고 데이터를 불러오게 되면 불필요한 렌더링이 발생할 수 있기 때문에, 각 페이지 컴포넌트에 필요한 Context를 생성하여 관리하는 상황이 발생하였음.
  - provider 함수를 적용할 때 복잡해지는 컴포넌트의 cupling을 방지하고자 중앙관리가 가능한 Redux 상태관리 라이브러리가 적합하다고 판단하여 교체하게 되었음.

  🧐 적용과정 및 후기
  - type에 따른 Action 생성 함수 로직을 구현하고, 해당 Action에 따라 Reducer 함수가 state를 반환하여 전역에서 상태를 관리할 수 있는 환경이 조성되었음.
  - 다소 복잡한 로직을 구성하고 추가되는 상용구가 있었지만, combineReducer를 통해 하나의 store에서 필요로 하는 State를 불러올 수 있어 불필요한 레더링을 방지하고 코드의 가독성이 좋아짐을 확인하였음.
  - props driling 또한 해결할 수 있었으며, 컴포넌트 간의 복잡한 관계를 경량화 시키기에는 적합한 라이브러리라고 판단하였음.

|                                                        수정 전 : ContextAPI + useReducer를 적용 한 provider 함수                                                        |                                                        수정 후 : Redux를 적용한 Provider 로직                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img width="600" height="300" alt="image" src="https://github.com/TEAM-HI25/nonamarket/assets/89332492/ee835cd3-4d53-4b84-aba3-e6ff5c7a9c2f">| <img src="https://github.com/Yang-zzz/nonamarket_Refact/assets/89332492/746bb0b7-bf33-4b59-aaea-b214ff6b1e3a" width="600" height="300"/> |

### ReduxToolkit
  🧐 적용사유
  - Redux 상태관리를 적용했을 때, action생성 함수, Reducer, RootReducer 등 부수적으로 생성해야 하는 코드가 많아 간소화시킬 수 있는 라이브러리인 ReduxToolkit 적용이 필요하다고 판단하였음.

  🧐 적용과정 및 후기
  - ReduxToolkit 은 Redux를 좀 더 간편하게 사용할 수 있도록 구조화 되어 있기 때문에 store를 구독하거나 전역에 저장된 데이터를 사용하는 방법은 똑같다.
  - 차이점은 전체적으로 경량화되고 쉽게 사용할 수 있는 구조로 Redux 사용에 필요한 부수적인 상용구가 많았으나 덜어낸 느낌을 받을 수 있었음.
  - action 함수 생성과 Reducer함수를 별도의 로직없이 하나의 createSlice 함수를 통해 생성할 수 있었음.
  - 리액트의 불변성을 지키기 위해 얕은복사후 식별자에 분해, 할당하여 사용하는 번거로움이 있었으나 ReduxToolkit 자체에 immer가 자동 적용되어 속도감 있는 작업을 진행할 수 있었음.
  
  |                                                        수정 전 : Redux를 적용한 Reducder + action 함수                                                     |                                                        수정 후 : ReduxToolkit slice 로직                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| <img width="569" alt="image" src="https://github.com/TEAM-HI25/nonamarket/assets/89332492/531b53f9-239c-4968-bea6-8198deaeb550"> | <img width="600" alt="image" src="https://github.com/TEAM-HI25/nonamarket/assets/89332492/3f84dbab-3fca-4265-9ad8-fc0db4031c96"> |

## <span id="refactoring_3">✏️ Search User Page Debouncing 적용 | [관련 PR 바로가기](https://github.com/Yang-zzz/nonamarket_Refact/pull/5)<span><br />
  🧐 적용사유
  - Search User Page에서 유저 검색 시 불필요한 서버통신이 발생하였음. 이를 해결하고자 Debouncing 기법 적용

  🧐 적용과정 및 후기
  - 유저검색 input 창에 타이핑 될 때마다, 서버와 통신하여 불필요한 소스가 발생하였고 이를 해결하고자 useEffect hook 의 라이프 사이클과 setTime() & clearTime() 함수를 활용하였음.
  - setTime() 내부에 입력시간 이후에 유저가 검색될 수 있도록 서버통신 코드를 작성하였음.
  - useEffect hook 에 mount 되는 시점에는 서버통신 코드가 작성된 setTime(), unmount 되는 시점에는 clearTime()를 동작하여 clear 되도록 작성하였음.
  - 서버통신을 최소화하여 불필요한 리소스를 방지하는 좋은 경험이 되었음.
  
  |                                                        수정 전 : 기법 적용 전 네트워크탭                                               
  :--------------------------------------------------------------------------------------------------------------------------------:
  | <img width="1684" alt="image" src="https://github.com/Yang-zzz/nonamarket_Refact/assets/89332492/729ce3d0-f45e-4682-ae15-c14100d74925"> |
  |                                                        수정 후 : 기법 적용 후 네트워크탭                                                    |:--------------------------------------------------------------------------------------------------------------------------------:
  |<img width="1500" alt="image" src="https://github.com/Yang-zzz/nonamarket_Refact/assets/89332492/17789970-8773-46a5-897d-27706a51a036">|
