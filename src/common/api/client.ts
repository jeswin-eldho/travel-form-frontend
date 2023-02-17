import { create } from "apisauce";

import { BASE_URL } from "@common/api/constants";
import { ErrorResponse } from "@common/api/error";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const get = async <T, P extends {} = {}>(url: string, params?: P) =>
  await api.get<T, ErrorResponse>(url, params ?? {});
export const post = async <T, D extends any = {}>(url: string, data?: D) => await api.post<T, ErrorResponse>(url, data);
