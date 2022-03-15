function containHyphen(regNumber) {
  if (regNumber.includes("-")) {
    return true;
  } else {
    console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!");
    return false;
  }
}

function checkNumber(regNumber) {
  let arr = regNumber.split("-");
  const frontNumber = arr[0];
  const backNumber = arr[1];

  if (frontNumber.length === 6 && backNumber.length === 7) {
    return true;
  } else {
    console.log("에러발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  }
}

function hideBackNumber(regNumber) {
  let arr = regNumber.split("-");
  const frontNumber = arr[0];
  const backNumber = arr[1];

  let result = "";

  for (let i = 0; i < backNumber.length; i++) {
    if (i >= 1) {
      result += "*";
    } else {
      result += backNumber[i];
    }
  }

  return frontNumber + "-" + result;
}

function hideRegistrationNumber(regNumber) {
  //가운데 - 포함여부 체크
  const isValid = containHyphen(regNumber);

  if (isValid) {
    //앞자리 6자리, 뒷자리 7자리 체크
    const isValid2 = checkNumber(regNumber);

    if (isValid2) {
      //끝 6자리 가리는 기능
      console.log(hideBackNumber(regNumber));
    }
  }
}

hideRegistrationNumber("920324-1038293");
