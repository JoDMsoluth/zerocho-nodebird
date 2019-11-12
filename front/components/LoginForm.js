import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link"; // next와 react의 차이 나머지는 같음
import { Form, Input, Button } from "antd"; // ant design 적용
import { useInput } from "../pages/signup";
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const { me } = useSelector(state => state.user);
  const [password, onChangePassword] = useInput("");
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          userId: id,
          password
        }
      });
    },
    [id, password]
  );
  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          type="text"
          value={id}
          name="user-id"
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          type="password"
          value={password}
          name="user-password"
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={me}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
