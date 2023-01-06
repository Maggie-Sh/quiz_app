import { useReducer } from "react";
import { QuizHeader, Select, SelectButton, Options, Option } from "./styled";
import { expandReducer, ActionType, Payload } from "./expandReducer";

const QuizContent = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [expand, dispatch] = useReducer(expandReducer, {
    expanded: false,
    id: questions[0],
  });

  const handleExpand = () => {
    dispatch({
      type: ActionType.EXPAND,
      payload: { expanded: expand?.expanded ? false : true },
    });
  };

  const handleSelect = (id: Payload["id"]) => {
    dispatch({
      type: ActionType.CHANGE_SELECTED,
      payload: { id },
    });
  };

  return (
    <>
      <QuizHeader>
        <p>Question 1/10</p>
        <Select className={expand.expanded ? "expanded" : ""}>
          <SelectButton onClick={handleExpand} className="select-btn">
            {expand.id}
          </SelectButton>
          <Options className="select-options">
            {questions.map((question) => (
              <Option key={question} onClick={() => handleSelect(question)}>
                {question}
              </Option>
            ))}
          </Options>
        </Select>
      </QuizHeader>
    </>
  );
};

export default QuizContent;
