import { Header as StyledHeader, Title } from "./styled";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Title>{title}</Title>
    </StyledHeader>
  );
};

export default Header;
