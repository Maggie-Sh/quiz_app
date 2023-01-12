import { Logo, Nav, IconLink, Title } from "./styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SvgIcon from "@mui/material/SvgIcon";

const Header = () => {
  const externalLinks = [
    {
      name: "GitHub",
      to: "https://github.com/Maggie-Sh/quiz_app",
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/in/margarit-shakaryan-843302224/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <header>
      <Nav>
        <Logo to="/">Quiz game</Logo>
        {externalLinks?.map((link) => (
          <IconLink href={link.to} target="_blank">
            <SvgIcon htmlColor="#fff">{link.icon}</SvgIcon>
            <Title className="title">{link.name}</Title>
          </IconLink>
        ))}
      </Nav>
    </header>
  );
};

export default Header;
