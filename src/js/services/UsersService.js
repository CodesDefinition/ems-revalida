import React from "react";
import axios from "axios";
import { API_BASE_URL } from "env";

const USER = "USER";
const TOKEN = "TOKEN";

export const buildHeaders = (args) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};

export const createSession = (args) => {
  //HTML5 LocalStorage
  localStorage.setItem("TOKEN", args.employeeId);
  localStorage.setItem("USER", JSON.stringify(args.email));
};

export const destroySession = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const getUsers = () => {
  return axios.get(`${API_BASE_URL}/revalida/users/get`);
};

export const getUser = (username, password) => {
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

export const isLoggedIn = () => {
  return getCurrentUser() != false;
};
