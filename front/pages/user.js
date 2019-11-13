import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import PostCard from "./PostCard";
import { Card, Avatar } from "antd";
import { LOAD_USER_REQUEST } from "../reducers/user";

const User = ({ id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    });
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id
    });
  }, []);

  return (
    <div>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹
              <br />
              {userInfo.Post}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
          />
        </Card>
      ) : null}
      {mainPosts.map(c => (
        <PostCard key={+c.createdAt} post={c} />
      ))}
    </div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired
};

User.getInitialProps = async context => {
  // getInitialProps는 next에서 추가해주는 라이프사이클 componentDidMount보다 더 먼저 실행(서버에서도 실행됨, 서버와 관련된 코드를 실행)
  // 사전에 _app.js에서 getInitialProps를 설정해줘야됨
  console.log("hashtag getInitialProps : ", context.query.id);
  return { id: parseInt(context.query.id, 10) };
};

export default User;
