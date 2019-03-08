import {
  FETCH_SMURFS,
  FETCH_FAIL,
  FETCH_SUCCESS,
  CREATE_SMURF,
  CREATE_FAIL,
  CREATE_SUCCESS,
  UPDATE_SMURF,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  DELETE_SMURF,
  DELETE_SUCCESS,
  DELETE_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null,
        fetchingSmurfs: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case CREATE_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null,
        addingSmurf: false
      };
    case CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    case UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null,
        updatingSmurf: false
      };
    case UPDATE_FAIL:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null,
        deletingSmurf: false
      };
    case DELETE_FAIL:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false
      };
    default:
      return state;
  }
};
