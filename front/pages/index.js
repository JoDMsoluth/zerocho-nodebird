import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch는 7.1.0 버전 이후 사용가능, 이전에는 connect함수로 HOC를 만들어주었다.
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user); // useSelector는 리듀서를 선택해줌, state는 선택된 리듀서
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST
    });
  }, []);

  // useEffect(() => {
  //   dispatch(loginAction);
  //   dispatch(logoutAction);
  //   dispatch(loginAction);
  // }, []);
  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
