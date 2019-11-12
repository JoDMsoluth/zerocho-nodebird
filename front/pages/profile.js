import React from "react";
import { Button, List, Card, Icon } from "antd";
import NicknameEditForm from "./NicknameEditForm";

const Profile = () => {
  return (
    <>
      <NicknameEditForm />
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로잉 목록</div>}
        loadMore={<Button style={{ width: "100%" }}>더보기</Button>}
        bordered
        dataSource={["제로초", "바보", "노드버드오피셜"]}
        renderItem={item => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default Profile;
