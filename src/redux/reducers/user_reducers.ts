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

type StateType = {
  loading: boolean;
  success: boolean;
  error: any;
  userInfo: any;
};

const initialState: StateType = {
  loading: false,
  success: false,
  error: "",
  userInfo: {},
};

export const userCreateReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { loading: true };
    case USER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
        userInfo: action.payload,
      };
    case USER_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
        userInfo: action.payload,
      };
    case USER_UPDATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userGetReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return { loading: true };
    case USER_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
        userInfo: action.payload,
      };
    case USER_GET_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userViewReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_VIEW_REQUEST:
      return { loading: true };
    case USER_VIEW_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
        userInfo: action.payload,
      };
    case USER_VIEW_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
        userInfo: action.payload,
      };
    case USER_DELETE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
