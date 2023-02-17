import React, { useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography, useTheme } from "@mui/material";

import { flex } from "@common/theme";
import { Button } from "@components/button";
import { Snackbar } from "@components/snackbar";
import { saveFormData } from "@features/form/api";

export const Form = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfTravellers, setNumberOfTravellers] = useState(0);
  const [budgetPerPerson, setBudgetPerPerson] = useState(0);
  const [destination, setDestination] = useState("India");

  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const destinations = ["India", "Africa", "Europe"];

  const resetState = () => {
    setFormLoading(false);
    setName("");
    setEmail("");
    setBudgetPerPerson(0);
    setDestination("India");
    setNumberOfTravellers(0);
  };

  const handleFormSubmit = async () => {
    try {
      setFormLoading(true);
      await saveFormData(name, email, destination, numberOfTravellers, budgetPerPerson);
      setFormSuccess(true);
      setShowSnackbar(true);
    } catch {
      setShowSnackbar(true);
      setFormError(true);
    } finally {
      setFormLoading(false);
      resetState();
    }
  };

  const onSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        ...flex("column", "center", "center"),
      }}>
      <Paper
        sx={{
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
          p: "60px",
        }}>
        <Typography fontSize={theme.spacing(8)} fontWeight={700} sx={{ mb: theme.spacing(5) }}>
          Enter your details
        </Typography>
        <Box sx={{ width: theme.spacing(200), mb: theme.spacing(8) }}>
          <TextField
            label="Name"
            sx={{
              width: "100%",
              mt: theme.spacing(1),
              "& label.Mui-focused": {
                color: "text.primary",
              },
              borderColor: "grey.400",
            }}
            placeholder="John Doe"
            variant="outlined"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ width: theme.spacing(200), mb: theme.spacing(8) }}>
          <TextField
            label="Email"
            sx={{
              width: "100%",
              mt: theme.spacing(1),
              "& label.Mui-focused": {
                color: "text.primary",
              },
              borderColor: "grey.400",
            }}
            placeholder="john@mail.com"
            variant="outlined"
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ width: theme.spacing(200), mb: theme.spacing(8) }}>
          <Box sx={{ ...flex("row", "", ""), gap: "30px" }}>
            <FormControl sx={{ m: 1, flexBasis: "40%" }}>
              <InputLabel id="demo-simple-select-label">Where do you want to go?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Where do you want to go?"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}>
                {destinations.map((destinationItem) => {
                  return (
                    <MenuItem value={destinationItem} key={destinationItem}>
                      {destinationItem}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              label="Number of travellers"
              sx={{
                flexBasis: "30%",
                mt: theme.spacing(1),
                "& label.Mui-focused": {
                  color: "text.primary",
                },
                borderColor: "grey.400",
              }}
              placeholder="10"
              variant="outlined"
              value={numberOfTravellers}
              type="number"
              onChange={(e) => {
                setNumberOfTravellers(parseInt(e.target.value));
              }}
            />
            <TextField
              label="Budget per person"
              sx={{
                flexBasis: "33%",
                mt: theme.spacing(1),
                "& label.Mui-focused": {
                  color: "text.primary",
                },
                borderColor: "grey.400",
              }}
              placeholder="1000"
              variant="outlined"
              value={budgetPerPerson}
              type="number"
              onChange={(e) => {
                setBudgetPerPerson(parseInt(e.target.value));
              }}
            />
          </Box>
        </Box>
        <Button
          buttonType="primaryContained"
          disabled={!name.length || !email.length}
          loading={formLoading}
          sx={{
            minWidth: theme.spacing(28),
          }}
          onClick={() => {
            handleFormSubmit().then();
          }}>
          <Typography
            fontSize={theme.spacing(4)}
            fontWeight={600}
            sx={{
              color: "common.white",
              my: theme.spacing(3),
              mx: theme.spacing(6),
            }}>
            Submit Details
          </Typography>
        </Button>
      </Paper>
      {formError || formSuccess ? (
        <Snackbar
          snackBarType={formError ? "error" : "success"}
          snackbarText={formError ? "Failed to save form details" : "Successfully saved details"}
          open={showSnackbar}
          onClose={onSnackbarClose}
        />
      ) : null}
    </Box>
  );
};
