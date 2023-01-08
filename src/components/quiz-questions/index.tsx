import { useState } from "react";
import {
  QuizHeader,
  Content,
  Question,
  QuestionHeader,
  Options,
  Option,
} from "./styled";
import { useAppSelector } from "../../hooks/hooks.redux";
import { FilledButton } from "../../shared/styled";
import { ID, Status } from "../../features/quiz/types";
import { useAppDispatch } from "../../hooks/hooks.redux";
import { increase } from "../../features/correct-answers-count/correctAnswersCountSlice";

interface Props {
  handleFinish: (status: Status) => void;
}

const QuizQuestions = ({ handleFinish }: Props) => {
  const questions = useAppSelector((state) => state.quiz);
  const correctAnswersCount = useAppSelector(
    (state) => state.correctAnswersCount
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<null | ID>(null);

  const dispatch = useAppDispatch();

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedOptionId(null);
  };

  const handleSelect = (selectedId: ID, correctId: ID) => {
    setSelectedOptionId(selectedId);
    if (selectedId === correctId) {
      dispatch(increase());
    }
  };

  return (
    <>
      <QuizHeader>{`${currentIndex + 1} of ${questions.length}`}</QuizHeader>
      <Content>
        {questions?.map((q) => (
          <Question key={q.id} currentIndex={currentIndex}>
            <QuestionHeader>{q.question}</QuestionHeader>
            <Options>
              {q.options.map((option) => (
                <Option
                  key={option.id}
                  disabled={selectedOptionId ? true : false}
                  onClick={() => handleSelect(option.id, q.correctOption)}
                  className={`${
                    selectedOptionId &&
                    q.correctOption === option.id &&
                    "correct"
                  } ${
                    selectedOptionId === option.id &&
                    selectedOptionId !== q.correctOption &&
                    "wrong"
                  }`}
                >
                  {option.content}
                </Option>
              ))}
            </Options>
          </Question>
        ))}
      </Content>
      <FilledButton
        disabled={selectedOptionId ? false : true}
        onClick={
          currentIndex < questions.length - 1
            ? handleNext
            : () => handleFinish(Status.Finished)
        }
      >
        {currentIndex < questions.length - 1 ? "next" : "show results"}
      </FilledButton>
    </>
  );
};

export default QuizQuestions;
