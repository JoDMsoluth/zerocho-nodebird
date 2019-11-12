import React, { useState, useCallback, useEffect, memo } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
//컴포넌트 자체를 최적화 할 때
const TextInput = memo(({ value }) => {
  return <div>{value}</div>;
});

TextInput.propTypes = {
  value: PropTypes.string
};

// 커스텀 훅
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  });
  return [value, handler];
};

const Signup = () => {
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  // 내 아이디가 생겼을 때 signup 페이지에서 index 페이지로 이동
  useEffect(() => {
    if (me) {
      alert("로그인 했으니 메인페이지로 이동합니다.");
      Router.push("/");
    }
  }, [me && me.id]);

  // props or 자식컴포넌트로 받는 함수들은 useCallback으로 감싸준다.
  // state가 바뀔때마다 props에 들어간 함수들이 새로 생성(다른 객채가 되므로 리렌더링이 된다.)
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) setPasswordError(true);
      if (!term) setTermError(true);
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          userId: id,
          password,
          nickname: nick
        }
      });
    },
    [id, nick, password, passwordCheck, term]
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );
  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  });

  return (
    <>
      <div>회원가입</div>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <TextInput value="123"></TextInput>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            type="password"
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-pass-ch">비밀번호체크</label>
          <br />
          <Input
            name="user-pass-ch"
            value={passwordCheck}
            type="password"
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            제로초 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
          </Button>
          {/* button type="submit" */}
        </div>
      </Form>
    </>
  );
};

export default Signup;
