import React, { useEffect } from "react";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Firestore } from "@firebase/firestore";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { loadWordsFB } from "../redux/modules/words";

const Conatiner = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  width: 30vw;
  height: 70vh;
  padding: 20px;
  background-color: #e9e9e9;
  overflow: auto;
  border-radius: 20px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 2em;
  justify-content: space-between;
  user-select: none;
`;

const List = styled.div`
  width: 90%;
  min-height: 200px;
  margin: 20px 0;
  padding: 20px;
  background-color: #324069;
  border-radius: 20px;
  color: white;
`;

const Plus = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

const Word = styled.div`
  font-size: 2em;
`;
const Content = styled.div`
  font-size: 1.2em;
  margin: 1em 0;
`;
const Example = styled.div`
  color: #07abd4;
`;

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const words = useSelector((state) => state.words.words);
  console.log(words);

  const onClickPlusBtn = () => {
    history.push("/edit");
  };

  useEffect(() => {
    dispatch(loadWordsFB());
  }, []);

  // const words_list = Firestore.collection("dictionary");

  return (
    <Conatiner>
      <Layout>
        <Title>
          My dictionary <Plus onClick={onClickPlusBtn}>☑️</Plus>
        </Title>
        {words.map((v, i) => (
          <List key={i}>
            <Word>{v.word}</Word>
            <Content>{v.content}</Content>
            <Example>{v.example}</Example>
          </List>
        ))}
      </Layout>
    </Conatiner>
  );
};

export default Home;
