import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy4tXlJSHojsI30Ih7XVunek-AJYuYLxA",
  authDomain: "sparta-react-basic-459ce.firebaseapp.com",
  projectId: "sparta-react-basic-459ce",
  storageBucket: "sparta-react-basic-459ce.appspot.com",
  messagingSenderId: "607763745849",
  appId: "1:607763745849:web:d8a4972c2dc4488d7c11e8",
  measurementId: "G-HQQ06DRC1F",
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };
