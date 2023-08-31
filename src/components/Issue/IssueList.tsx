import React, { useRef, useEffect, useCallback } from 'react';
import { useIssueData } from '../../hooks/useIssueData';
import IssueItem from './IssueItem';
import AdBanner from '../AdBanner/AdBanner';
import LoadingComponent from '../UI/Loading/LoadingComponent';
import styled from 'styled-components';

const IssueList: React.FC = () => {
  const { issues, loading, loadMoreIssues, hasMore } = useIssueData();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastIssueRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreIssues();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, loadMoreIssues],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      {issues.map((issue, index) => (
        <IssueItemBox key={issue.id} ref={index === issues.length - 1 ? lastIssueRef : undefined}>
          {index % 4 === 0 && index !== 0 && <AdBanner />}
          <IssueItem issue={issue} />
        </IssueItemBox>
      ))}
      {loading && <LoadingComponent />}
    </div>
  );
};

export default IssueList;

const IssueItemBox = styled.div`
  width: 1200px;
  
  margin: 0 auto;

  @media (max-width: 1250px) {
    width: 90%;
  }
`;