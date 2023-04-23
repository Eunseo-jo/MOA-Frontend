import React, { useState } from "react";
import styled from "styled-components";
import Dropdownbutton from "./Dropdownbutton";
import { ImCheckmark, ImCross } from "react-icons/im";
import axios from "axios";
import { useParams } from "react-router-dom";

const NoticeListWrap = styled.div`
  width: 1045px;
  height: 143px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-top: 32px;

  &.vote_done {
    background-color: #e9e9e9;
  }
`;

const NoticeListHeader = styled.div`
  padding: 10px;
  padding-left: 2%;
  display: flex;
  justify-content: space-between;
`;

const NoticeListDate = styled.span`
  color: #6c6b6b;
  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  display: flex;
`;

const NoticeDropdownDiv = styled.div`
  position: absolute;
  left: 1080px;
`;

const NoticeListContent = styled.div`
  padding: 10px;
  padding-left: 2%;
  font-family: "Inter";
  font-style: normal;
  font-size: 18px;
  height: 50px;
`;

const NoticeEditInput = styled.textarea`
  resize: none;
  width: 1000px;
  height: 50px;
`;

const VotingBtnDiv = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10px;
`;

const VotingPositive = styled.button`
  border: none;
  background: none;
  color: #63b730;
  cursor: pointer;
  margin-right: 5px;
`;

const VotingNegative = styled.button`
  border: none;
  background: none;
  color: #ff4242;
  cursor: pointer;
`;

const VoteFinishNotice = styled.p`
  position: relative;
  bottom: 13px;
  left: 5px;
`;

const NoticeItem = ({
  newnotice,
  onNoticeDelete,
  onEditNotice,
  onVoteFinish,
  author,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [isEdit, setIsEdit] = useState(false);
  const [isVote, setIsVote] = useState(true);
  const [curContent, setCurContent] = useState(newnotice.content);
  const { postId } = useParams();

  const AttendanceHandler = () => {
    axios
      .post(
        `http://13.125.111.131:8080/recruitment/${postId}/notice/${newnotice.noticeId}/vote/ATTENDANCE`,
        null,
        {
          headers: {
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => console.log(response.data));
  };

  const NoAttendanceHandler = () => {
    axios
      .post(
        `http://13.125.111.131:8080/recruitment/${postId}/notice/${newnotice.noticeId}/vote/NONATTENDANCE`,
        null,
        {
          headers: {
            Authorization: window.localStorage.getItem("Authorization"),

            AuthorizationRefresh: window.localStorage.getItem(
              "AuthorizationRefresh"
            ),
          },
        }
      )
      .then((response) => console.log(response.data));
  };

  const isEditSetting = (EditValue) => {
    setIsEdit(EditValue);
  };

  const editNoticeHandler = (id, newContent) => {
    if (newContent.length === 0) {
      alert("수정할 내용을 입력해주세요!");
      setCurContent(newnotice.content);
      return;
    }
    onEditNotice(id, newContent);
    setIsEdit(!isEdit);
  };

  const voteFinishHandler = (id, votestate) => {
    onVoteFinish(id, votestate);
    setIsVote(!isVote);
  };

  return (
    <>
      {author ? (
        <>
          <NoticeListWrap className={!isVote ? "vote_done" : ""}>
            <NoticeListHeader>
              <div>
                <NoticeListDate className={!isVote ? "vote_done" : ""}>
                  {date}
                  {!isVote && <span>추천 지역: 서울역??</span>}
                </NoticeListDate>
              </div>
              <NoticeDropdownDiv>
                <Dropdownbutton
                  author={true}
                  newnotice={newnotice}
                  onNoticeDelete={onNoticeDelete}
                  isEditSetting={isEditSetting}
                  voteFinishHandler={voteFinishHandler}
                />
              </NoticeDropdownDiv>
            </NoticeListHeader>

            {!isEdit ? (
              <>
                <NoticeListContent>{newnotice.content}</NoticeListContent>
              </>
            ) : (
              <NoticeListContent>
                <NoticeEditInput
                  value={curContent}
                  onChange={(e) => setCurContent(e.target.value)}
                />
                <button
                  onClick={() =>
                    editNoticeHandler(newnotice.noticeId, curContent)
                  }
                >
                  수정완료
                </button>
                <button onClick={() => setIsEdit(!isEdit)}>취소</button>
              </NoticeListContent>
            )}

            {newnotice.checkVote && !isEdit && (
              <VotingBtnDiv>
                <VotingPositive onClick={AttendanceHandler}>
                  참여 <ImCheckmark />
                </VotingPositive>
                <VotingNegative onClick={NoAttendanceHandler}>
                  불참여 <ImCross />
                </VotingNegative>
              </VotingBtnDiv>
            )}

            {!isVote && (
              <VoteFinishNotice>투표가 마감되었습니다</VoteFinishNotice>
            )}
          </NoticeListWrap>
        </>
      ) : (
        <>
          <NoticeListWrap className={!isVote ? "vote_done" : ""}>
            <NoticeListHeader>
              <div>
                <NoticeListDate className={!isVote ? "vote_done" : ""}>
                  {date}
                  {!isVote && <span>추천 지역: 서울역??</span>}
                </NoticeListDate>
              </div>
              <NoticeDropdownDiv>
                <Dropdownbutton
                  author={false}
                  newnotice={newnotice}
                  onNoticeDelete={onNoticeDelete}
                  isEditSetting={isEditSetting}
                  voteFinishHandler={voteFinishHandler}
                />
              </NoticeDropdownDiv>
            </NoticeListHeader>

            <>
              <NoticeListContent>{newnotice.content}</NoticeListContent>
            </>

            {newnotice.checkVote && (
              <VotingBtnDiv>
                <VotingPositive onClick={AttendanceHandler}>
                  참여 <ImCheckmark />
                </VotingPositive>
                <VotingNegative onClick={NoAttendanceHandler}>
                  불참여 <ImCross />
                </VotingNegative>
              </VotingBtnDiv>
            )}

            {!isVote && (
              <VoteFinishNotice>투표가 마감되었습니다</VoteFinishNotice>
            )}
          </NoticeListWrap>
        </>
      )}
    </>
  );
};

export default NoticeItem;
