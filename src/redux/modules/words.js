const LOAD_WORDS = "LOAD_WORDS";
const ADD_WORD = "ADD_WORD";

export const loadWords = (words) => {
  return { type: LOAD_WORDS, words };
};

export const addWord = (word) => {
  return { type: ADD_WORD, word };
};

const initialState = {
  words: [
    {
      word: "무야호",
      content: "그만큼 신나신다는 뜻",
      example: "예, 저희가 자주 보죠. 무야호~",
    },
    {
      word: "피카츄 돈까스",
      content:
        "보통 500 ~ 1,200원선으로, 처음 나왔던 2000년대 초반만해도 200 ~ 300원대의 가격이었지만 물가상승으로 가격이 올랐다. 가격이 가격인큼 이것에 들어가는 튀김 옷과 고기의 질은 기대하지 말자. 무엇보다도 학교 앞이나 동네 분식점이 다 그렇듯, 기름을 언제 교체하는지 알 수 없어 위생 상태는 장담 못한다. 참고로 여름에는 특히 조심해야 한다. 분식집에서 장시간 밖에 나와있던 피카츄를 잘못 사먹고 식중독에 걸린 어린 학생들의 사례가 심심치 않게 보인다. 그러니 한여름에는 왠지 오랫동안 밖에 진열된 듯한 피카츄는 가급적이면 사 먹지 말자, 잘못 먹으면 고생한다.",
      example: "가위바위보 진 사람이 피돈 사주기, 콜?",
    },
    {
      word: "무야호2",
      content: "그만큼 신나신다는 뜻2",
      example: "예, 저희가 자주 보죠. 무야호~2",
    },
  ],
  isLoaing: false,
};

const wordsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOAD_WORDS":
      return state;
    case "ADD_WORD":
      return { ...state, words: [...state.words, action.word] };
    default:
      return state;
  }
};

export default wordsReducer;
