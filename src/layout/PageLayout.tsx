import { styled } from 'styled-components';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <MainLayout>
        <main>{children}</main>
      </MainLayout>
    </>
  );
};

export default PageLayout;

const MainLayout = styled.div`
  margin: 70px auto 0 auto;
  padding: 30px 20px 20px 0px;
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 70px);
`;

