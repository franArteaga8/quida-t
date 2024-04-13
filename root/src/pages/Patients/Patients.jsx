import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";

import PatientList from "../../components/PatientsList/PatientList";
import { useEffect, useState } from "react";
import { getAllUsers, putPsychologist } from "../../services/user";
import { TextField, Button, Divider } from "@mui/material";

import { useCookies } from "react-cookie";
import {
  getListAssigned,
  getMyLists,
  postListAssigned,
} from "../../services/lists";
import { Face } from "@mui/icons-material";

const Patients = () => {
  const { user: cookieUser } = useCookies(["user"])[0];

  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [myList, setMylist] = useState([]);
  const [addListUser, setAddListUser] = useState("");

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
        minWidth: "max-content",
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Typography variant="h4" color={"primary.main"}>
        {" "}
        Patients{" "}
      </Typography>

      <Box sx={{display: 'flex', flexDirection: 'row-reverse',justifyContent: 'space-between'}}>

      <Box  sx={{display: 'flex', flexDirection: 'row-reverse'}}>

      <Button
        color="primary"
        onClick={() => handleSearch()}
        sx={{
          alignSelf: "center",
          width: "max-content",
          textTransform: "none",
        }}
        size="medium"
        variant="contained"
      >
        Search
      </Button>
      <TextField
        label="Search"
        variant="outlined"
        margin="dense"
        fullWidth={true}
        sx={{
          display: "flex",
          alignSelf: "center",
          color: "whitesmoke",
          width: " max-content",
          border: "1px inset whitesmoke",
          borderRadius: 2,
        }}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>

      </Box>

      

      {myList.length ? (
          <Box
            sx={
              {display:'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap', width: '50%', margin: '8px 0'}
            }
          >
            {myList.map((l) => (
              <Button
                variant="outlined"
                sx={{ width: "fit-content", alignSelf: "center"}}
                key={l.id}
                onClick={() => addListAPatient(l.id)}
              >
                {" "}
                {l.title}{" "}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "min-content", alignSelf: "center" }}
              onClick={() => setMylist([])}
            >
              exit
            </Button>
          </Box>
        ) : null}

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
          border: "2px  solid",
          borderColor: "primary.main",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h5" color={"primary.main"}>
          {" "}
          Patients
        </Typography>
        <Divider />

        {filter &&
          listUser
            .filter((p) => p["username"].includes(filter) || " " === filter)
            .filter((p) => p["psychologist"] !== cookieUser.id)
            .map((p) => {
              return (
                <Box
                  key={p.id}
                  sx={{ display: "flex", alignItems: "center", gap: "20px", backgroundColor:'pink' }}
                >
                     <Card  sx={{width: '500px', minWidth: 275, display:'flex', flexDirection:'column', padding: '10px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'green' }}>

                      <CardContent sx={{ width:'100%', display: 'flex', flexDirection: 'row' , justifyContent:'space-between', alignItems:'center',   backgroundColor:'peru'}} >
                      <Face sx={{ fontSize: '3em',  marginRight:'10px'}} />
                      <Typography variant="h4" >
                          {p.username}
                      </Typography>
                      <Button
                    color="primary"
                    variant="contained"
                    onClick={() => addPatient(p.id)}
                  >
                    Add
                  </Button>



</CardContent>


<CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', textAlign: 'left'}}>

  

</CardContent>


</Card>
                  
                </Box>
              );
            })}

        <Typography variant="h5" color={"primary.main"}>
          {" "}
          My patients
        </Typography>
        <Divider />

        
        {cookieUser && cookieUser.validation === true
          ? listUser &&
            listUser
              .filter((p) => p["psychologist"] === cookieUser.id)
              .map((p) => {
                return (
                  <Box
                    key={p.id}
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                     <Card  sx={{width: '500px', minWidth: 275, display:'flex', flexDirection:'column', padding: '10px', borderRadius: '20px', height: 'min-content',color: 'white', backgroundColor: 'primary.main' }}>

                      <CardContent sx={{ width:'100%', display: 'flex', flexDirection: 'row' , justifyContent:'space-between', alignItems:'center',   backgroundColor:'peru'}} >
                      <Face sx={{ fontSize: '3em',  marginRight:'10px'}} />
                      <Typography variant="h4" >
                          {p.username}
                      </Typography>
                      <Button
                      color="primary"
                      variant="contained"
                      onClick={() => addList(p.id)}
                      sx={{ height: "fit-content", fontSize: "small" }}
                      >
                      Add List
                      </Button>
          
        
                      </CardContent>


                      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', textAlign: 'left'}}>
                  
                        <PatientList key={p.id} patient={p} /> 
 
                      </CardContent>
 

                    </Card>
                    
                    
                  </Box>
                );
              })
          : null}
      </Box>
    </Box>
  );
};

export default Patients;
