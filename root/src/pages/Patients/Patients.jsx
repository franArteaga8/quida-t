
import {
  Box,
  Typography,
} from "@mui/material";

import PatientList from "../../components/PatientsList/PatientList";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user";
import { TextField, Button, Divider } from "@mui/material";

const Patients = () => {

  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const handleSearch = ()=>{
    setFilter(search)
  }
  
  const handleUsers = async () => {
    const result = await getAllUsers();
    setListUser(result)
  };

  useEffect(() => {
    handleUsers();
    
  }, [])

  return (
    <Box  sx={{maxWidth: '1200px', minWidth: 'max-content', width: '90%',height: '90%', display: 'flex', 
    flexDirection: 'column', justifyContent: 'start','&::-webkit-scrollbar-track': {
   
    }}}>

        <Typography variant="h4" color={'primary.main'}> Patients </Typography>

        <TextField
        
               label="Search"
               variant="outlined"
               margin="dense"
               fullWidth={true}
               sx={{display:'flex', alignSelf:'center',color: 'whitesmoke', width:' max-content', border: '1px inset whitesmoke', borderRadius: 2}}
              onChange={(e)=> setSearch(e.target.value)}
               ></TextField>

               <Button color="primary" onClick={()=>handleSearch()} sx={{alignSelf:'center', width: 'max-content', textTransform: 'none'}} size="medium" variant="contained">
                Search</Button>
        
        <Box  sx={{ overflowY:'auto', display: 'flex', flexDirection: 'column', gap: '20px', color:'primary.main', padding:'20px', border:'2px  solid', borderColor:'primary.main', borderRadius: '20px'}} >
        Patients
        <Divider/>
        { filter && listUser.filter((p)=> p['username'].includes(filter)).map((p) => {
            return(
                <PatientList key={p.id} patient={p} />
            )
         })
        } 
        My patients
        <Divider/>     
         
        
        { listUser && listUser.map((p) => {
            return(
                <PatientList key={p.id} patient={p} />
            )
         })
        }
          
        </Box>

    </Box>
  );
};

export default Patients;
