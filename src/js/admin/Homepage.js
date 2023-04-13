import React from "react";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
        <div className = "container" > 
          <div className = "row">
            <div className = "col-md-2" style = {{border: "3px solid #C5D8A4", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", height: "80vh"}}>
              <h1> Admin </h1> <br />
              <a onClick = {() => {
                navigate(`/admin/employee`)
              }} style = {{textDecoration: "none", color: "#534340", fontSize: "15px", cursor: "pointer"}}> Employee </a> <hr />
              <a href = "#" style = {{textDecoration: "none", color: "#534340", fontSize: "15px", cursor: "pointer"}}> Departments </a> <hr />
              <a href = "#" style = {{textDecoration: "none", color: "#534340", fontSize: "15px", cursor: "pointer"}}> Position </a> <hr />
            </div>
            <div className = "col-md-9" style = {{border: "3px solid #C5D8A4", borderTopRightRadius: "10px", borderBottomRightRadius: "10px"}}> <br />
              <div className = "row" style = {{marginLeft: "-6vh"}}>
                <div className = "col-sm-4">
                  <Box sx = {{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center", mx: "2px", transform: "scale(0.8)", width: "45vh", height: "20vh", border: "1px solid #BB9981"}}>  
                    <h1> Employee </h1>
                  </Box>
                </div>
                <div className = "col-sm-4">
                  <Box sx = {{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center", mx: "2px", transform: "scale(0.8)", width: "45vh", height: "20vh", border: "1px solid #BB9981"}}>  
                    <h1> Departments </h1>
                  </Box>
                </div>
                <div className = "col-sm-4">
                  <Box sx = {{display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "center", mx: "2px", transform: "scale(0.8)", width: "45vh", height: "20vh", border: "1px solid #BB9981"}}>  
                    <h1> Positions </h1>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Homepage;
