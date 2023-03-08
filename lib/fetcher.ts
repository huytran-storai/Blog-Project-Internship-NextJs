import useSWR from "swr";

const baseURL: string = "http://localhost:3000/";

const response = (...args: any[]) => fetch(...args).then((res) => res.json());
export default function fetcher(endpoint: any) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
