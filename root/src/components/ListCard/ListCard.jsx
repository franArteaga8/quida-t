import { useEffect, useState } from "react"
import { getTasksFromList } from "../../services/tasks"

import PropTypes from 'prop-types'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ArrowDownward } from "@mui/icons-material"
import TaskDisplay from "../TaskDisplay.jsx/TaskDisplay"

const ListCard = ({ list }) => {

  const [ tasks , setTasks ] = useState([])

  const [ listState ] = useState({ list })
  

  const handleTasks = async () => {

    const result = await getTasksFromList(list.id)
    result && setTasks(result)
  }

 

  useEffect(() => {
    handleTasks()
  }, [listState])



  return (
    <>

        

    <Accordion sx={{ border: '1px solid', borderColor:'primary.main', borderRadius: '10px'}} >
        <AccordionSummary
          expandIcon={<ArrowDownward sx={{ color: 'secondary.main'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'primary.main'}}
        >
          <Typography variant="h5" color={'secondary.main'}>List {list.listId} {list.title} </Typography>

        </AccordionSummary>
        
        <AccordionDetails>

          <TaskDisplay tasks={tasks}  >

          </TaskDisplay>

          
        </AccordionDetails>
      </Accordion>
    </>
   
  )
}

ListCard.propTypes = {
  list: PropTypes.object
}

export default ListCard