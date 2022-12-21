import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Field } from "formik";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";

const FirstStep = ({ errors, touched }) => {
  const [dob, setDOB] = useState("");
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
          name="FirstName"
          render={({ form }) => (
            <TextField
              name={"FirstName"}
              label="First Name"
              fullWidth
              error={Boolean(form.errors.FirstName && form.touched.FirstName)}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.FirstName &&
                form.touched.FirstName &&
                String(form.errors.FirstName)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="MiddleName"
          render={({ form }) => (
            <TextField
              name={"MiddleName"}
              label="Middle Name"
              fullWidth
              error={Boolean(form.errors.MiddleName && form.touched.MiddleName)}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.MiddleName &&
                form.touched.MiddleName &&
                String(form.errors.MiddleName)
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
        <Field
          validateOnBlur
          validateOnChange
          name="LastName"
          render={({ form }) => (
            <TextField
              name={"LastName"}
              label="Last Name"
              fullWidth
              error={Boolean(form.errors.LastName && form.touched.LastName)}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.LastName &&
                form.touched.LastName &&
                String(form.errors.LastName)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="MobileNo"
          render={({ form }) => (
            <TextField
              name={"MobileNo"}
              label="Mobile No"
              fullWidth
              error={Boolean(form.errors.MobileNo && form.touched.MobileNo)}
              type="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.MobileNo &&
                form.touched.MobileNo &&
                String(form.errors.MobileNo)
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
          name="Email"
          render={({ form }) => (
            <TextField
              name={"Email"}
              label="Email"
              fullWidth
              error={Boolean(form.errors.Email && form.touched.Email)}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.Email &&
                form.touched.Email &&
                String(form.errors.Email)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="Birthday"
          render={({ form }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Birthday"
                value={dob}
                onChange={(newValue) => {
                  setDOB(newValue);
                  form.setFieldValue(
                    "Birthday",
                    moment(new Date(newValue)).format("DD-MM-YYYY")
                  );
                }}
                inputFormat="DD-MM-YYYY"
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    error={errors.Birthday && touched.Birthday && String(errors.Birthday)}
                    helperText={errors.Birthday && touched.Birthday && String(errors.Birthday)}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
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
          name="Age"
          render={({ field, form }) => (
            <TextField
              name={"Age"}
              label="Age"
              fullWidth
              error={Boolean(form.errors.Age && form.touched.Age)}
              type="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.Age && form.touched.Age && String(form.errors.Age)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="BloodGroup"
          render={({ form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.BloodGroup &&
                form.touched.BloodGroup &&
                String(form.errors.BloodGroup)
              }
            >
              <InputLabel
                id={`${
                  form.errors.BloodGroup &&
                  form.touched.BloodGroup &&
                  String(form.errors.BloodGroup)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
              >
                Blood Group
              </InputLabel>
              <Select
                labelId={`${
                  form.errors.BloodGroup &&
                  form.touched.BloodGroup &&
                  String(form.errors.BloodGroup)
                    ? "demo-simple-select-error-label"
                    : "demo-simple-select-label"
                }`}
                id="demo-simple-select-error"
                name="BloodGroup"
                label="Blood Group"
                onChange={(e) => {
                  form.setFieldValue("BloodGroup", e.target.value);
                }}
                onBlur={form.handleBlur}
                value={form.values.BloodGroup}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"O"}>O</MenuItem>
                <MenuItem value={"AB"}>AB</MenuItem>
              </Select>
              {form.errors.BloodGroup &&
                form.touched.BloodGroup &&
                String(form.errors.BloodGroup) && (
                  <FormHelperText>{form.errors.BloodGroup}</FormHelperText>
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
          name="Height"
          render={({ form }) => (
            <TextField
              name={"Height"}
              label="Height"
              fullWidth
              error={Boolean(form.errors.Height && form.touched.Height)}
              type="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.Height &&
                form.touched.Height &&
                String(form.errors.Height)
              }
            />
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="Weight"
          render={({ form }) => (
            <TextField
              name={"Weight"}
              label="Weight"
              fullWidth
              error={Boolean(form.errors.Weight && form.touched.Weight)}
              type="number"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              helperText={
                form.errors.Weight &&
                form.touched.Weight &&
                String(form.errors.Weight)
              }
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Field
          validateOnBlur
          validateOnChange
          name="Gender"
          render={({ form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.Gender &&
                form.touched.Gender &&
                String(form.errors.Gender)
              }
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                name="Gender"
                onChange={(e) => form.setFieldValue("Gender", e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              {form.errors.Gender &&
                form.touched.Gender &&
                String(form.errors.Gender) && (
                  <FormHelperText variant="error">
                    {form.errors.Gender}
                  </FormHelperText>
                )}
            </FormControl>
          )}
        />
        <Field
          validateOnBlur
          validateOnChange
          name="MaritalStatus"
          render={({ form }) => (
            <FormControl
              fullWidth
              error={
                form.errors.MaritalStatus &&
                form.touched.MaritalStatus &&
                String(form.errors.MaritalStatus)
              }
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                Marital Status
              </FormLabel>
              <RadioGroup
                row
                name="MaritalStatus"
                onChange={(e) => form.setFieldValue("MaritalStatus", e.target.value)}
              >
                <FormControlLabel
                  value="Single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="Married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="Divorced"
                  control={<Radio />}
                  label="Divorced"
                />
                <FormControlLabel
                  value="Widowed"
                  control={<Radio />}
                  label="Widowed"
                />
              </RadioGroup>
              {form.errors.MaritalStatus &&
                form.touched.MaritalStatus &&
                String(form.errors.MaritalStatus) && (
                  <FormHelperText variant="error">
                    {form.errors.MaritalStatus}
                  </FormHelperText>
                )}
            </FormControl>
          )}
        />
      </Box>
    </>
  );
};
export default FirstStep;
