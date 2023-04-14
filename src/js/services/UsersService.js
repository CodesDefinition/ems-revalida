import React from "react";
import axios from "axios";
import { API_BASE_URL } from "env";

export const USER = "USER";
export const ID = "ID";
export const TOKEN = "TOKEN";
export const USERTYPE = "USERTYPE";

export const buildHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};

export const createSession = (token, id, username, userType) => {
  //HTML5 LocalStorage
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(ID, id);
  localStorage.setItem(USER, JSON.stringify(username));
  localStorage.setItem(USERTYPE, userType);
};

export const destroySession = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const isLoggedIn = () => {
  return getCurrentUser() != false;
};

export const authenticate = (username, password) => {
  return axios.get(
    `${API_BASE_URL}/revalida/users/get/query?username=${username}&password=${password}`
  );
};

export const getCurrentUser = () => {
  const currentUserStr = localStorage.getItem(USER);
  if (currentUserStr) {
    return JSON.parse(currentUserStr);
  } else {
    return false;
  }
};

//CRUD operations
export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/revalida/users/get`, {
    headers: buildHeaders(),
  });
};

export const getUserById = (id) => {
  return axios.get(`${API_BASE_URL}/revalida/users/get/${id}`, {
    headers: buildHeaders(),
  });
};

export const createUser = (args) => {
  return axios.put(`${API_BASE_URL}/revalida/users/insert`, args, {
    headers: buildHeaders(),
  });
};

export const updateUser = (args) => {
  return axios.put(`${API_BASE_URL}/revalida/users/update`, args, {
    headers: buildHeaders(),
  });
};

export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/revalida/users/delete/${id}`, {
    headers: buildHeaders(),
  });
};
