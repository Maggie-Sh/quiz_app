import React, { useEffect, useState } from "react";
import { Container, ButtonLink } from "../../shared/styled";
import { Card } from "./styled";

const Quiz = () => {
  const [timer, setTimer] = useState(5);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <Container>
      <Card>
        <ButtonLink as="button" onClick={() => setIsStarted(true)}>
          start quiz
        </ButtonLink>
      </Card>
    </Container>
  );
};

export default Quiz;
