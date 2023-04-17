import React, { useEffect, useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";
import { ID, updateUser, getUserById } from "../services/UsersService";
function ChangePass() {
  // FOR STYLING
  const matches = useMediaQuery("(max-width:600px)");
  const inputLblStyles = {
    backgroundColor: "#FFF8EA",
    color: "#594545",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  };
  const outlineStyles = {
    backgroundColor: "#FFF8EA",
    borderRadius: ".3rem",
    "& .MuiInputBase-root": {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
      color: "#594545",
      fontSize: "24px",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#594545",
      },
    },
  };
  const boxStyle = {
    padding: "1rem",
    backgroundColor: "rgb(255, 248, 234)",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };
  const buttonStyle = {
    backgroundColor: "#FFF8EA",
    "&:hover": {
      color: "#FFF8EA",
      backgroundColor: "#594545",
    },
    color: "#594545",
    fontFamily: "Montserrat, sans-serif",
    padding: ".5rem",
    borderRadius: ".6rem",
    fontWeight: "bold",
    minWidth: "250px",
  };
  // STATES
  const [currentUser, setCurrentUser] = useState({
    employeeId: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  //   FORMIK
  const initVal = {
    oldPass: currentUser.password,
    newPass: "",
    confirmPass: "",
  };
  const schema = yup.object().shape({
    oldPass: yup.string().matches(password, "Incorrect password!"),
    newPass: yup
      .string()
      .min(6, "Must be atleast 6 characters")
      .max(25, "Cannot exceed 25 characters")
      .required("This field is required!"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("newPass"), null], "Password doesn't match")
      .required("Password confirmation is required!"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
  };
  useEffect(() => {
    getUserById(localStorage.getItem(ID)).then((response) => {
      console.log(response.data.password);
      setCurrentUser(response.data);
      setPassword(response.data.password);
      console.log(password);
    });
  }, []);
  return (
    <Box
      sx={{
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#594545",
        padding: ".5rem",
        borderRadius: "1rem",
        width: "70%",
        mt: "4rem",
        mr: "auto",
        ml: "auto",
      }}
    >
      <Box sx={boxStyle}>
        <Formik
          initialValues={initVal}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#594545",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
                mb: "1rem",
              }}
            >
              Change Password
            </Typography>
            <Field
              as={TextField}
              InputLabelProps={{
                style: inputLblStyles,
              }}
              sx={outlineStyles}
              autoFocus
              margin="dense"
              name="oldPass"
              label="Enter old password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage name="oldPass">
              {(msg) => (
                <div style={{ color: "red", textAlign: "left" }}>{msg}</div>
              )}
            </ErrorMessage>
            <Field
              as={TextField}
              InputLabelProps={{
                style: inputLblStyles,
              }}
              sx={outlineStyles}
              autoFocus
              margin="dense"
              name="newPass"
              label="Enter new password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage name="newPass">
              {(msg) => (
                <div style={{ color: "red", textAlign: "left" }}>{msg}</div>
              )}
            </ErrorMessage>
            <Field
              as={TextField}
              InputLabelProps={{
                style: inputLblStyles,
              }}
              sx={outlineStyles}
              autoFocus
              margin="dense"
              name="confirmPass"
              label="Confirm new password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <ErrorMessage name="confirmPass">
              {(msg) => (
                <div style={{ color: "red", textAlign: "left" }}>{msg}</div>
              )}
            </ErrorMessage>
            <Button
              onClick={() => setModalUpdateOpen(!modalUpdateOpen)}
              sx={{
                color: "#594545",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#594545",
                color: "#FFF8EA",
                "&:hover": {
                  color: "#594545",
                  backgroundColor: "#FFF8EA",
                  border: "1px solid #594545 ",
                },
              }}
            >
              Update Password
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}

export default ChangePass;
