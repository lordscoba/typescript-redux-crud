import axios from "axios";
import { handleError } from "../../util";
import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_VIEW_FAIL,
  USER_VIEW_REQUEST,
  USER_VIEW_SUCCESS,
} from "../constants/user_contants";

// get users
export const userGetAction = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: USER_GET_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      config
    );

    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: USER_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_GET_FAIL, payload: handleError(error) });
  }
};

// create user
export const userCreateAction =
  ({ name, username, email }: { name: any; username: any; email: any }) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_CREATE_REQUEST });
      let FD = new FormData();

      FD.append("name", name);
      FD.append("username", username);
      FD.append("email", email);

      const config = {
        headers: {
          "Content-Type": "application/json",
          //   "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        FD,
        config
      );
      dispatch({ type: USER_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_CREATE_FAIL, payload: handleError(error) });
    }
  };

// get a single user
export const userViewAction =
  (id: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_VIEW_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        config
      );

      dispatch({
        type: USER_VIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: USER_VIEW_FAIL, payload: handleError(error) });
    }
  };

// update action
export const userUpdateAction =
  (id: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        config
      );
      dispatch({ type: USER_UPDATE_SUCCESS });
    } catch (error) {
      dispatch({ type: USER_UPDATE_FAIL, payload: handleError(error) });
    }
  };

// delete action
export const userDeleteAction =
  (id: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_DELETE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.delete(
        `
      https://jsonplaceholder.typicode.com/users/${id}`,
        config
      );

      dispatch({ type: USER_DELETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_DELETE_FAIL, payload: handleError(error) });
    }
  };
