import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e2274b8436704cc6a8ce35a526ca8ced",
  },
});