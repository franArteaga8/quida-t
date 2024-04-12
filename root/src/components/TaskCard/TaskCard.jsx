import PropTypes from 'prop-types'

import { Edit, RemoveCircle } from '@mui/icons-material'
import { Box,Card, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import { deleteTask } from '../../services/tasks'
import {  useState } from 'react'
import { putTaskCheck } from '../../services/user'

const TaskCard = ({ task, editable, setDeleteTask, checkeable, checkbox, taskRegistry }) => {

  const [ checkboxStatus, setCheckboxStatus ] = useState(checkbox)



  const handleDeleteTask = async () => {
    const result = await deleteTask({ listId: task.listId, taskId: task.id })
    result && setDeleteTask(result)
  }

  const handleChange = async (e) => {
    const isCheked = e.target.checked
    setCheckboxStatus(isCheked)
   
    await putTaskCheck({id: taskRegistry, checkbox: isCheked == true ? 1 : 0})
  }

 
  

  return (
    <>
    
  { task && <Card sx={{ borderRadius:'10px', marginBottom: '20px', padding: '20px', backgroundColor:'peru' }} >
        <Box display={'flex'} justifyContent={'left'} alignItems={'center'}  >
        <Typography variant='h6' marginRight={'auto'} >
            {task.title}
        </Typography>

        {editable ? 
        <>
          <IconButton sx={{ marginLeft:'auto'}} >
            <Edit color='primary' />
        </IconButton>
        <IconButton onClick={() => handleDeleteTask()} >
            <RemoveCircle color='primary' />
        </IconButton>
        </> 
        : null}


        </Box>
       <Divider/>

       <Box display={'flex'} >
       <Typography margin={'10px'} textAlign={'left'}>
          {task.description}
        </Typography>
        {checkeable ? 
        
        <Checkbox
         color='primary' 
         sx={{ marginLeft: 'auto'}} 
         checked={checkboxStatus}
         onClick={handleChange}
        /> 
         
        : null} 

       </Box>
        
    </Card>}

    </>
    
  )
}

TaskCard.propTypes = {
    task: PropTypes.object,
    editable: PropTypes.bool,
    setDeleteTask: PropTypes.func,
    checkeable: PropTypes.bool,
    checkbox: PropTypes.bool,
    taskRegistry: PropTypes.number
  }

export default TaskCard