import axios from "axios";

// 비동기 방식
function fetchPost() {
  const result = axios.get("https://koreanjson.com/posts/1");

  console.log("============1============");
  console.log(result); // Promise { <pending> }
  console.log("============1============");
}

fetchPost(); // 실행명령

// 동기 방식
async function fetchPost2() {
  const result = await axios.get("https://koreanjson.com/posts/1");

  console.log("============2============");
  console.log(result);
  console.log(result.data.title);
  console.log("============2============");
}

fetchPost2(); // 실행명령
