import { useEffect, useState } from "react"
import { getTasksFromList } from "../../services/tasks"

import PropTypes from 'prop-types'
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ArrowDownward } from "@mui/icons-material"

const ListCard = ({ list }) => {

  const [ tasks , setTasks ] = useState([])
  const [listId, setListId] = useState(list.listId)

  const [ listState, setListState ] = useState({})
  

  const handleTasks = async () => {
    setListState(list)
    listState && console.log( listState.title )

    const result = await getTasksFromList(list.listId)
    result && setTasks(result)
  }

 

  useEffect(() => {
    handleTasks()
  }, [])



  return (
    <>

        

    <Accordion sx={{ border: '1px solid', borderColor:'primary.main', borderRadius: '10px'}} >
        <AccordionSummary
          expandIcon={<ArrowDownward sx={{ color: 'secondary.main'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'primary.main'}}
        >
          <Typography color={'secondary.main'}>List {list.listId} eeeee {list.title} </Typography>
        </AccordionSummary>
        <AccordionDetails>
        { tasks && tasks.map((t) => {
          return (
            <Typography key={t.id} textAlign={'left'} color={'primary.main'} > {t.title} </Typography>
            
          )
        })
      }
          
        </AccordionDetails>
      </Accordion>
    </>
   
  )
}

ListCard.propTypes = {
  list: PropTypes.object
}

export default ListCard