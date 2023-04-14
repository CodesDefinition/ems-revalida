import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Paper,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";

import {
  PersonAddAlt1,
  AccountCircle,
  AlternateEmail,
  ContactPage,
  ManageAccounts,
  PersonRemove,
} from "@mui/icons-material";
import { useFormik, Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
function Dashboard() {
  // variables for styles
  const matches = useMediaQuery("(max-width:1202px)");
  const paperStyle = {
    backgroundColor: "#FFF8EA",
    color: "#594545",
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    gap: ".5rem",
  };
  const boxStyle = {
    padding: "1rem",
    backgroundColor: "#9E7676",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: ".8rem",
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
  const titleStyle = {
    width: "50%",
    fontWeight: "bold",
  };
  const inputLblStyles = {
    backgroundColor: "#FFF8EA",
    color: "#594545",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  };
  const outlineStyles = {
    backgroundColor: "#FFF8EA",
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
  //  states for user info
  const [firstName, setFirstName] = useState("Mark");
  const [middleName, setMiddleName] = useState("Cariño");
  const [lastName, setLastName] = useState("Perez");
  const [email, setEmail] = useState("mark@email.com");
  const [number, setNumber] = useState("6665585288");
  // for Formik
  const initialVal = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobNum: "",
  };
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Must have atleast 2 characters")
      .max(15, "Cannot exceed 15 characters")
      .required("First name is required!"),
    middleName: yup.string().max(15, "Cannot exceed 15 characters"),
    lastName: yup
      .string()
      .min(2, "Must have atleast 2 characters")
      .max(15, "Cannot exceed 15 characters")
      .required("Last name is required!"),
    email: yup.string().email().required("Email is required!"),
    mobNum: yup
      .number()
      .positive()
      .integer()
      .min(0)
      .max(1000000000)
      .required("Mobile number is required!"),
  });
  // functions
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const onSubmit = (values, props) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    setModalUpdateOpen(!modalUpdateOpen);
  };

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
      {/* Form Dialog */}
      <Dialog
        open={modalUpdateOpen}
        onClose={() => setModalUpdateOpen(!modalUpdateOpen)}
        PaperProps={{
          style: {
            backgroundColor: "#FFF8EA",
            color: "#594545",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            variant: "h4",
          }}
        >
          Update Employee Information
        </DialogTitle>
        <DialogContent
          sx={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <Formik
            initialValues={initialVal}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  InputLabelProps={{
                    style: inputLblStyles,
                  }}
                  sx={outlineStyles}
                  autoFocus
                  margin="dense"
                  name="firstName"
                  label="First Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="firstName" />}
                />
                <Field
                  as={TextField}
                  InputLabelProps={{
                    style: inputLblStyles,
                  }}
                  sx={outlineStyles}
                  autoFocus
                  margin="dense"
                  name="middleName"
                  label="Middle Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="middleName" />}
                />
                <Field
                  as={TextField}
                  InputLabelProps={{
                    style: inputLblStyles,
                  }}
                  sx={outlineStyles}
                  autoFocus
                  margin="dense"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="lastName" />}
                />
                <Field
                  as={TextField}
                  InputLabelProps={{
                    style: inputLblStyles,
                  }}
                  sx={outlineStyles}
                  autoFocus
                  margin="dense"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  InputLabelProps={{
                    style: inputLblStyles,
                  }}
                  sx={outlineStyles}
                  autoFocus
                  margin="dense"
                  name="mobNum"
                  label="Mobile Number"
                  type="number"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="mobNum" />}
                />
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
                  Update
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      {matches ? (
        <Box sx={boxStyle}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF8EA",
              fontFamily: "Montserrat, sans-serif",
              textAlign: "center",
              mb: "1rem",
            }}
          >
            Bartolome Tolome
          </Typography>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Employee ID:
              </Grid>
              <Grid item sx={titleStyle}>
                2320-87881
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Employee Name:
              </Grid>
              <Grid item sx={titleStyle}>
                {firstName + " " + middleName + " " + lastName}
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Employee Email:
              </Grid>
              <Grid item sx={titleStyle}>
                {email}
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Department:
              </Grid>
              <Grid item sx={titleStyle}>
                IT
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Position:
              </Grid>
              <Grid item sx={titleStyle}>
                Assistant
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Mobile Number:
              </Grid>
              <Grid item sx={titleStyle}>
                {number}
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Birthday:
              </Grid>
              <Grid item sx={titleStyle}>
                Apr-20-2000
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Gender:
              </Grid>
              <Grid item sx={titleStyle}>
                Male
              </Grid>
            </Grid>
          </Paper>
          {/* buttons */}
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "1rem", sm: "1rem" },
            }}
          >
            <Grid
              item
              sx={{
                width: { sm: "100%", md: "40%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={buttonStyle}>Change Password</Button>
            </Grid>
            <Grid
              item
              sx={{
                width: { sm: "100%", md: "40%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={buttonStyle}
                onClick={() => setModalUpdateOpen(!modalUpdateOpen)}
              >
                Update Information
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={boxStyle}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF8EA",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              mb: "1rem",
            }}
          >
            Bartolome Tolome
          </Typography>
          <Grid container>
            <Grid item sx={{ width: "48%", mr: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Employee ID:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    2320-87881
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{ width: "48%", ml: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Employee Name:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    {firstName + " " + middleName + " " + lastName}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ width: "48%", mr: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Employee Email:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    {email}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{ width: "48%", ml: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Department:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    IT
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ width: "48%", mr: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Mobile Number:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    {number}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{ width: "48%", ml: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Birthday:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    Apr-20-2000
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ width: "48%", mr: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Position:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    Assistant
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item sx={{ width: "48%", ml: "2%" }}>
              <Paper style={paperStyle}>
                <Grid container>
                  <Grid item sx={titleStyle}>
                    Gender:
                  </Grid>
                  <Grid item sx={titleStyle}>
                    Female
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={buttonStyle}>Change Password</Button>
            </Grid>
            <Grid
              item
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={buttonStyle}
                onClick={() => setModalUpdateOpen(!modalUpdateOpen)}
              >
                Update Information
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Dashboard;
