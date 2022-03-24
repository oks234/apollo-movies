import { Header as StyledHeader, Title } from "./styled";

const Header = (props) => {
  console.log(props);
  return (
    <StyledHeader>
      <Title>{props.title}</Title>
      {props.children ? props.children : null}
    </StyledHeader>
  );
};

export default Header;
