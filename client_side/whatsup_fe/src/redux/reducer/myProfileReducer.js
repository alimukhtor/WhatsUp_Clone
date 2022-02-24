import { initialState } from "../store";
import { ACTIONS, editMyProfile } from "../actions";

const myProfileReducer = (state = initialState.myProfile, action) => {
  switch (ACTIONS.type) {
    case editMyProfile.EDIT_MY_PROFILE:
      return {
        ...state,
        editedProfile: action.payload,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
