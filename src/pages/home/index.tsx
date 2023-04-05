import React from "react";
import Container from "../../components/container";
import { Heading, Info, Nav, CustomLink } from "./styled";

import quizList from "../../data/quizes.json";

type Quiz = {
  id: number;
  name: string;
};

type Quizes = Array<Quiz>;

const Home = () => {
  const quizes: Quizes = quizList;

  return (
    <Container sm="sm">
      <Heading>Welcome!</Heading>
      <Info>Choose a quiz to get started</Info>
      <Nav>
        {quizes?.map((quiz) => (
          <CustomLink key={quiz.id} to={`/quizes/${quiz.name}`}>
            {quiz.name}
          </CustomLink>
        ))}
      </Nav>
    </Container>
  );
};

export default Home;
