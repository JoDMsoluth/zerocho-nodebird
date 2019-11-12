// _app.js 파일은 nextJS에서 레이아웃 파일로 사용된다.
// next는 기본적으로 코드스플릿을 해줌
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import AppLayout from "../components/AppLayout";
import { createStore } from "redux";
import { Provider } from "react-redux"; // redux의 중앙통제실 역할을 하는 컴포넌트
import reducer from "../reducers";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import rootSaga from "../sagas/index";

const NodeBird = ({ Component, store }) => {
  // next에서 Component라는 props(자식컴포넌트: index.js같은거)를 넣어줌
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired, // 렌더링 될 수 있는 모든 것 (node), JSX가 아닌 엘리멘트(elementType)
  store: PropTypes.object.isRequired
};

export default withRedux((initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  // 여기에다가 store 커스터마이징
  const middlewares = [sagaMiddleware]; // redux에 없는 기능을 추가하고 싶을 때 사용
  // 밑에부분은 암기(그대로씀)
  const enhancer =
    process.env.NODE_ENV === "production" // 배포모드면
      ? compose(applyMiddleware(...middlewares)) // 리듀서 크롬개발자 도구 사용x
      : // compose는 여러 미들웨어 합치기, apply는 미들웨어적용
        compose(
          applyMiddleware(...middlewares),
          typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );

  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(NodeBird); // NodeBird 컴포넌트에 Props로 store 넣을 수 있음
