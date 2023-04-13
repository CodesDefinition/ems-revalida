import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  useMediaQuery,
} from "@mui/material";
function Dashboard() {
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
                Bartolome Tolome
              </Grid>
            </Grid>
          </Paper>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item sx={titleStyle}>
                Employee Email:
              </Grid>
              <Grid item sx={titleStyle}>
                barto@email.com
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
                0985545485
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
              <Button sx={buttonStyle}>Update Information</Button>
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
                    Bartolome Tolome
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
                    barto@email.com
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
                    0985545485
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
              <Button sx={buttonStyle}>Update Information</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Dashboard;
