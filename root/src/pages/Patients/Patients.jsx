
import {
  Box,
  Typography,
} from "@mui/material";

import PatientList from "../../components/PatientsList/PatientList";
import { useEffect, useState } from "react";
import { getAllUsers, putPsychologist } from "../../services/user";
import { TextField, Button, Divider } from "@mui/material";

import { useCookies } from 'react-cookie'
import { getListAssigned, getMyLists, postListAssigned } from "../../services/lists";

const Patients = () => {

  const { user: cookieUser } = useCookies(['user'])[0]

  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const [myList, setMylist] = useState([])
  const [addListUser, setAddListUser] = useState('')

  const handleSearch = ()=>{
    setFilter(search)
    if(search === '') setFilter(' ')
  }
  
  const handleUsers = async () => {
    const result = await getAllUsers();
    setListUser(result)
  };-

  useEffect(() => {
    handleUsers();
    
  }, [listUser])

  const addPatient = async(id)=>{
    await putPsychologist(id)
  }

  const addList = async (l)=>{
    setAddListUser(l)
    const result = await getMyLists()
    setMylist(result && result.createdLists)

  }

  const addListAPatient = async (l)=>{
    getListAssigned()
    const result = await postListAssigned( l, addListUser)
  
    result && setMylist([])
  }

  return (

    <Box  sx={{maxWidth: '1200px', minWidth: 'max-content', width: '90%',height: '90%', display: 'flex', 
    flexDirection: 'column', justifyContent: 'start'}}>

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
        
        <Typography variant="h5" color={'primary.main'} > Patients</Typography>
        <Divider/>

        { filter && listUser.filter((p)=> p['username'].includes(filter)|| ' ' === filter).filter((p)=> p['psychologist'] !== cookieUser.id).map((p) => {
            return(
              
              <Box key={p.id} sx={{display: 'flex',alignItems: 'center', gap: '20px'}}>

                <PatientList  key={p.id} patient={p}/>
                <Button  color="primary" variant="contained" onClick={()=> addPatient(p.id)}>Add</Button>

              </Box>
              
            )
         })
        } 

        <Typography variant="h5" color={'primary.main'} > My patients</Typography>
        <Divider/>  

        {myList.length ?
        <Box   sx={{display: 'flex', alignSelf: 'center', width: 'min-content', gap: '5px'}}>
          {myList.map((l)=> <Button variant="outlined" sx={{width: 'min-content', alignSelf: 'center'}} key={l.id} onClick={()=> addListAPatient(l.id)}> {l.title} </Button>)}
          <Button variant="outlined" color="primary" sx={{width: 'min-content', alignSelf: 'center'}}  onClick={()=> setMylist([])}>exit</Button>
         
        </Box>
        : null
}
        {cookieUser && cookieUser.validation === true ? 
             listUser && listUser.filter((p)=> p['psychologist'] === cookieUser.id).map((p) => {
              return(
               
                  <Box key={p.id} sx={{display: 'flex',alignItems: 'center', gap: '20px'}}>

                    <PatientList key={p.id} patient={p} />
                    <Button  color="primary" variant="contained" onClick={()=> addList(p.id)} sx={{height: 'fit-content', fontSize: 'small'}}>Add List</Button>

                    
                  </Box>
                  
              )
           })
          
          : 
          null
         
         }
          
        </Box>

    </Box>
  );
};

export default Patients;
