
import PropTypes from 'prop-types'
import { Accordion, AccordionSummary, AccordionDetails, Divider, Typography } from "@mui/material"
import { ArrowDownward } from "@mui/icons-material"
import TaskDisplay from "../TaskDisplay.jsx/TaskDisplay"

const ListCard = ({ list }) => {


  return (
    <>

        

    <Accordion  sx={{ border: '1px solid', borderColor:'primary.main', borderRadius: '10px'}} >
        <AccordionSummary
          expandIcon={<ArrowDownward sx={{ color: 'secondary.main'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'primary.main'}}
        >
          <Typography variant="h5" color={'secondary.main'}> {list.title} </Typography>
          

        </AccordionSummary>
        
        <AccordionDetails>
        
        <Typography variant="subtitle2" color={'primary.main'} textAlign={'left'} margin={'10px'} > {list.description} </Typography>

        <Divider/>

        { list && <TaskDisplay list={list} >

          </TaskDisplay>}

          
        </AccordionDetails>
      </Accordion>
    </>
   
  )
}

ListCard.propTypes = {
  list: PropTypes.object
}

export default ListCard