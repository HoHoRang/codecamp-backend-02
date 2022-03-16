//조건문 : 며칠
function days(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log("31");
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30");
  } else {
    console.log("28");
  }
}

days(1); // 31
days(2); // 28
days(4); // 30
