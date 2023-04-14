import React, {useEffect, useState} from 'react';
import {Card, CardContent, Container, Button, Typography} from '@mui/material';
import {Modal, ModalDialog, ModalClose, 
        FormControl, FormLabel, Input, 
        Grid, Radio, RadioGroup} from '@mui/joy'
import {DataGrid, GridToolbarContainer,
                    GridToolbarColumnsButton,
                    GridToolbarFilterButton,
                    GridToolbarExport,
                    GridToolbarDensitySelector} from '@mui/x-data-grid';
import {PersonAddAlt1, AccountCircle, AlternateEmail, 
                        ContactPage, ManageAccounts, 
                        PersonRemove, PersonSearch} from '@mui/icons-material';
import {getUsers} from '../services/UsersService';
import {insertData} from '../services/EmployeeService';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton sx={{ color: "#4b6043" }} />
      <GridToolbarFilterButton sx={{ color: "#4b6043" }} />
      <GridToolbarDensitySelector sx={{ color: "#4b6043" }} />
      <GridToolbarExport sx={{ color: "#4b6043" }} />
    </GridToolbarContainer>
  );
}

const Employee = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

    const [userDetails, setUserDetails] = useState([]);
    const [user, setUser] = useState({
        firstName: "",
        middleName: "",
        birthDate: "",
        gender: "",
        email: "",
        mobileNumber: "",
        department: "",
        position: "",
        password: ""
    });

    const register = (args) => {
        insertData(user).then((response) => {
            window.location.reload();
        }).catch((response) => {
            alert("Error: not able to register employee");
            console.log(response);
        })
    }
    
    const refresh = () => {
        getUsers().then((response) => {
            console.log(response.data);
            setUserDetails(response.data);
        })
    }

  //for updating individual users
  const [getCurrentId, setGetCurrentId] = useState(-1);
  const [currentUserUpdate, setCurrentUserUpdate] = useState({
    employeeId: "",
    email: "",
    mobileNumber: "",
    password: "",
    userType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    department: "",
    birthDate: "",
    gender: "",
    position: "",
  });

<<<<<<< HEAD
    const columnOptions = {
        editable: false,
        headerAlign: "start",
        width: 200,
        align: "start",
        disableColumnMenu: true,
        sortable: true
      };
      
      const columns = [
        { field: "lastName", headerName: "Last Name", ...columnOptions },
        { field: "firstName", headerName: "First Name", ...columnOptions },
        { field: "middleName", headerName: "Middle Name", ...columnOptions },
        { field: "birthDate", headerName: "Birthday", ...columnOptions },
        { field: "gender", headerName: "Gender", ...columnOptions },
        { field: "mobileNumber", headerName: "Mobile Number", ...columnOptions },
        { field: "department", headerName: "Department", ...columnOptions },
        { field: "position", headerName: "Position", ...columnOptions },
        { field: "email", headerName: "Email", ...columnOptions },
        { field: "password", headerName: "Password", ...columnOptions },
        { field: "Action", renderCell: (cellValues) => {
            return (
                <>
                    <center>
                        <Button variant = "outlined" size = "sm" color = "primary" onClick = {() => setModalUpdateOpen(!modalRegisterOpen)}> update  </Button> &emsp;
                        <Button variant = "outlined" size = "sm"  color = "error" onClick = {() => setModalDeleteOpen(!modalDeleteOpen)}> delete  </Button>
                    </center>
                </>
            )
        }, ...columnOptions}
      ];
=======
  const refresh = () => {
    getUsers().then((response) => {
      setIsLoaded(true);
      setUserDetails(response.data);
    });
  };

  useEffect(() => {
    refresh();
  }, []);
>>>>>>> 2d407b495168b6bcfaf01952433858dfc4ed8f91

  const columnOptions = {
    editable: false,
    headerAlign: "start",
    width: 200,
    align: "start",
    disableColumnMenu: true,
    sortable: true,
  };

