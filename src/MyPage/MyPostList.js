import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import PostComponent from "../component/PostComponent";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Content = styled.div`
  flex: 2;
  margin: 20px;
  h3{
    margin-left: 30px;
    font-size:23px;
  }
`;

const EmptyPost = styled.div`
  display: flex;
  width: 650px;
  height: 300px;
  background: #E8E8E8;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 550;
`;

const ComponentWrapper = styled.div`
  margin-left: 50px;
`;

const MyPostList = () => {
  const posts = [
    {
      id: 1,
      title: "첫 번째 글",
      date: "2022-03-29",
    },
    {
      id: 2,
      title: "두 번째 글",
      date: "2022-03-30",
    },
    {
      id: 3,
      title: "세 번째 글",
      date: "2022-03-31",
    },
  ];

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <h3>내 작성글</h3>
        {posts.length < 1 ? <EmptyPost>관심글을 등록해보세요!</EmptyPost> 
          : <ComponentWrapper>
              <PostComponent/>
            </ComponentWrapper>
        }
        
      </Content>
    </Wrapper>
  );
};

export default MyPostList;