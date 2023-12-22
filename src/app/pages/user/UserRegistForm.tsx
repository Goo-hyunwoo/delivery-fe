import React from "react";
import styled from "@emotion/styled";
import accountRouter, {
  UserRegisterRequest,
  UserResponse,
} from "../../../api/AccountRouter";
import { setStorage } from "../../../utils/useLocalStroage";
import { Api } from "../../../api/http-commons";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding-top: 30px;
  width: 700px;
  height: 300px;
`;

export default function UserRegistForm() {
  const navigate = useNavigate();

  const onFinish = async (values: UserRegisterRequest) => {
    if (values.email && values.password) {
      const res = await accountRouter.signUp(values);
      if (res) {
        const api: Api<UserResponse> = res.data;
        const user = api.body;
        console.log(user);
      }
    }
  };

  return (
    <Layout>
      <Main>
        <Form
          name="basic"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<UserRegisterRequest>
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<UserRegisterRequest>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<UserRegisterRequest>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<UserRegisterRequest>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Main>
    </Layout>
  );
}
