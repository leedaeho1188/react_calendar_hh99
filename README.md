# REACT_Calendar

<img width="500" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FArdH2%2Fbtq1ca2veV3%2Fw05lNNJzfpjYzb61lGka61%2Fimg.png">

[REACT_Calendar](https://react-calendar-bradlee.web.app/)
<br/>

항해99 4주차는 자신이 선택한 주특기 기본을 배우는 시간입니다. 저는 **리액트**를 주특기로 선택했고, 일주일동안 항해99에서 제공하는 **강의를 듣고** 프로젝트를 완성시켰습니다. 프로젝트는 **캘린더 만들기**였고 필수적으로 구현해야되는 기능들을 포함시키면서 만들었습니다.

<br/>


## **사용한 개념**

1\. **함수형** 컴포넌트만 사용(클래스 형 컴포넌트 ❌)

-   함수형 클래스형 둘다 사용해본 결과 함수형이 **더 간단하고** 리액트 훅을 사용했을 때 클래스형이 따로 필요없기 때문에 함수형 컴포넌트만 사용했습니다.

2\. **React hook** 사용 (useState(), useDispatch(), useEffect(), useRef(), useSelect()) 

3\. **styled-compone****nts**를 사용해서 화면을 꾸몄다.

4\. **State & Props**를 사용해서 자식컴포넌트로 data를 주었다.

5\. **Route** 사용해서 컴포넌트에 paging기능을 주었다.

6\. **Redux** 를 사용해서 정보를 저장하고 불러왔다.

7\. **Firebase(서버리스)**를 사용해서 data를 보관할 수 있게 했다. 

8\. **middleware**를 사용해서 Fireabase와 Redux를 연결했다.

9\. **Firebase**를 이용해서 REACT\_Calendar를 **배포**했다.



## **기능 구현**

### 1\. **캘린더 만들기**

**full calendar**라는 **패키지**를 이용해서 캘린더를 만들었습니다. 그리고 나중에 다시 **moment js**를 이용해서 캘린더를 만들어보았습니다.

<br/>

<img width="500" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3bxq2%2Fbtq091FtIbb%2Ffyq1TT4W3MmMkFf44NNNW0%2Fimg.png">

<br/>

<img width="500" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbj9p0G%2Fbtq1dzHMGng%2FivPUperNBFDgtgYdsofu4K%2Fimg.png">

<br/>

### 2.  **새로운 스케쥴 업로드 하고 추가하기**

**Material UI**를 사용해서 시간과 일정을 입력할 수 있게 만들었다. 

추가하기 버튼을 눌렀을 때 새로운 스케쥴이 firestore와 redux에 저장되고 메인 페이지로 넘어가서 useEffect를 사용해서 data를 불러오는 middleware 함수를 dispatch한다. 그다음에 useSelect를 사용해서 redux에 저장되어있는 값들을 불러와서 달력 페이지에 보여준다.

<br/>

### 3\. **모달 창 띄우기(각 스케쥴 정보)(삭제하기 & 완료하기)**

캘린더에 있는 각 스케쥴을 눌렀을 때 모달 창이 나타나고 그 모달 창에 해당 스케쥴이 보이게 하면된다. 

일단 스케쥴을 클릭했을 때 useState를 사용해서 해당 스케쥴 데이터를 Modal 컴포넌트에 props값으로 보내주고 모달창을 띄우는것은 **삼항 연산자**를 사용해서 기본 값을 false로 두고 스케쥴이 click 됬을 때만 true값으로 줘서 모달이 보이게 했습니다. 

모달 창 안에는 해당 스케쥴 삭제 버튼과 완료 버튼이 있는데, 삭제 버튼을 누르면 firebase와 리덕스에 있는 해당 데이터를 id값으로 찾아서 **삭제**합니다. 완료 버튼은 id값으로 해당 데이터를 찾아서 completed 라는 데이터 키값을 true로 **업데이트** 합니다.  

<br/>

### 4\. **완료된 스케쥴 만 보이게하기**

일단 먼저, 캘린더 화면에 완료된 스케쥴은 빨간색으로 표시하고 완료되지 않은것은 파란색으로 표시했다. 

완료일정 버튼을 눌렀을 때 캘린더 화면에 완료된 스케쥴 만 띄웠다. 그리고 다시 전제일정 버튼을 누르면 미완료된 스케쥴까지 보여지게했다. 이 기능 또한 **삼항 연산자**를 사용했는데 default 값을 true로 설정해서 버튼을 누르지 않을 때는 모든 스케쥴이 보이게 했고 완료일정 버튼을 눌렀을 때  false값을 줘서 완료된 스케쥴 data 리스트만 보내줘서 완료 스케쥴 만 보이게 했습니다.

<br/>

### 5\. **웹 페이지를 반응형으로 만들기**

웹 페이지는 PC, 테블릿, 핸드폰에서 사용할 수 있게 미디어 쿼리를 사용했다. 

width: 50vw에서 화면이 작아지면 width: 80vw ~100vw로  값을 바꿔줬다. 그리고 텍스트 화면에비해 너무 클 때는 화면이 작아지면 display: none을 사용했다.
