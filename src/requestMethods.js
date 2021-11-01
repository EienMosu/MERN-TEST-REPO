import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkyMTBmNGIwOThhYzY0ZDVlYmU0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTY5MzA1MCwiZXhwIjoxNjM1ODY1ODUwfQ.XXEukdaTV-R9GwFGknT1jlIqemrm-YqbuF5kEJurYRc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
