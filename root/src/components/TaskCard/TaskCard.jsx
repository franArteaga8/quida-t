import PropTypes from 'prop-types'

import { Edit, RemoveCircle } from '@mui/icons-material'
import { Box,  Card, Divider, IconButton, Typography } from '@mui/material'

const TaskCard = ({ task }) => {
  return (
    <Card sx={{ backgroundColor: 'peru', borderRadius:'10px', marginBottom: '20px', padding: '20px'}} >
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
        <Typography variant='h6' >
            {task.title}
        </Typography>
        <IconButton sx={{ marginLeft:'auto'}} >
            <Edit color='primary' />
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