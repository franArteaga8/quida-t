import { Box, Card, CardContent, IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";

import PatientList from "../../components/PatientsList/PatientList";
import { useEffect, useState } from "react";
import { getAllUsers, putPsychologist } from "../../services/user";
import { TextField, Divider } from "@mui/material";

import { useCookies } from "react-cookie";
import {
  getListAssigned,
  getMyLists,
  postListAssigned,
} from "../../services/lists";
import { AddCircle, Face, MoreVert as MoreVertIcon, Search} from "@mui/icons-material";

const Patients = () => {
  const { user: cookieUser } = useCookies(["user"])[0];

  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [myList, setMylist] = useState([]);
  const [addListUser, setAddListUser] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   
  const ITEM_HEIGHT = 52;



  const handleSearch = () => {
    setFilter(search);
    if (search === "") setFilter(" ");
  };

  const handleUsers = async () => {
    const result = await getAllUsers();
    setListUser(result);
  };
  -useEffect(() => {
    handleUsers();
  }, [listUser]);

  const addPatient = async (id) => {
    await putPsychologist(id);
  };

  const addList = async (l) => {

    setAddListUser(l);
    const result = await getMyLists();

    const listAssigned = await getListAssigned();
    listAssigned.forEach((arrays)=>{
      arrays.forEach((element)=> {
        result.createdLists = result.createdLists.filter((r) => {
          return !(element.userId === l && element.listId === r.id);
        })
      })
    })
    setMylist(result && result.createdLists);
  };

  const addListAPatient = async (l) => {
   const result = await postListAssigned(l, addListUser)
    result && setMylist([]);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        
        width: "80%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      
      <Box sx={{display: 'flex', flexDirection: 'row-reverse',justifyContent: 'space-between'}}>

      <Box  sx={{display: 'flex', flexDirection: 'row-reverse',gap:'10px'}}>

      <IconButton
        color="primary"
        
        onClick={() => handleSearch()}
        sx={{
          alignSelf: "center",
          width: "max-content",
          textTransform: "none",
          borderRadius:'10px',
          
        }}
        size="large"
        variant="contained"
      >
        <Search fontSize="large" />
      </IconButton>
      <TextField
        label="Search Patients"
        variant="outlined"
        margin="dense"
        fullWidth={true}
        sx={{
          display: "flex",
          alignSelf: "center",
          width: " max-content",
          
        }}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      ></TextField>

      </Box>

      
    </Box>
    <Box
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "primary.main",
          padding: "20px",
        
        }}
        >
        <Typography variant="h3" textAlign={'left'} color={"primary.main"}>
          {" "}
          Patients
        </Typography>
        <Divider />
        {filter.length > 0 && <>
        <Paper
                  
                  elevation={5}
                  
                  sx={{ width:'100%', display: "flex",flexDirection:'column', alignItems: "center",padding:'20px', gap: "20px", border: "2px  solid",
                  borderColor: "primary.main",
                  borderRadius: "20px", mb:'50px' }}
                >
                  <Typography variant="h5" color={'primary.main'} textAlign={'left'} mr={'auto'} padding={'20px'} >Patients found: </Typography>

                  <Box display={'flex'} width={'100%'} alignItems={'center'} gap={'20px'} padding={'20px'} flexWrap={'wrap'} >
        {filter && 
          listUser
            .filter((p) => p["username"].includes(filter) || " " === filter)
            .filter((p) => p["psychologist"] !== cookieUser.id)
            .map((p) => {
              return (
                
                <Card key={p.id} sx={{width: 'auto', minWidth: 275, color: 'secondary.main', borderRadius:'20px' }}>

                  <CardContent sx={{ width:'100%', display: 'flex', flexDirection: 'row' , justifyContent:'space-between', alignItems:'center', borderRadius:'20px',  backgroundColor:'primary.main'}} >
                    <Face sx={{ fontSize: '2.5em',  marginRight:'10px'}} />
                    <Typography variant="h6" mr={'auto'} >
                            {p.username}
                    </Typography>
                    <IconButton
                            color="secondary"
                            variant="contained"
                            onClick={() => {

                              addPatient(p.id)
                              setFilter('')
                            }}
                    >
                      <AddCircle sx={{fontSize:'1em' }} ></AddCircle>
                    </IconButton>

                  </CardContent>
                </Card>
                  
               
              );
            })}
            </Box>
             </Paper>
            </>}

        <Typography variant="h3" textAlign={'left'} color={"primary.main"}>
          {" "}
          My patients
        </Typography>
        <Divider />
        
        
        
        <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'2em'} >
            
            {cookieUser && cookieUser.validation === true
              ? listUser &&
              listUser
                .filter((p) => p["psychologist"] === cookieUser.id)
                .map((p) => {
                  return (
                  
                      <Card key={p.id} sx={{width: '100%', minWidth: 275, display:'flex', flexDirection:'column', padding: '10px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'primary.light' }}>

                        <CardContent sx={{ width:'100%', display: 'flex', flexDirection: 'row' , justifyContent:'space-between', alignItems:'center',  borderRadius: '20px', backgroundColor:'primary.main'}} >
                        <Face sx={{ fontSize: '3em',  marginRight:'10px'}} />
                        <Typography variant="h4" mr={'auto'} >
                            {p.username} - {p.name} {p.lastname}
                        </Typography>
                        
                        <IconButton
                          aria-label="more"
                          
                          id="long-button"
                          aria-controls={open ? 'long-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-haspopup="true"
                          onClick={(e) => {
                            handleClick(e)
                            addList(p.id)
                           
                          }}
                        >
                          
                          <MoreVertIcon sx={{ color: 'secondary.main'}} />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: 'max-content',
                            },
                          }}
                        >
                          {myList.length ?
                          
                          (
                            <>
                                
                                <Typography variant="h6" ml={2}>Lists</Typography>
                                 
                                <Divider/>
                                 {   myList.map((l) => (
                                      <MenuItem
                                        
                                        sx={{  alignSelf: "center"}}
                                        key={l.id}
                                        onClick={() => {
                                          addListAPatient(l.id)
                                          handleClose()
                                        }}
                                      >

                                        {" "}
                                        {l.title}{" "} 
                                      </MenuItem>
                                    ))}
                                  
                                    </>
                        ) : <Typography variant="h6" padding={'10px 20px'} >No lists left to add.</Typography>}
                          
                        </Menu>
            
          
                        </CardContent>


                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', textAlign: 'left'}}>
                    
                          <PatientList key={p.id} patient={p} /> 
  
                        </CardContent>
  

                      </Card>
                      
                      
                      
                  
                  );
                })
            : null}
          </Box>
      </Box>
    </Box>
  );
};

export default Patients;
