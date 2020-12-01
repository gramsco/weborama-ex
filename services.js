import axios from "axios";

const base = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserData = (user) => {
  return base.get(`/users/${user}`);
};

export const getUserRepos = (uri) => {
  return base.get(uri);
};
