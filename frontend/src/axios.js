import axios from "axios";

export const baseURL = "http://localhost:3001";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default instance;
