import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "043a89d1321143bc8875206a59f3941a",
  },
});