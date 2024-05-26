document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.querySelector('.main-cards-top-yellow-date');

    // 현재 날짜 가져오기
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    // padStart 문자열 길이 맞춰줌
    const day = String(today.getDate()).padStart(2, '0');

    // 날짜 문자열 생성
    const formattedDate = `${year}.${month}.${day} 기준`;

    // HTML 요소 업데이트
    dateElement.textContent = formattedDate;
});
