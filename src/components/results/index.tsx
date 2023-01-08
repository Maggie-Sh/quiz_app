import React from "react";
import { Counter, ProgressBar, Message, Section } from "./styled";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks.redux";
import { FilledButton } from "../../shared/styled";
import { clearList } from "../../features/quiz/quizSlice";
import { unset } from "../../features/correct-answers-count/correctAnswersCountSlice";
import { Link } from "react-router-dom";
import { Status } from "../../features/quiz/types";

interface Props {
  handleStatusChange: (status: Status) => void;
}

const Results = ({ handleStatusChange }: Props) => {
  const correctAnswersCount = useAppSelector(
    (state) => state.correctAnswersCount.count
  );
  const totalCount = useAppSelector((state) => state.quiz.length);

  const calculatePercentage = () => {
    const percentage = Math.round((correctAnswersCount / totalCount) * 100);
    const degree = Math.round((percentage * 360) / 100);
    return [percentage, degree];
  };

  const [percentage, degree] = calculatePercentage();

  const dispatch = useAppDispatch();

  const handleUnset = () => {
    dispatch(clearList());
    dispatch(unset());
    handleStatusChange(Status.Not_Started);
  };

  return (
    <>
      <Section>
        <ProgressBar degree={degree}>
          <div className="inner">{`${percentage}%`}</div>
        </ProgressBar>
        <div>
          <Counter>{`${correctAnswersCount} of ${totalCount}`}</Counter>
          <Message>
            {percentage < 25
              ? "Next time will be better!"
              : percentage < 50
              ? "Not so bad!"
              : percentage < 75
              ? "Nice!"
              : "Great!"}
          </Message>
        </div>
      </Section>
      <Section className="dir-column">
        <FilledButton className="small" onClick={handleUnset}>
          try again
        </FilledButton>
        <FilledButton className="small" onClick={handleUnset} as={Link} to="/">
          back home
        </FilledButton>
      </Section>
    </>
  );
};

export default Results;
