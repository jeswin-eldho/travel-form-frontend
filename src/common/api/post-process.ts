import { ApiErrorResponse, ApiResponse } from "apisauce";
import humps from "humps";

import { ApiError, ErrorResponse } from "@common/api/error";

export const processResponse = <T>(response: ApiResponse<T, ErrorResponse>, shouldCamelize = true) => {
  if (response.ok) {
    if (shouldCamelize) {
      return humps.camelizeKeys(response.data as any) as unknown as T;
    }
    return response.data as T;
  }

  throw new ApiError(response as ApiErrorResponse<ErrorResponse>);
};