<<<<<<< HEAD
    return (
        <React.Fragment>
            
            <Card sx = {{maxWidth: "85%", marginLeft: "15vh"}}>
                <CardContent>
                    <Typography variant = "h3" gutterBottom> Employee </Typography> <hr/> <br />
                    <Container sx = {{display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", gap: "1rem", padding: "10px"}}>
                        <Button variant = "outlined" color = "success" onClick = {() => setModalRegisterOpen(!modalRegisterOpen) }> <PersonAddAlt1 /> &nbsp; Register  </Button>
                        <form method = "" action = "">
                            <FormControl>
                                <Input startDecorator = {<PersonSearch/>} placeholder = "Search" sx = {{float: "right", width: "40vh"}} />
                            </FormControl>
                        </form>
                    </Container>
                    {/* Register Modal */}
                    <Modal open = {modalRegisterOpen}>
                        <ModalDialog aria-labelledby = "basic-modal-dialog-title"
                                        aria-describedby = "basic-modal-dialog-description" 
                                        sx = {{minWidth: "40vh:", width: "80vh", maxWidth: "150vh", fontSize: "12px"}}>
                            <ModalClose onClick={() => setModalRegisterOpen(false)}  />
                            <Typography id = "basic-modal-dialog-title" component = "h1" sx = {{padding: "10px"}}> <PersonAddAlt1 /> Register an Employee </Typography>
                            <form method = "" action = "">
                                <Grid container spacing = {2} xs = {{flexGrow: 1}}>
                                <Grid xs = {6}>
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> First Name </FormLabel>
                                            <Input value = {user.firstName} 
                                                    size = "sm" 
                                                    startDecorator = {<AccountCircle />} 
                                                    placeholder = "Input First Name"
                                                    onChange = {(event) => {
                                                        let obj = {...user}
                                                        obj.firstName = event.target.value;
                                                        setUser(obj);
                                                    }} /> 
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Last Name </FormLabel>
                                            <Input value = {user.lastName}  
                                                    size = "sm" 
                                                    startDecorator = {<AccountCircle />} 
                                                    placeholder = "Input Middle Name"
                                                    onChange = {(event) => {
                                                        let obj = {...user}
                                                        obj.lastName = event.target.value;
                                                        setUser(obj);
                                                    }} />
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Birthday </FormLabel>
                                            <Input value = {user.birthday} 
                                            size = "sm" 
                                            type = "date" 
                                            
                                            placeholder = "Birthday" 
                                            onChange = {(event) => {
                                                let obj = {...user}
                                                obj.birthDate = event.target.value;
                                                setUser(obj);
                                            }} />    
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Gender </FormLabel>
                                            <RadioGroup size = "sm" name = "gender">
                                                <Radio
                                                    value="Male"
                                                    name="radio-buttons"
                                                    label = "Male"
                                                    size = "md"
                                                    slotProps={{ input: { 'aria-label': 'Male' } }}
                                                    onClick = {(event) => {
                                                        let obj = {...user};
                                                        obj.gender = event.target.value;
                                                        setUser(obj);
                                                    }} /> <br />
                                                <Radio
                                                    value="Female"
                                                    name="radio-buttons"
                                                    label = "Female"
                                                    size = "md"
                                                    slotProps={{ input: { 'aria-label': 'Female' } }}
                                                    onClick = {(event) => {
                                                        let obj = {...user};
                                                        obj.gender = event.target.value;
                                                        setUser(obj);
                                                    }}
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs = {6}>
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Middle Name </FormLabel>
                                            <Input value = {user.middleNames} 
                                                    size = "sm" startDecorator = {<AccountCircle />} 
                                                    placeholder = "Input Last Name"
                                                    onChange = {(event) => {
                                                        let obj = {...user};
                                                        obj.middleName = event.target.value;
                                                        setUser(obj);
                                                    }} /> 
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                        
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Email </FormLabel>
                                    <Input value = {user.email} 
                                            size = "sm" 
                                            startDecorator = {<AlternateEmail/>}  
                                            type = "email" 
                                            placeholder = "Input Email"
                                            onChange = {(event) => {
                                                let obj = {...user};
                                                obj.email = event.target.value;
                                                setUser(obj);
                                            }} />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Mobile Number </FormLabel>
                                    <Input value = {user.mobileNumber} 
                                            size = "sm" 
                                            startDecorator = {<ContactPage/>} 
                                            type = "number" 
                                            placeholder = "Input Mobile Number"
                                            onChange = {(event) => {
                                                let obj = {...user};
                                                obj.mobileNumber = event.target.value;
                                                setUser(obj);
                                            }} />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Department </FormLabel>
                                    <Input value = {user.department} 
                                    size = "sm" 
                                    placeholder = "Input Department"
                                    onChange = {(event) => {
                                        let obj = {...user};
                                        obj.department = event.target.value;
                                        setUser(obj);
                                    }} />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Position </FormLabel>
                                    <Input value = {user.position} 
                                            size = "sm" 
                                            placeholder = "Input Position"
                                            onChange = {(event) => {
                                                let obj = {...user};
                                                obj.position = event.target.value;
                                                setUser(obj);
                                            }} />    
                                </FormControl>
                                <Button variant = "soft"
                                         sx = {{float: "right", 
                                                backgroundColor: "#C5D8A4", 
                                                color: "#534340"}}
                                         onClick = {() => {
                                            register();
                                         }}> Register </Button>
                            </form>
                        </ModalDialog>
                    </Modal>

                    <Modal open = {modalUpdateOpen}>
                        <ModalDialog aria-labelledby = "basic-modal-dialog-title"
                                        aria-describedby = "basic-modal-dialog-description" 
                                        sx = {{minWidth: "40vh:", width: "80vh", maxWidth: "150vh", fontSize: "12px"}}>
                            <ModalClose onClick={() => setModalUpdateOpen(false)}  />
                            <Typography id = "basic-modal-dialog-title" component = "h1" sx = {{padding: "10px"}}> <ManageAccounts /> Update Employee Information </Typography>
                            <form method = "" action = "">
                                <Grid container spacing = {2} xs = {{flexGrow: 1}}>
                                <Grid xs = {6}>
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> First Name </FormLabel>
                                            <Input size = "sm" startDecorator = {<AccountCircle />} placeholder = "Input First Name"/> 
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Middle Name </FormLabel>
                                            <Input size = "sm" startDecorator = {<AccountCircle />} placeholder = "Input Middle Name"/> 
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Birthday </FormLabel>
                                            <Input size = "sm" type = "date" placeholder = "Birthday" />    
                                        </FormControl>
                                        
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Gender </FormLabel>
                                            <RadioGroup size = "sm">
                                                <Radio
                                                    value="Male"
                                                    name="radio-buttons"
                                                    label = "Male"
                                                    size = "md"
                                                    slotProps={{ input: { 'aria-label': 'Male' } }}
                                                /> <br />
                                                <Radio
                                                    value="Female"
                                                    name="radio-buttons"
                                                    label = "Female"
                                                    size = "md"
                                                    slotProps={{ input: { 'aria-label': 'Female' } }}
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs = {6}>
                                        <FormControl sx = {{padding: "5px"}}>
                                            <FormLabel> Last Name </FormLabel>
                                            <Input size = "sm" 
                                                    startDecorator = {<AccountCircle />} 
                                                    placeholder = "Input Last Name"/> 
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                        
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Email </FormLabel>
                                    <Input size = "sm" startDecorator = {<AlternateEmail/>}  type = "email" placeholder = "Input Email" />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Mobile Number </FormLabel>
                                    <Input size = "sm" startDecorator = {<ContactPage/>} type = "number" placeholder = "Input Mobile Number" />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Department </FormLabel>
                                    <Input size = "sm" placeholder = "Input Department" />    
                                </FormControl>
                                
                                <FormControl sx = {{padding: "5px"}}>
                                    <FormLabel> Position </FormLabel>
                                    <Input size = "sm" placeholder = "Input Position" />    
                                </FormControl>
                                <Button variant = "soft" sx = {{float: "right", backgroundColor: "#C5D8A4", color: "#534340"}}> Update </Button>
                            </form>
                        </ModalDialog>
                    </Modal>
                    <Modal open = {modalDeleteOpen}>
                        <ModalDialog  aria-labelledby = "basic-modal-dialog-title"
                                        aria-describedby = "basic-modal-dialog-description" 
                                        sx = {{minWidth: "40vh:", width: "80vh", maxWidth: "150vh", fontSize: "12px"}}>
                            <ModalClose onClick = {() => setModalDeleteOpen(false)} />
                            <Typography  id = "basic-modal-dialog-title" component = "h1" sx = {{padding: "10px"}}> <PersonRemove />  Delete Employee Information </Typography>
                            <form method = "" action = "">
                               <p> Do you really want to delete ID? </p>
                                <Button variant = "soft" sx = {{float: "right", backgroundColor: "#C5D8A4", color: "#534340"}}> Delete </Button>
                            </form>
                        </ModalDialog>
                    </Modal>
                    <DataGrid
                        getRowId = {userDetails => userDetails.employeeId}
                        rows = {userDetails}
                        columns = {columns}
                        editMode = "cell"
                        autoHeight = "true"
                        density = "comfortable"
                        slots = {{
                            toolbar: CustomToolbar
                        }}
                        initialState = {{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5
                                }
                            }
                        }}
                        sx = {{color: "#BB9081"}}
                    />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
=======
  const columns = [
    { field: "employeeId", headerName: "Employee ID", ...columnOptions },
    { field: "lastName", headerName: "Last Name", ...columnOptions },
    { field: "firstName", headerName: "First Name", ...columnOptions },
    { field: "middleName", headerName: "Middle Name", ...columnOptions },
    { field: "birthDate", headerName: "Birthday", ...columnOptions },
    { field: "gender", headerName: "Gender", ...columnOptions },
    { field: "mobileNumber", headerName: "Mobile Number", ...columnOptions },
    { field: "department", headerName: "Department", ...columnOptions },
    { field: "position", headerName: "Position", ...columnOptions },
    { field: "email", headerName: "Email", ...columnOptions },
    {
      field: "Action",
      renderCell: (cellValues) => {
        return (
          <>
            <center>
              <Button
                variant="outlined"
                size="sm"
                color="primary"
                onClick={() => {
                  setModalUpdateOpen(!modalRegisterOpen);
                }}
              >
                {" "}
                update{" "}
              </Button>{" "}
              &emsp;
              <Button
                variant="outlined"
                size="sm"
                color="error"
                onClick={() => setModalDeleteOpen(!modalDeleteOpen)}
              >
                {" "}
                delete{" "}
              </Button>
            </center>
          </>
        );
      },
      ...columnOptions,
    },
  ];
  useCallback;
  const apiRef = useGridApiRef();
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: "85%", marginLeft: "15vh" }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {" "}
            Employee{" "}
          </Typography>{" "}
          <hr /> <br />
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: "1rem",
              padding: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setModalRegisterOpen(!modalRegisterOpen);
              }}
            >
              {" "}
              <PersonAddAlt1 /> &nbsp; Register{" "}
            </Button>
            <form method="" action="">
              <FormControl>
                <Input
                  startDecorator={<PersonSearch />}
                  placeholder="Search"
                  sx={{ float: "right", width: "40vh" }}
                />
              </FormControl>
            </form>
          </Container>
          {/* Register Modal */}
          <Modal open={modalRegisterOpen}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{
                minWidth: "40vh:",
                width: "80vh",
                maxWidth: "150vh",
                fontSize: "12px",
              }}
            >
              <ModalClose onClick={() => setModalRegisterOpen(false)} />
              <Typography
                id="basic-modal-dialog-title"
                component="h1"
                sx={{ padding: "10px" }}
              >
                {" "}
                <PersonAddAlt1 /> Register an Employee{" "}
              </Typography>
              <form method="" action="">
                <Grid container spacing={2} xs={{ flexGrow: 1 }}>
                  <Grid xs={6}>
                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> First Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        placeholder="Input first Name"
                      />
                    </FormControl>

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Middle Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        placeholder="Input Middle Name"
                      />
                    </FormControl>

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Birthday </FormLabel>
                      <Input size="sm" type="date" placeholder="Birthday" />
                    </FormControl>

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Gender </FormLabel>
                      <RadioGroup size="sm">
                        <Radio
                          value="male"
                          name="radio-buttons"
                          label="Male"
                          size="md"
                          slotProps={{ input: { "aria-label": "Male" } }}
                        />{" "}
                        <br />
                        <Radio
                          value="Female"
                          name="radio-buttons"
                          label="Female"
                          size="md"
                          slotProps={{ input: { "aria-label": "Female" } }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid xs={6}>
                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Last Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        placeholder="Input Last Name"
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Email </FormLabel>
                  <Input
                    size="sm"
                    startDecorator={<AlternateEmail />}
                    type="email"
                    placeholder="Input Email"
                  />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Mobile Number </FormLabel>
                  <Input
                    size="sm"
                    startDecorator={<ContactPage />}
                    type="number"
                    placeholder="Input Mobile Number"
                  />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Department </FormLabel>
                  <Input size="sm" placeholder="Input Department" />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Position </FormLabel>
                  <Input size="sm" placeholder="Input Position" />
                </FormControl>
                <Button
                  variant="soft"
                  sx={{
                    float: "right",
                    backgroundColor: "#C5D8A4",
                    color: "#534340",
                  }}
                >
                  {" "}
                  Register{" "}
                </Button>
              </form>
            </ModalDialog>
          </Modal>
          <Modal open={modalUpdateOpen}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{
                minWidth: "40vh:",
                width: "80vh",
                maxWidth: "150vh",
                fontSize: "12px",
              }}
            >
              <ModalClose onClick={() => setModalUpdateOpen(false)} />
              <Typography
                id="basic-modal-dialog-title"
                component="h1"
                sx={{ padding: "10px" }}
              >
                {" "}
                <ManageAccounts /> Update Employee Information{" "}
              </Typography>
              <form>
                <Grid container spacing={2} xs={{ flexGrow: 1 }}>
                  <Grid xs={6}>
                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> First Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        value={currentUserUpdate.firstName}
                        onChange={(event) => {
                          let currentUser = { ...currentUserUpdate };
                          currentUser.firstName = event.target.value;
                          setCurrentUserUpdate(currentUser);
                        }}
                      />
                    </FormControl>
