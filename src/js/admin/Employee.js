import React, {useState} from 'react';
import {Card, CardContent, Button, Typography} from '@mui/material';
import {Modal, ModalDialog, ModalClose, FormControl, FormLabel, Input, Grid, Radio, RadioGroup} from '@mui/joy'
import {DataGrid, GridToolbarContainer,
                    GridToolbarColumnsButton,
                    GridToolbarFilterButton,
                    GridToolbarExport,
                    GridToolbarDensitySelector} from '@mui/x-data-grid';
import {PersonAddAlt1, AccountCircle, AlternateEmail, ContactPage, ManageAccounts, PersonRemove} from '@mui/icons-material';

function CustomToolbar() {
    return (
        <GridToolbarContainer>
          <GridToolbarColumnsButton sx = {{color: "#4b6043"}} />
          <GridToolbarFilterButton sx = {{color: "#4b6043"}} />
          <GridToolbarDensitySelector sx = {{color: "#4b6043"}} />
          <GridToolbarExport sx = {{color: "#4b6043"}} />
        </GridToolbarContainer>
      );
}

const registerEmployee = () => {
    const columnOptions = {
        editable: false,
        headerAlign: "center",
        width: 300,
        align: "start",
        disableColumnMenu: true,
        sortable: true
      };
      
      const rows = [
        { id: 1, name: "Employee1", department: "IT Department", position: "Developer 1"},
        { id: 2, name: "Employee2", department: "Finance Department", position: "Internal Auditor" },
        { id: 3, name: "Employee3", department: "Marketing Department", position: "Marketing Coordinator" },
        { id: 4, name: "Employee4", department: "IT Department", position: "Developer 1" },
        { id: 5, name: "Employee5", department: "IT Department", position: "Developer 3" },
      ];
      
      const columns = [
        { field: "name", headerName: "Name", ...columnOptions },
        { field: "department", headerName: "Department", ...columnOptions },
        { field: "position", headerName: "Position", ...columnOptions },
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

      const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
      const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
      const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

    return (
        <React.Fragment>
            
            <Card sx = {{maxWidth: "85%", marginLeft: "15vh"}}>
                <CardContent>
                    <Typography variant = "h3" gutterBottom> Employee </Typography> <hr/> <br />
                    <Button variant = "outlined" color = "success" style = {{float: "right"}} onClick = {() => setModalRegisterOpen(!modalRegisterOpen)}> <PersonAddAlt1 /> &nbsp; Register  </Button> <br/> <br/>
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
                                            <Input size = "sm" startDecorator = {<AccountCircle />} placeholder = "Input Last Name"/> 
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
                                <Button variant = "soft" sx = {{float: "right", backgroundColor: "#C5D8A4", color: "#534340"}}> Register </Button>
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
                                            <Input size = "sm" startDecorator = {<AccountCircle />} placeholder = "Input Last Name"/> 
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
                        rows = {rows}
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
                                    pageSize: 10
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

export default registerEmployee;