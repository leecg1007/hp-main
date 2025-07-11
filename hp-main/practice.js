// HTML 요소 가져오기
const buttonsContainer = document.querySelector('.grid-container'); // 버튼들이 있는 컨테이너
const timetableButton = document.querySelector('.grid-item2'); // 시간표 버튼
const mealButton = document.querySelector('.grid-item1'); // 급식 버튼
const alramButton = document.querySelector('.grid-item3'); // 알림 버튼
const testButton = document.querySelector('.grid-item4'); // 시험 버튼
const TITLE = document.querySelector('.Title'); //돌아가기 버튼
const board = document.querySelector('.grid-item5'); // 게시판

// 시간표 이미지 생성 및 설정
const timetableImage = document.createElement('img');
timetableImage.src = 'images/시간표.png'; // 임시 이미지 URL
timetableImage.alt = '가평고 3-6을 누르세요';
timetableImage.style.display = 'none'; // 처음에는 숨김
timetableImage.style.margin = '20px auto';
timetableImage.style.width = '350px';
timetableImage.style.height = '528px';

// 급식 이미지 생성 및 설정
const mealImage = document.createElement('img');
mealImage.src = 'https://via.placeholder.com/300x200?text=급식'; // 임시 이미지 URL
mealImage.alt = '가평고 3-6을 누르세요';
mealImage.style.display = 'none'; // 처음에는 숨김
mealImage.style.margin = '20px auto';
mealImage.style.width = '300px';
mealImage.style.height = '200px';

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
//알림 버튼 클릭 이벤트
alramButton.addEventListener('click', () => {
    location.href = 'alram.html'; // 알람 페이지로 이동
});

//시험 버튼 클릭 이벤트
testButton.addEventListener('click', () => {
    location.href = 'test.html'; // 시험 페이지로 이동
});

// 돌아가기 버튼 클릭 이벤트
TITLE.addEventListener('click', () => {
    buttonsContainer.style.display = 'grid'; // 버튼 컨테이너 표시
    timetableImage.style.display = 'none'; // 시간표 이미지 숨기기
    mealImage.style.display = 'none'; // 급식 이미지 숨기기
});

// 게시판 버튼 클릭 이벤트
board.addEventListener('click', () => {
    location.href = 'board.html';
});