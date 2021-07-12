import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/full--clone-e9cfa/us-central1/api",
});

export default instance;
