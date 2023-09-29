import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b07f3bc330784154bfc2b13727c2e1e2",
  },
});