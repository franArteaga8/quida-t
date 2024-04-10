import PropTypes from 'prop-types'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton,List, ListItem, TextField, Typography } from '@mui/material'
import TaskCard from '../TaskCard/TaskCard'
import { AddCircle } from '@mui/icons-material'
import { useState } from 'react'
import { postATask } from '../../services/tasks'

const TaskDisplay = ({ tasks }) => {


  const [open, setOpen] = useState(false);
  const [title, setTitle ] = useState('')
  const [description, setDesc ] = useState('')

  const [ createdTask, setCreatedTask ] = useState({})

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }



  const handleCreateTask = async () => {
    console.log('a')
    const result = await postATask( {listId: tasks[0]['listId'],  taskData: {title, description} })
    console.log('e')
    result && console.log(result)
  }


  return (
    <Box  sx={{padding: '10px'}} >
      <Box display={'flex'} marginBottom={'10px'}>
      <Typography variant='h4' sx={{ margin: '10px'}}>
          Tasks 
       </Typography>
       <IconButton onClick={() => {handleClickOpen()}} sx={{ marginLeft:'auto'}} >
            <AddCircle fontSize='large' color='primary' />
        </IconButton>
        <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault()
           
            handleClose()
          },
        }}>
          <DialogTitle>
            New Task
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Define your new Task.
            </DialogContentText>
          <List>

            <ListItem>
            <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="Title"
            label="Task Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
            </ListItem>

         
            <ListItem>
          <TextField
            autoFocus
            
            margin="dense"
            id="name"
            name="Description"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setDesc(e.target.value)}
          />
          </ListItem>
          <ListItem>
          <Divider variant="fullWidth"/>
          </ListItem>
          </List>
         
          
          
        </DialogContent>

          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleCreateTask}>Create</Button>
        </DialogActions>

      </Dialog>
      </Box>

      <Divider/>
       
      {tasks && tasks.map((t) => {
        return (

           <TaskCard key={t.id} task={t} />
        
        )
      })}
    </Box>
   
  )
}

TaskDisplay.propTypes = {
  tasks: PropTypes.array
}

export default TaskDisplay