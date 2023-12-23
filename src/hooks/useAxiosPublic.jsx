import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://sky-mart-server-eight.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
