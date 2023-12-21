import React, { useState } from "react";
import styled from "@emotion/styled";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.form`
  background-color: #192f3d;
  border: 1px solid #192f2c;
  height: 300px;
  width: 500px;
`;

const Header = styled.div`
  position: relative;
  top: 0px;
  height: 50px;
  width: 500px;
  font-size: 30px;
  background-color: #193f3d;
  text-align: center;
`;

const Content = styled.div`
  height: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  font-size: 20px;
  margin: 10px 10px;
`;

const ButtonForm = styled.div`
  position: relative;
  font-size: 20px;
  margin: 10px 10px;
`;

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 사용자가 폼을 제출할 때 호출될 함수
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출의 기본 동작을 방지
    console.log("로그인 시도:", username, password);
    // 로그인 로직을 여기에 구현합니다. 예: API 호출
  };

  return (
    <Main>
      <Body onSubmit={handleSubmit}>
        <Header>로그인</Header>
        <Content>
          <Form>
            <label htmlFor="username">사용자 이름:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // 입력 값이 변경될 때 username 상태 업데이트
            />
          </Form>
          <Form>
            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 입력 값이 변경될 때 password 상태 업데이트
            />
          </Form>
          <ButtonForm>
            <button type="submit">로그인</button>
          </ButtonForm>
        </Content>
      </Body>
    </Main>
  );
}
