import React from "react";

import { Paper, Typography, useTheme } from "@mui/material";

import { useQuery } from "@common/api";
import { Loader } from "@components/loader";
import { getSubmissions, SubmissionsResponse } from "@features/form/api";
import { SubmissionList } from "@features/form/components/submission-list";

export const Submissions = () => {
  const theme = useTheme();

  const {
    isLoading: isSubmissionsLoading,
    isError: isSubmissionsError,
    data: submissionList,
  } = useQuery<SubmissionsResponse>("formData", async () => getSubmissions().then(), {
    refetchInterval: 60000,
  });

  return (
    <>
      <Typography
        fontSize={theme.spacing(10)}
        fontWeight={700}
        sx={{ mb: theme.spacing(10), mt: theme.spacing(10), textAlign: "center" }}>
        Form Submissions
      </Typography>
      <Paper
        sx={{
          maxHeight: "80%",
          overflow: "scroll",
          backgroundColor: theme.palette.background.default,
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
          borderRadius: theme.spacing(1),
          width: "80%",
          mx: "auto",
        }}>
        {isSubmissionsError || isSubmissionsLoading ? (
          <Loader error={isSubmissionsError} />
        ) : !!submissionList ? (
          <SubmissionList submissionList={submissionList?.data} />
        ) : null}
      </Paper>
    </>
  );
};
