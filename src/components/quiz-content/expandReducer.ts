export enum ActionType {
  EXPAND = "EXPAND",
  CHANGE_EXPANDED = "CHANGE_EXPANDED",
  UNSET = "UNSET",
}

export type Payload = number | string | null;

export interface Action {
  type: ActionType;
  payload: Payload;
}

export interface State {
  expanded: boolean;
  id: Payload;
}

export const initialState: State = { expanded: false, id: null };

export const expandReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.EXPAND:
      return { expanded: true, id: payload };
    case ActionType.CHANGE_EXPANDED:
      return { ...state, id: payload };
    case ActionType.UNSET:
      return { expanded: false, id: null };
    default:
      return state;
  }
};
