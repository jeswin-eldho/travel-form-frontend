import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

import { Submission } from "@features/form/api";

export type TextListProps = {
  submissionList: Submission[];
};

export const SubmissionList: React.FC<TextListProps> = ({ submissionList }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #F5F5F5",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.12)",
          display: "flex",
          pl: theme.spacing(8),
          py: theme.spacing(7),
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.default,
        }}>
        <Typography fontWeight={800} fontSize={theme.spacing(4)} sx={{ flexBasis: "20%" }}>
          Name
        </Typography>
        <Typography fontWeight={800} fontSize={theme.spacing(4)} sx={{ flexBasis: "20%" }}>
          Email
        </Typography>
        <Typography fontWeight={800} fontSize={theme.spacing(4)} sx={{ flexBasis: "20%" }}>
          Destination
        </Typography>
        <Typography fontWeight={800} fontSize={theme.spacing(4)} sx={{ flexBasis: "20%" }}>
          Number Of Travellers
        </Typography>
        <Typography fontWeight={800} fontSize={theme.spacing(4)} sx={{ flexBasis: "20%" }}>
          Budget Per Person
        </Typography>
      </Box>
      {submissionList.map((submission) => {
        return (
          <Box sx={{ display: "flex", pl: theme.spacing(8), height: theme.spacing(18) }} key={submission.id}>
            <Box sx={{ display: "flex", alignItems: "center", flexBasis: "20%" }}>
              <Typography fontWeight={700} fontSize={theme.spacing(4)}>
                {submission.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexBasis: "20%",
              }}>
              <Typography fontWeight={500} fontSize={theme.spacing(4)} sx={{ pr: theme.spacing(5) }}>
                {submission.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexBasis: "20%" }}>
              <Typography fontWeight={500} fontSize={theme.spacing(4)}>
                {submission.destination}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexBasis: "20%" }}>
              <Typography fontWeight={500} fontSize={theme.spacing(4)}>
                {submission.numberOfTravellers}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexBasis: "20%" }}>
              <Typography fontWeight={500} fontSize={theme.spacing(4)}>
                {submission.budgetPerPerson}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
