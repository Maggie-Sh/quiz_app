import { useEffect, useState } from "react";
import Container from "../../components/container";
import { ButtonLink } from "../../shared/styled";
import { Counter } from "./styled";
import QuizContent from "../../components/quiz-content";

enum Status {
  Not_Started = "NOT_STARTED",
  Is_Loading = "IS_LOADING",
  In_Progress = "IN_PROGRESS",
  Finished = "FINISHED",
}

const Quiz = () => {
  const [timer, setTimer] = useState(3);
  const [status, setStatus] = useState(Status.Not_Started);

  const handleStatusChange = (value: Status) => {
    setStatus(value);
  };

  useEffect(() => {
    if (status === Status.Is_Loading) {
      if (timer) {
        const timerId = setTimeout(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      } else {
        setStatus(Status.In_Progress);
      }
    }
  }, [status, timer]);

  return (
    <Container
      center={
        status === Status.Not_Started || status === Status.Is_Loading
          ? "true"
          : ""
      }
    >
      {status === Status.Not_Started ? (
        <ButtonLink
          as="button"
          onClick={() => handleStatusChange(Status.Is_Loading)}
        >
          start quiz
        </ButtonLink>
      ) : status === Status.Is_Loading ? (
        <Counter>{timer}</Counter>
      ) : (
        <QuizContent />
      )}
    </Container>
  );
};

export default Quiz;
