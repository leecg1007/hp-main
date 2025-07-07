document.addEventListener('DOMContentLoaded', () => {

    // HTML 요소 가져오기
    const buttonsContainer = document.querySelector('.grid-container'); // 버튼들이 있는 컨테이너
    const timetableButton = document.querySelector('.grid-item2'); // 시간표 버튼
    const mealButton = document.querySelector('.grid-item1'); // 급식 버튼
    const TITLE = document.querySelector('.Title'); //돌아가기 버튼
    //게시판ㅍㄴ판판판
    const board = document.querySelector('.grid-item5');
    //로그인
    const singup = document.querySelector('signup'); // 회원가입 버튼
    const signin = document.querySelector('signin'); // 로그인 버튼

    //게시판 클릭 시 게시판 컨테이너 생성성

    // 시간표 이미지 생성 및 설정
    const timetableImage = document.createElement('img');
    timetableImage.src = '시간표.png'; // 임시 이미지 URL
    timetableImage.alt = '가평고 3-6을 누르세요';
    timetableImage.style.display = 'none'; // 처음에는 숨김
    timetableImage.style.margin = '20px auto';
    timetableImage.style.width = '300px';
    timetableImage.style.height = '528px';

    // 급식 이미지 생성 및 설정
    const mealImage = document.createElement('img');
    mealImage.src = 'https://via.placeholder.com/300x200?text=급식'; // 임시 이미지 URL
    mealImage.alt = '가평고 3-6을 누르세요';
    mealImage.style.display = 'none'; // 처음에는 숨김
    mealImage.style.margin = '20px auto';
    mealImage.style.width = '300px';
    mealImage.style.height = '528px';

    //로그인 버튼 생성 및 설정
    const loginbutton = document.querySelector('.login'); // 로그인 버튼
    const loginContainer = document.getElementById('loginContainer'); // 로그인 컨테이너
    // loginContainer.style.display = 'none'; // 처음에는 숨김 :: css 에서 처리해야 한다.


    // body에 이미지 추가
    document.body.appendChild(timetableImage);
    document.body.appendChild(mealImage);

    // 시간표 버튼 클릭 이벤트
    timetableButton.addEventListener('click', () => {
        buttonsContainer.style.display = 'none'; // 버튼 컨테이너 숨기기
        mealImage.style.display = 'none'; // 급식 이미지 숨기기
        timetableImage.style.display = 'block'; // 시간표 이미지 표시
    });

    // 급식 버튼 클릭 이벤트
    mealButton.addEventListener('click', () => {
        buttonsContainer.style.display = 'none'; // 버튼 컨테이너 숨기기
        timetableImage.style.display = 'none'; // 시간표 이미지 숨기기
        mealImage.style.display = 'block'; // 급식 이미지 표시
    });

    // 로그인 버튼 클릭 이벤트
    loginbutton.addEventListener('click', () => {
        console.log('loginbutton', loginContainer)
        buttonsContainer.style.display = 'none'; // 버튼 컨테이너 숨기기
        timetableImage.style.display = 'none'; // 시간표 이미지 숨기기
        mealImage.style.display = 'none'; // 급식 이미지 숨기기
        loginContainer.style.display = 'block'; // 로그인 컨테이너 표시
    });

    // 돌아가기 버튼 클릭 이벤트
    TITLE.addEventListener('click', () => {
        buttonsContainer.style.display = 'grid'; // 버튼 컨테이너 표시
        timetableImage.style.display = 'none'; // 시간표 이미지 숨기기
        mealImage.style.display = 'none'; // 급식 이미지 숨기기
        loginContainer.style.display = 'none'; // 로그인 컨테이너 숨기기
    });

    // 게시판 버튼 클릭 이벤트
    board.addEventListener('click', () => {
        location.href = 'board.html';
    });

    // const loginbutton = document.querySelector('.login'); // 로그인 버튼
    // const loginContainer = document.getElementById('loginContainer'); // 로그인 컨테이너
    // const buttonsContainer = document.querySelector('.grid-container'); // 버튼 컨테이너

    // 디버깅용 로그
    console.log('loginbutton:', loginbutton);
    console.log('loginContainer:', loginContainer);
    console.log('buttonsContainer:', buttonsContainer);

    // 로그인 버튼 클릭 이벤트
    // loginbutton.addEventListener('click', () => {
    //     if (buttonsContainer) buttonsContainer.style.display = 'none'; // 버튼 컨테이너 숨기기
    //     if (loginContainer) loginContainer.style.display = 'block'; // 로그인 컨테이너 표시
    // });
});