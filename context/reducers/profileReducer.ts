import * as interfaces from "../interfaces";

export const initialState: interfaces.profileDetails = {
  profileDetails: {},
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "user-profile":
      return { ...state, profileDetails: action.value };
    default:
      return state;
  }
};
