import "./Header.css";

const getKoreanDateString = () => {
  const date = new Date();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  const dateString = `${weekdays[date.getDay()]}요일, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return dateString;
};

const Header = () => {
  return (
    <div className="Header">
      <h3>5조 오늘의 할 일</h3>
      <h1>{getKoreanDateString()}</h1>
    </div>
  );
};

export default Header;