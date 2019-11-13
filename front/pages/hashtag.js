import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
import PostCard from "./PostCard";

const Hashtag = ({ tag }) => {
  console.log(tag);
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: tag
    });
  }, []);

  return (
    <div>
      {mainPosts.map(c => (
        <PostCard key={+c.createdAt} post={c} />
      ))}
    </div>
  );
};

Hashtag.propTypes = {
  tag: PropTypes.string.isRequired
};

Hashtag.getInitialProps = async context => {
  // getInitialProps는 next에서 추가해주는 라이프사이클 componentDidMount보다 더 먼저 실행(서버에서도 실행됨, 서버와 관련된 코드를 실행)
  // 사전에 _app.js에서 getInitialProps를 설정해줘야됨
  console.log("hashtag getInitialProps : ", context.query.tag);
  return { tag: context.query.tag };
};

export default Hashtag;
