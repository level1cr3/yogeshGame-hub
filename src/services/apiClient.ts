import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0e64e92d43f41f9b9ae74786786d444",
  },
});