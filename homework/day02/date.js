function getCurrentDate() {
  const time = new Date();
  const yyyy = time.getFullYear();
  const mm = String(time.getMonth() + 1).padStart(2, "0");
  const dd = String(time.getDate()).padStart(2, "0");
  const hh = String(time.getHours()).padStart(2, "0");
  const mi = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  const currentTime = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${mi}:${ss} 입니다.`;
  console.log(currentTime);
}

getCurrentDate();
