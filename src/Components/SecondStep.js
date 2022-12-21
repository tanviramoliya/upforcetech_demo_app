import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Field } from "formik";
import React from "react";

const SecondStep = ({ errors, touched }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Field
          validateOnBlur
          validateOnChange
          name="AddressLine1"
          render={({ form }) => (
            <TextField
              name={"AddressLine1"}
              label="Address Line 1"
              fullWidth
              error={Boolean(
                form.errors.AddressLine1 && form.touched.AddressLine1
              )}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.AddressLine1 &&
                form.touched.AddressLine1 &&
                String(form.errors.AddressLine1)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="AddressLine2"
          render={({ form }) => (
            <TextField
              name={"AddressLine2"}
              label="Address Line 2"
              fullWidth
              error={Boolean(
                form.errors.AddressLine2 && form.touched.AddressLine2
              )}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.AddressLine2 &&
                form.touched.AddressLine2 &&
                String(form.errors.AddressLine2)
              }
            />
          )}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        {" "}
        <Field
          validateOnBlur
          validateOnChange
          name="City"
          render={({ form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.City &&
                form.touched.City &&
                String(form.errors.City)
              }
            >
              <InputLabel
                id={`${
                  form.errors.City &&
                  form.touched.City &&
                  String(form.errors.City)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
              >
                City
              </InputLabel>
              <Select
                labelId={`${
                  form.errors.City &&
                  form.touched.City &&
                  String(form.errors.City)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
                id="demo-simple-select-error"
                name="City"
                label="Blood Group"
                onChange={(e) => {
                  form.setFieldValue("City", e.target.value);
                }}
                onBlur={form.handleBlur}
                value={form.values.City}
              >
                <MenuItem value={"Surat"}>Surat</MenuItem>
                <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
                <MenuItem value={"Baroda"}>Baroda</MenuItem>
                <MenuItem value={"Junagadh"}>Junagadh</MenuItem>
              </Select>
              {form.errors.City &&
                form.touched.City &&
                String(form.errors.City) && (
                  <FormHelperText>{form.errors.City}</FormHelperText>
                )}
            </FormControl>
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="State"
          render={({ form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.State &&
                form.touched.State &&
                String(form.errors.State)
              }
            >
              <InputLabel
                id={`${
                  form.errors.State &&
                  form.touched.State &&
                  String(form.errors.State)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
              >
                State
              </InputLabel>
              <Select
                labelId={`${
                  form.errors.State &&
                  form.touched.State &&
                  String(form.errors.State)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
                id="demo-simple-select-error"
                name="State"
                label="Blood Group"
                onChange={(e) => {
                  form.setFieldValue("State", e.target.value);
                }}
                onBlur={form.handleBlur}
                value={form.values.State}
              >
                <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                <MenuItem value={"Bihar"}>Bihar</MenuItem>
                <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
              </Select>
              {form.errors.State &&
                form.touched.State &&
                String(form.errors.State) && (
                  <FormHelperText>{form.errors.State}</FormHelperText>
                )}
            </FormControl>
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        {" "}
        <Field
          validateOnBlur
          validateOnChange
          name="Country"
          render={({ field, form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.Country &&
                form.touched.Country &&
                String(form.errors.Country)
              }
            >
              <InputLabel
                id={`${
                  form.errors.Country &&
                  form.touched.Country &&
                  String(form.errors.Country)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
              >
                Country
              </InputLabel>
              <Select
                labelId={`${
                  form.errors.Country &&
                  form.touched.Country &&
                  String(form.errors.Country)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
                id="demo-simple-select-error"
                name="Country"
                label="Blood Group"
                onChange={(e) => {
                  form.setFieldValue("Country", e.target.value);
                }}
                onBlur={form.handleBlur}
                value={form.values.Country}
              >
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"United States"}>United States</MenuItem>
                <MenuItem value={"Africa"}>Africa</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
              </Select>
              {form.errors.Country &&
                form.touched.Country &&
                String(form.errors.Country) && (
                  <FormHelperText>{form.errors.Country}</FormHelperText>
                )}
            </FormControl>
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="PinCode"
          render={({ field, form }) => (
            <TextField
              name={"PinCode"}
              label="Pin Code"
              fullWidth
              error={Boolean(form.errors.PinCode && form.touched.PinCode)}
              type="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.PinCode &&
                form.touched.PinCode &&
                String(form.errors.PinCode)
              }
            />
          )}
        />
      </Box>
    </>
  );
};
export default SecondStep;
