import { breadcrumbs, action } from "../interfaces";

export const initialState: breadcrumbs = {
  breadcrumbs: [],
};

export const reducer = (state: any, action: action) => {
  switch (action?.type) {
    case "breadcrumbs":
      return { ...state, open: action.value };
    default:
      return state;
  }
};
