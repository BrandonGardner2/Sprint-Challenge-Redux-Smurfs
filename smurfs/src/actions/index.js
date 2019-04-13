import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const CREATE_SMURF = "CREATE_SMURF";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAIL = "CREATE_FAIL";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAIL, payload: err.response.data.error });
    });
};

export const createSmurf = smurf => dispatch => {
  dispatch({ type: CREATE_SMURF });
  return axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: CREATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_FAIL, payload: err.response.data.error });
    });
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  return axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FAIL, payload: err.response.data.error });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FAIL, payload: err.response.data.error });
    });
};
