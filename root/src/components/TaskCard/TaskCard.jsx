import PropTypes from 'prop-types'

import { Edit, RemoveCircle } from '@mui/icons-material'
import { Box,Card, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import { deleteTask } from '../../services/tasks'

const TaskCard = ({ task, editable, setDeleteTask }) => {


  const handleDeleteTask = async () => {
    console.log(task.id, task.listId)
    const result = await deleteTask({ listId: task.listId, taskId: task.id })
    console.log(result)
    result && setDeleteTask(result)
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
        <Checkbox color='primary' sx={{ marginLeft: 'auto'}} ></Checkbox>
       </Box>
        
    </Card>
    
  )
}

TaskCard.propTypes = {
    task: PropTypes.object,
    editable: PropTypes.bool,
    setDeleteTask: PropTypes.func
  }

export default TaskCard