>>>>>>> 2d407b495168b6bcfaf01952433858dfc4ed8f91

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Middle Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        onChange={(event) => {
                          let currentUser = { ...currentUserUpdate };
                          currentUser.middleName = event.target.value;
                          setCurrentUserUpdate(currentUser);
                        }}
                        value={currentUserUpdate.middleName}
                      />
                    </FormControl>

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Birthday </FormLabel>
                      <Input
                        size="sm"
                        type="date"
                        onChange={(event) => {
                          let currentUser = { ...currentUserUpdate };
                          currentUser.birthDate = event.target.value;
                          setCurrentUserUpdate(currentUser);
                        }}
                        value={currentUserUpdate.birthDate}
                      />
                    </FormControl>

                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Gender </FormLabel>
                      <RadioGroup size="sm" value={currentUserUpdate.gender}>
                        <Radio
                          value="male"
                          onClick={(event) => {
                            let currentUser = { ...currentUserUpdate };
                            currentUser.gender = event.target.value;
                            setCurrentUserUpdate(currentUser);
                          }}
                          name="radio-buttons"
                          label="Male"
                          size="md"
                          slotProps={{ input: { "aria-label": "Male" } }}
                        />{" "}
                        <br />
                        <Radio
                          value="female"
                          onClick={(event) => {
                            let currentUser = { ...currentUserUpdate };
                            currentUser.gender = event.target.value;
                            setCurrentUserUpdate(currentUser);
                          }}
                          name="radio-buttons"
                          label="Female"
                          size="md"
                          slotProps={{ input: { "aria-label": "Female" } }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid xs={6}>
                    <FormControl sx={{ padding: "5px" }}>
                      <FormLabel> Last Name </FormLabel>
                      <Input
                        size="sm"
                        startDecorator={<AccountCircle />}
                        onChange={(event) => {
                          let currentUser = { ...currentUserUpdate };
                          currentUser.lastName = event.target.value;
                          setCurrentUserUpdate(currentUser);
                        }}
                        value={currentUserUpdate.lastName}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Email </FormLabel>
                  <Input
                    size="sm"
                    startDecorator={<AlternateEmail />}
                    type="email"
                    onChange={(event) => {
                      let currentUser = { ...currentUserUpdate };
                      currentUser.email = event.target.value;
                      setCurrentUserUpdate(currentUser);
                    }}
                    value={currentUserUpdate.email}
                  />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Mobile Number </FormLabel>
                  <Input
                    size="sm"
                    startDecorator={<ContactPage />}
                    type="text"
                    onChange={(event) => {
                      let currentUser = { ...currentUserUpdate };
                      currentUser.mobileNumber = event.target.value;
                      setCurrentUserUpdate(currentUser);
                    }}
                    value={currentUserUpdate.mobileNumber}
                  />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Department </FormLabel>
                  <Input
                    size="sm"
                    onChange={(event) => {
                      let currentUser = { ...currentUserUpdate };
                      currentUser.department = event.target.value;
                      setCurrentUserUpdate(currentUser);
                    }}
                    value={currentUserUpdate.department}
                  />
                </FormControl>

                <FormControl sx={{ padding: "5px" }}>
                  <FormLabel> Position </FormLabel>
                  <Input
                    size="sm"
                    onChange={(event) => {
                      let currentUser = { ...currentUserUpdate };
                      currentUser.position = event.target.value;
                      setCurrentUserUpdate(currentUser);
                    }}
                    value={currentUserUpdate.position}
                  />
                </FormControl>
                <Button
                  variant="soft"
                  sx={{
                    float: "right",
                    backgroundColor: "#C5D8A4",
                    color: "#534340",
                  }}
                  onClick={() => {
                    updateUser(currentUserUpdate);
                    setModalUpdateOpen(!modalUpdateOpen);
                  }}
                >
                  {" "}
                  Update{" "}
                </Button>
              </form>
            </ModalDialog>
          </Modal>
          <Modal open={modalDeleteOpen}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{
                minWidth: "40vh:",
                width: "80vh",
                maxWidth: "150vh",
                fontSize: "12px",
              }}
            >
              <ModalClose onClick={() => setModalDeleteOpen(false)} />
              <Typography
                id="basic-modal-dialog-title"
                component="h1"
                sx={{ padding: "10px" }}
              >
                {" "}
                <PersonRemove /> Delete Employee Information{" "}
              </Typography>
              <form method="" action="">
                <p> Do you really want to delete ID? </p>
                <Button
                  variant="soft"
                  sx={{
                    float: "right",
                    backgroundColor: "#C5D8A4",
                    color: "#534340",
                  }}
                  onClick={() => deleteUser(getCurrentId)}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </form>
            </ModalDialog>
          </Modal>
          <DataGrid
            getRowId={(userDetails) => userDetails.employeeId}
            rows={userDetails}
            columns={columns}
            onRowClick={(params) => {
              setGetCurrentId(params.row.employeeId);
              getUserById(params.row.employeeId).then((response) => {
                setCurrentUserUpdate(response.data);
              });
            }}
            editMode="cell"
            autoHeight="true"
            density="comfortable"
            slots={{
              toolbar: CustomToolbar,
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 2,
                },
              },
            }}
            sx={{ color: "#BB9081" }}
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Employee;
