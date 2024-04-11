import PropTypes from 'prop-types'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton,List, ListItem, TextField, Typography } from '@mui/material'
import TaskCard from '../TaskCard/TaskCard'
import { AddCircle } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { getTasksFromList, postATask } from '../../services/tasks'

const TaskDisplay = ({ list, editable }) => {


  const [ tasks , setTasks ] = useState([])

  const [ deletedTask, setDeleteTask ] = useState({})

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

 

  const handleTasks = async () => {

    const result = await getTasksFromList(list.id)
    result && setTasks(result)
  }

 

  useEffect(() => {
    handleTasks()
  },[createdTask, deletedTask])

 /*  useEffect(()=>{
    handleTasks()
  },[deletedTask]) */





  const handleCreateTask = async () => {
    console.log('a')
    tasks.length>1 && console.log(tasks)
    const result = await postATask( {listId: list.id,  taskData: {title, description} })
    console.log('ee')
    result && console.log(result)
    result && setCreatedTask(result)
  }

 
  return (
    <Box  sx={{padding: '10px'}} >
      <Box display={'flex'} marginBottom={'10px'}>
      <Typography  variant={tasks.length ? 'h4' : 'h6'} sx={{ margin: '10px'}}>
          {tasks.length ? 'Tasks' : 'No tasks yet, mate'} 
       </Typography>
      
      {editable ? 
      <>
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
          <Button type="submit" onClick={() => handleCreateTask()}>Create</Button>
        </DialogActions>

      </Dialog>
      </>
      
      :
      null}


      
      </Box>

      <Divider/>
       
      {tasks && tasks.map((t) => {
        return (

           <TaskCard key={t.id} task={t} editable={editable} setDeleteTask={setDeleteTask} />
        
        )
      })}
    </Box>
   
  )
}

TaskDisplay.propTypes = {
  list: PropTypes.object,
  editable: PropTypes.bool
}

export default TaskDisplay