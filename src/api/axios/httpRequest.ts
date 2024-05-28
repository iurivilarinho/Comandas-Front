import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://192.168.100.208:8081",
});

export default httpRequest;
