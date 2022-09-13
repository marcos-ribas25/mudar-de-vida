import axios from "axios";

const apiURL = "";

function getAPIClient() {
  const api = axios.create({
    baseURL: apiURL,
  });

  return api;
}

export const api = getAPIClient();
