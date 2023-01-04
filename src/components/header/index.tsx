import React from "react";
import { Logo, Nav, CustomLink, RightContent } from "./styled";
import quizList from "../../data/quizes.json";

type Quiz = {
  id: number;
  name: string;
};

type Quizes = Array<Quiz>;

const Header = () => {
  const quizes: Quizes = quizList;

  return (
    <header>
      <Nav>
        <Logo to="/">Quiz game</Logo>
        <RightContent>
          {quizes.map((quiz) => (
            <CustomLink key={quiz.id} to={`/quizes/${quiz.name}`}>
              {quiz.name}
            </CustomLink>
          ))}
        </RightContent>
      </Nav>
    </header>
  );
};

export default Header;
