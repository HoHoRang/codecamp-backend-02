interface IBoard {
  writer: string;
  title?: string;
  contents: string;
}

const updateBoardInput1: IBoard = {
  writer: "영희",
  title: "좋은 날씨 입니다~",
  contents: "오늘은 특히 더 날씨가 좋네요^^",
};

const updateBoardInput2: IBoard = {
  writer: "훈이",
  contents: "기존에 작성한 글 내용 일부가 수정됐네요",
};
