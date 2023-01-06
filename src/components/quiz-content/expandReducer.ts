export enum ActionType {
  EXPAND = "EXPAND",
  CHANGE_SELECTED = "CHANGE_SELECTED",
}

export type Payload = {
  id?: number | string | null;
  expanded?: boolean;
};

export interface Action {
  type: ActionType;
  payload: Payload;
}

export interface State {
  expanded: Payload["expanded"];
  id: Payload["id"];
}

export const expandReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.EXPAND:
      return { ...state, expanded: payload.expanded };
    case ActionType.CHANGE_SELECTED:
      return { expanded: false, id: payload.id };
    default:
      return state;
  }
};
