import axios from 'axios';
import { getSession } from 'next-auth/client';

const axiosCustom = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

axiosCustom.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.token) {
      config.headers.Authorization = `Bearer ${session.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosCustom;
