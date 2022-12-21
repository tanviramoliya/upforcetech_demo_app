import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { firstStepInitValues, secondStepStepInitValues } from "../utils/initialValues";

const ThirdStep = () => {
  const firstStepValues =
    JSON.parse(localStorage.getItem("step1")) || firstStepInitValues;
  const secondStepValues =
    JSON.parse(localStorage.getItem("step2")) || secondStepStepInitValues;
  return (
    <>
      <h1 className="success-msg"> Data Added Successfully!</h1>
      <List component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText>Name </ListItemText>
          <ListItemText>Value </ListItemText>
        </ListItem>
        <Divider light />

        {Object.entries(firstStepValues).map(([key, value], i) => (
          <>
            <ListItem>
              <ListItemText>{key} </ListItemText>
              <ListItemText>{value} </ListItemText>
            </ListItem>
            <Divider light />
          </>
        ))}
        {Object.entries(secondStepValues).map(([key, value], i) => (
          <>
            <ListItem>
              <ListItemText>{key} </ListItemText>
              <ListItemText>{value} </ListItemText>
            </ListItem>
            <Divider light />
          </>
        ))}
      </List>
    </>
  );
};
export default ThirdStep;
