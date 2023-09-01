import styled from "styled-components";
import { colors } from "../../constants/colors";
import { Endpoints } from "@octokit/types";
import { Link } from "react-router-dom";
import { AiOutlineComment } from "react-icons/ai";
import convertDateToKorean from "../../utils/convertDate";

type IssueItemProps = {
  issue: Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"][number];
};

const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <Link
      to={`/issue/${issue.number}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <IssueLayout>
        <IssueHeaderContainer>
          <IssueTitleContainer>
            <span>[#{issue.number}]</span>
            <span>&nbsp;{issue.title}</span>
          </IssueTitleContainer>
          <RightContent>
            <AiOutlineComment size={25}></AiOutlineComment>
            <span> {issue.comments}</span>
          </RightContent>
        </IssueHeaderContainer>
        <IssueDetailsContainer>
          <span>✍🏻 작성자: {issue.user?.login}</span>
          <span>🗓️ 작성일:{convertDateToKorean(issue.created_at)}</span>
        </IssueDetailsContainer>
      </IssueLayout>
    </Link>
  );
};

export default IssueItem;

const IssueLayout = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;

  &:hover {
    background-color: ${colors.hover};
  }
`;

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1250px) {
    height: auto; /* 높이를 자동으로 설정하여 내용에 맞게 조절합니다. */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const IssueTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  max-width: calc(100% - 100px);

  & > span:first-child {
    font-weight: bold;
    text-align: right;
    width: 70px;
    text-align: center;
  }

  & > span:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 70px);
  }
`;

const IssueDetailsContainer = styled.div`
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;

const RightContent = styled.div`
  display: flex;
  gap: 10px;
  width: 100px;
`;
