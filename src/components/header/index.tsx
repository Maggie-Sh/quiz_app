import { Logo, Nav } from "./styled";

const Header = () => {
  return (
    <header>
      <Nav>
        <Logo to="/">Quiz game</Logo>
      </Nav>
    </header>
  );
};

export default Header;
