import PropTypes from 'prop-types'

import { Edit, RemoveCircle } from '@mui/icons-material'
import { Box,  Card, Divider, IconButton, Typography } from '@mui/material'
import { deleteTask } from '../../services/tasks'

const TaskCard = ({ task, setDeleteTask }) => {


  const handleDeleteTask = async () => {
    console.log(task.id, task.listId)
    const result = await deleteTask({ listId: task.listId, taskId: task.id })
    console.log(result)
    result && setDeleteTask(result)
  }


  return (
    <Card sx={{ backgroundColor: 'peru', borderRadius:'10px', marginBottom: '20px', padding: '20px'}} >
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
        <Typography variant='h6' >
            {task.title}
        </Typography>
        <IconButton sx={{ marginLeft:'auto'}} >
            <Edit color='primary' />
        </IconButton>
        <IconButton onClick={() => handleDeleteTask()} >
            <RemoveCircle color='primary' />
        </IconButton>
        </Box>
       <Divider/>
        <Typography margin={'10px'} textAlign={'left'}>
           description {task.description}
        </Typography>
    </Card>
    
  )
}

TaskCard.propTypes = {
    task: PropTypes.object
  }

export default TaskCard