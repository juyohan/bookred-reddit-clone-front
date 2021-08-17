# BookRed   
<br>

### 💻  목차
* [🗣 프로젝트 소개](#-프로젝트-소개)
* [🏫 사용 언어 및 라이브러리](#-사용-언어-및-라이브러리)
* [📀 프로젝트 배포](#-프로젝트-배포) 
* [📄 프로젝트 기술](#-프로젝트-기술)
  - [컴포넌트 스타일링 (Styled-Components)](#1.-컴포넌트-스타일링-styled-components)
</br>

## 🗣 프로젝트 소개   
미국에서 운영중인 커뮤니티 사이트 [__레딧__](www.reddit.com, "Go Reddit"), 쓰레드 및 피드형 게시판을 `모티브`로 한 프로젝트입니다.
</br>
</br>

## 🏫 사용 언어 및 라이브러리
- *React*
  - *react-router-dom*
  - *react-icons*
  - *react-loader-spinner*
  - *axios*
  - *styled-component*  
</br>

## 📀 프로젝트 배포       

</br>
</br>

## 📄 프로젝트 기술

#### 1. 컴포넌트 스타일링 (Styled-Components)
- 여러가지의 컴포넌트 스타일링들 중에서 `SCSS`와 `Styled-Components` 중에서 고민을 했습니다.
- `SCSS`와 비교해 `Styled-Components`는 `id`를 사용해 관리가 되는 것이 아닌, 각 태그별로 관리를 할 수 있어 가독성이 높다고 생각했습니다.
- Front를 제대로 해보지 않은 사람으로써, JS안에서 css를 구성할 수 있다는 이야기가 너무 매력적으로 다가와서 `SCSS`보단 `Styled-Components`가 더 이끌렸습니다.
- 또한 태그에 Props를 통해 스타일 속성을 변경할 수 있어 하나의 태그를 분리해서 표현할 수 있었습니다.
- 같은 속성을 사용하지만 거기서 더 추가를 해야 할 경우, 확장을 사용해 중복된 코드를 방지할 수 있었습니다.
- 속도면에서 `SCSS`가 더 빠르다고 하지만, 큰 프로젝트가 아니기 때문에 개인적으로 더 매력으로 느껴지는 `Styled-Components`를 선택했습니다.
