import { useEffect, useState } from "react";
import Container from "../../components/container";
import { FilledButton } from "../../shared/styled";
import { CenteredContainer, Counter, QuizName } from "./styled";
import QuizQuestions from "../../components/quiz-questions";
import { useAppDispatch } from "../../hooks/hooks.redux";
import { setList } from "../../features/quiz/quizSlice";
import { Status } from "../../features/quiz/types";
import capitals from "../../data/capitals.json";
import javascript from "../../data/javascript.json";
import Results from "../../components/results";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { quiz } = useParams();

  const [timer, setTimer] = useState(3);
  const [status, setStatus] = useState(Status.Not_Started);

  const dispatch = useAppDispatch();

  const handleStatusChange = (value: Status) => {
    if (value === Status.Is_Loading) {
      quiz === "capitals"
        ? dispatch(setList(capitals))
        : dispatch(setList(javascript));
    }
    if (value === Status.Not_Started) {
      setTimer(3);
    }
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
    <Container>
      {status === Status.Not_Started ? (
        <CenteredContainer>
          <QuizName>Countries and Capitals quiz</QuizName>
          <FilledButton onClick={() => handleStatusChange(Status.Is_Loading)}>
            start
          </FilledButton>
        </CenteredContainer>
      ) : status === Status.Is_Loading ? (
        <Counter>{timer}</Counter>
      ) : status === Status.In_Progress ? (
        <QuizQuestions handleFinish={handleStatusChange} />
      ) : (
        <Results handleStatusChange={handleStatusChange} />
      )}
    </Container>
  );
};

export default Quiz;
