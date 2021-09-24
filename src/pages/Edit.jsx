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

const Plus = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 300px;
  margin: 20px 0;
  padding: 20px;
  background-color: #324069;
  border-radius: 20px;
  color: white;
`;

const Input = styled.input`
  width: 90%;
  min-height: 2em;
`;

const SubmitBtn = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.5em;
  margin: 50px auto 0;
  background-color: gray;
  border-radius: 10px;
`;

const Edit = () => {
  const history = useHistory();

  const onClickCancelBtn = () => {
    history.push("/");
  };

  return (
    <Conatiner>
      <Layout>
        <Title>
          단어 추가하기 <Plus onClick={onClickCancelBtn}>❌</Plus>
        </Title>
        <InputWrapper>
          단어
          <Input />
          설명
          <Input />
          예문
          <Input />
          <SubmitBtn>제출하기</SubmitBtn>
        </InputWrapper>
      </Layout>
    </Conatiner>
  );
};

export default Edit;
