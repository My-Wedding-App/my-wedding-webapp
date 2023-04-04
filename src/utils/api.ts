import axios, { AxiosError } from "axios";

const baseUrl = process.env.API_BASE_URL;

export const getApi = async <T>(path: string, params?: string | Record<string, unknown>): Promise<T> => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.get(url, {
    params: params,
    headers: {
      "Content-Type": "application/json",
      "USER_SECRET": process.env.USER_SECRET ?? ""
    }
  });
  return response.data;
}

export const postApi = async <T>(path: string, data: string | Record<string, unknown>): Promise<T> => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "USER_SECRET": process.env.USER_SECRET ?? ""
    }
  });
  return response.data;
}

export const putApi = async <T>(path: string, data: string | Record<string, unknown>): Promise<T> => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.put(url, data, {
    headers: {
      "Content-Type": "application/json",
      "USER_SECRET": process.env.USER_SECRET ?? ""
    }
  });
  return response.data;
}

export const deleteApi = async <T>(path: string): Promise<T> => {
  const url = `${baseUrl}/${path}`;
  const response = await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      "USER_SECRET": process.env.USER_SECRET ?? ""
    }
  });
  return response.data;
}

export const isAxiosError = (err: unknown | any) => (err instanceof AxiosError)