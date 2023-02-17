import { ApiErrorResponse } from "apisauce";

import { ApiError, ErrorResponse, get, post, processResponse } from "@common/api";

export const saveFormData = async (
  name: string,
  email: string,
  destination: string,
  numberOfTravellers: number,
  budgetPerPerson: number,
) => {
  return await post<
    {},
    { name: string; email: string; destination: string; number_of_travellers: number; budget_per_person: number }
  >("/forms/", {
    name: name,
    email: email,
    destination: destination,
    number_of_travellers: numberOfTravellers,
    budget_per_person: budgetPerPerson,
  }).then((res) => {
    if (res.ok) {
      return res;
    }
    throw new ApiError(res as ApiErrorResponse<ErrorResponse>);
  });
};

export type Submission = {
  id: number;
  name: string;
  email: string;
  destination: string;
  numberOfTravellers: number;
  budgetPerPerson: number;
  createdAt: number;
};

export type SubmissionsResponse = {
  message: string;
  data: Submission[];
};

export const getSubmissions = async () => {
  return await get<SubmissionsResponse, {}>("/forms/", {}).then(processResponse);
};
