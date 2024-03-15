import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0e64e92d43f41f9b9ae74786786d444",
  },
});

class ApiClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default ApiClient;
