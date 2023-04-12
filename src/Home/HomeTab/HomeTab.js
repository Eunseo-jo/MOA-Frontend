import styled from "styled-components";
import React, {useState, useEffect, lazy, Suspense } from "react";

const TopPost = lazy(() => import('./TopPost'));
const NewPost = lazy(() => import('./NewPost'));
const RecruitingPost = lazy(() => import('./RecruitingPost'));
const RecommendPost = lazy(() => import('./RecommendPost'));

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const TabContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 50px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #B2B2B2;
`;

const TabList = styled.div`
    width: 137px;
    height: 53px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #B2B2B2;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    &.active{
      color: black;
      border-bottom: 3px solid #5d5fef;
      z-index: 1;
    }
    & + & {
      margin-left: 10px;
    }
  `;

  const PostContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: left;
  `;

const HomeTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (tabId) => {
        setActiveTab(tabId);
    };
    const tabList = [
        {
          Title: <div onClick={() => onClickTab(0)}>새로운 글</div>,
          Content: (
            <Suspense>
              <NewPost/>
            </Suspense>
          )
        },
        {
          Title: <div onClick={() => onClickTab(1)}>모집 중인 글</div>,
          Content: (
            <Suspense>
              <RecruitingPost />
            </Suspense>
          )
        },
        {
          Title: <div onClick={() => onClickTab(2)}>추천 글</div>,
          Content: (
            <Suspense>
              <RecommendPost/>        
            </Suspense>
          )
        },
        {
          Title: <div onClick={() => onClickTab(3)}>인기글</div>,
          Content: (
            <Suspense>
              <TopPost />      
            </Suspense>
          )
        }
      ];

    return (
      <Wrapper>
        <TabContainer>
        {tabList.map((tab, index) => {
          return (
            <TabList
              className={activeTab === index ? "active" : ""}
              key={index}
            >
              {tab.Title}
            </TabList>
          );
        })}
      </TabContainer>
      <PostContainer>
      {tabList[activeTab].Content}
      </PostContainer>
      </Wrapper>
    )
}

export default HomeTab;