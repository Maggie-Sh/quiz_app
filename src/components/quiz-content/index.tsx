import { useReducer } from "react";
import { QuizHeader, Select, Options, Option } from "./styled";
import { expandReducer, initialState } from "./expandReducer";

const QuizContent = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [expanded, dispatch] = useReducer(expandReducer, initialState);

  return (
    <>
      <QuizHeader>
        <p>Question 1/10</p>
        <Select>
          <button>1</button>
          <Options>
            {questions.map((question) => (
              <Option key={question}>{question}</Option>
            ))}
          </Options>
        </Select>
      </QuizHeader>
    </>
  );
};

export default QuizContent;
