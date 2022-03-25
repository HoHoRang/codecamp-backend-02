import axios from "axios";
import cheerio from "cheerio";

async function getOpenGraph(myData) {
  const targetURL = myData.contents
    .split(" ")
    .filter((el) => el.startsWith("http"))[0];

  const aaa = await axios.get(targetURL);
  const $ = cheerio.load(aaa.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}

const frontendData = {
  title: "안녕하세요",
  contents: "여기 정말 좋은 것 같아요! https://daum.net",
};

getOpenGraph(frontendData);
