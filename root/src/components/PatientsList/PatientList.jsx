
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from "@mui/material";

import { ArrowDownward } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getListAssigned, getMyLists } from "../../services/lists";


const PatientList = ({patient}) => {

  const [myList, setMylist] = useState('')

  const addList = async (l) => {
  
    let listResult = []
    const result = await getMyLists();
    const listAssigned = await getListAssigned();

    listAssigned.forEach((arrays)=>{
      arrays.forEach((element)=> {
        result.createdLists.forEach((list) => {
          if(element.userId === l && element.listId === list.id) listResult.push(list)
        })
      })
    })
    setMylist(listResult.length > 0 && listResult);
  };

  useEffect(()=>{addList(patient.id)},[myList])

  return (
    <>
    
      <Accordion
          sx={{
            border: "1px green solid",
            borderColor: "primary.main",
            borderRadius: "10px",
            width: "100%"
          }}>
         
          <AccordionSummary
            expandIcon={<ArrowDownward sx={{ color: "secondary.main" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "primary.main" }}>

            <Typography  textAlign={'left'} color={'secondary.main'} >{ patient.username}  </Typography>

          </AccordionSummary>

          <AccordionDetails>
          
            <Typography  textAlign={'left'} color={'primary.main'} >Name: { patient.name}  </Typography>
            <Typography  textAlign={'left'} color={'primary.main'} >Last Name: { patient.lastName}  </Typography>

            <Typography variant="h5" color={'primary.main'} > List Assigned</Typography>
            <Divider></Divider>
            {myList && myList.map((l, idx)=> <Typography key={idx} textAlign={'left'} color={'primary.main'} > { l.title }  </Typography>)}

          </AccordionDetails>
        </Accordion>
    
        
    </>
  );
};

PatientList.propTypes = {
  patient: PropTypes.object,
};

export default PatientList;
