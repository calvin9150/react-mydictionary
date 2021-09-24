const LOAD_WORDS = "LOAD_WORDS";

export const loadQuiz = (words) => {
  return { type: LOAD_WORDS, words };
};

const initialState = {
  words: [
    {
      word: "무야호",
      content: "그만큼 신나신다는 뜻",
      example: "예, 저희가 자주 보죠. 무야호~",
    },
    {
      word: "무야호2",
      content: "그만큼 신나신다는 뜻2",
      example: "예, 저희가 자주 보죠. 무야호~2",
    },
    {
      word: "무야호3",
      content: "그만큼 신나신다는 뜻3",
      example: "예, 저희가 자주 보죠. 무야호~3",
    },
  ],
  isLoaing: false,
};

const wordsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOAD_WORDS":
      return state;
    default:
      return state;
  }
};

export default wordsReducer;
