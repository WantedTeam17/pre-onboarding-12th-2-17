import useRepoData from '../hooks/useRepoData';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const Header = () => {
  const repoData = useRepoData();
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderTitle>
        {repoData ? `${repoData.owner.login} / ${repoData.name}` : null}
      </HeaderTitle>

      <HeaderButton>
        <Button variant="primary" onClick={() => {navigate('/')}}>목록으로</Button>
      </HeaderButton>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderTitle = styled.h1`
  margin-left: 20px;
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;

const HeaderButton = styled.div`
  margin-right: 20px;
  text-align: center;

  & > button:hover {
    color: ${colors.primary};
  }
`;
