import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

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
  height: 200px;
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
  font-size: 1.5em;
`;
const Example = styled.div``;

const Home = () => {
  const history = useHistory();

  const onClickPlusBtn = () => {
    history.push("/edit");
  };

  return (
    <Conatiner>
      <Layout>
        <Title>
          My dictionary <Plus onClick={onClickPlusBtn}>☑️</Plus>
        </Title>
        <List>
          <Word>아 좋습니다</Word>
          <Content>랄로</Content>
          <Example>봉춤을춘다</Example>
        </List>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </Layout>
    </Conatiner>
  );
};

export default Home;
