import {
  all,
  put,
  fork,
  call,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  LOAD_USER_REQUEST,
  LOG_OUT_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOAD_USER_FAILURE
} from "../reducers/user";

function logInAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post("/user/logIn", loginData, {
    withCredentials: true
  });
  // 서버에 요청을 보내는 부분
}

function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}

function loadUserAPI() {
  // 서버에 요청을 보내는 부분
  return axios.get("/user/", {
    withCredentials: true
  });
}

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post("/user/", signUpData);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* logOut() {
  try {
    // yield call(logOutAPI);
    yield call(logOutAPI);
    yield put({
      // put은 dispatch 동일
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}

function* loadUser() {
  try {
    // yield call(loadUserAPI);
    const result = yield call(loadUserAPI);
    yield put({
      // put은 dispatch 동일
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function* signUp(action) {
  try {
    // yield call(signUpAPI);
    yield call(signUpAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}
// 3. 실제로 어떻게 동작할지 구현

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}
function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}
// 2. takeEvery인지 takeLatest인지 결정

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogout),
    fork(watchLoadUser)
  ]);
}
// 1. 실행할 함수 선언
