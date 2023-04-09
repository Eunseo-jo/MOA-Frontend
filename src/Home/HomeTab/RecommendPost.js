import styled from "styled-components";
import React, {useState, useEffect} from "react";
import PostComponent from "../../component/PostComponent"

const PostContainerWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  & > * {
    width: calc((100 - 2 * 10px) / 4); 
    margin: 10px; 
  }
`;

const RecommendPost = () => {
    const [topPost, setTopPost] = useState([
        {
            "title" : "title1",
            "author" : "username1",
            "category" : "���α׷���",
            "recruitStatus" : "������",
            "createAt" : "2023-04-01",
            "profileImage" : "image", // ���� �̹��� ��� �߰� �� ���� ����
            "replyCount" : 5,
        },
        {
            "title" : "title2",
            "author" : "username2",
            "category" : "����",
            "recruitStatus" : "�����Ϸ�",
            "createAt" : "2023-04-03",
            "profileImage" : "image", // ���� �̹��� ��� �߰� �� ���� ����
            "replyCount" : 4,
        },{
            "title" : "title1",
            "author" : "username1",
            "category" : "���α׷���",
            "recruitStatus" : "������",
            "createAt" : "2023-04-01",
            "profileImage" : "image", // ���� �̹��� ��� �߰� �� ���� ����
            "replyCount" : 5,
        },
        {
            "title" : "title2",
            "author" : "username2",
            "category" : "����",
            "recruitStatus" : "�����Ϸ�",
            "createAt" : "2023-04-03",
            "profileImage" : "image", // ���� �̹��� ��� �߰� �� ���� ����
            "replyCount" : 4,
        }
    ])
return(

    <PostContainerWrapper>
        <PostComponent type={"main"}/>
  
    </PostContainerWrapper>
)

}

export default RecommendPost;