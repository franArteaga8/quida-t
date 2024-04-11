import PropTypes from 'prop-types'

import { Edit, RemoveCircle } from '@mui/icons-material'
import { Box,Card, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import { deleteTask } from '../../services/tasks'
import { useState } from 'react'
import { putTaskCheck } from '../../services/user'

const TaskCard = ({ task, editable, setDeleteTask, checkeable }) => {

  

  const [ checkbox, setCheckbox ] = useState()


  const handleDeleteTask = async () => {
    const result = await deleteTask({ listId: task.listId, taskId: task.id })
    result && setDeleteTask(result)
  }

  const handleCheckbox = async (e) => {
    console.log('entra')
    console.log(task.id)

    setCheckbox(!checkbox)
    console.log(checkbox)
      const result = await putTaskCheck(task.id,checkbox)
      console.log(result)
  }


  return (
    <Card sx={{ backgroundColor: 'peru', borderRadius:'10px', marginBottom: '20px', padding: '20px'}} >
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
        {checkeable ? <Checkbox color='primary' sx={{ marginLeft: 'auto'}} onClick={()=>handleCheckbox()}></Checkbox> : null} 
       </Box>
        
    </Card>
    
  )
}

TaskCard.propTypes = {
    task: PropTypes.object,
    editable: PropTypes.bool,
    setDeleteTask: PropTypes.func,
    checkeable: PropTypes.bool
  }

export default TaskCard