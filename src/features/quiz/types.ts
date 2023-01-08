export enum Status {
  Not_Started = "NOT_STARTED",
  Is_Loading = "IS_LOADING",
  In_Progress = "IN_PROGRESS",
  Finished = "FINISHED",
}

export type ID = number;

export type Option = {
  id: number;
  content: string;
};

export type Options = Array<Option>;

export type Question = {
  id: ID;
  question: string;
  options: Options;
  correctOption: ID;
};

export type Questions = Array<Question>;

export type SelectAnswerPayload = {
  questionId: ID;
  selectedOption: ID;
};
