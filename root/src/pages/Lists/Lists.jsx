import { useEffect, useState } from "react"
import { getAList, getMyLists, postAList } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

import './Lists.css'
import { Box,Button, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, Divider, List, ListItem,  MenuItem, TextField, Typography, IconButton } from "@mui/material"
import { AddCircle } from "@mui/icons-material"

const Lists = () => {
  
    const [ myLists, setMyLists ] = useState([])
    const [ assignedLists, setAssignedLists ] = useState([])

    const [open, setOpen] = useState(false);
    const [title, setTitle ] = useState('')
    const [description, setDesc ] = useState('')
    const [ cycle, setCycle ] = useState('')


    const [createdList, setCreatedList ] = useState({})
    const [ deletedList, setDeletedList ] = useState({})


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleMyLists = async () => {
      const result = await getMyLists()

      result && setMyLists(result.createdLists)
      const actualAssignedLists = await Promise.all(
        result.assignedLists.map(async (a) => {
        return await getAList(a.listId)
              
        })
      )

      const filteredAssignedLists = actualAssignedLists.filter((a) => {return (!result.createdLists.map((c) => c.id).includes(a.id))})
        filteredAssignedLists && setAssignedLists(filteredAssignedLists)
    }

    const handleCreateList = async () => {
      const result = await postAList({ title, description, cycle})
      result && setCreatedList(result)
    }

    


    useEffect(() => {
        handleMyLists()
        
    }, [createdList, deletedList])

    

  return (
    <Box sx={{ width: '80%', maxWidth: '1200px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', marginBottom: '150px', padding:'20px', scrollbarWidth: 'none'}}>


        <Typography variant="h3" textAlign={'left'} color={'primary.main'} margin={'20px'}> Assigned Lists</Typography>
        <ListsDisplay  lists={assignedLists} editable= {false} />

        <Divider sx={{ padding: '30px'}}/>

        <Box display={'flex'} alignItems={'center'} >
        <Typography variant="h3" textAlign={'left'} color={'primary.main'} margin={'30px'} >My Lists</Typography>
        <IconButton onClick={() => {handleClickOpen()}} sx={{ width:'min-content', marginLeft:'auto', color: 'primary.main'}}>
          <AddCircle sx={{ fontSize: '1.5em'}} />
        </IconButton>
        </Box>
        
        <ListsDisplay lists={myLists} setDeletedList={setDeletedList} editable={true} />


        

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
            New List
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Define your new List.
            </DialogContentText>
          <List>

            <ListItem>
            <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="Title"
            label="List Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
            </ListItem>

         
            <ListItem sx={{ marginBottom: '50px'}}>
          <TextField
            autoFocus
            
            margin="dense"
            id="name"
            name="Description"
            label="List Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setDesc(e.target.value)}
          />
          </ListItem>
         

          
          <ListItem>
          <TextField
          required
          fullWidth
          id="standard-select-currency"
          select
          label="Tasks Cycle"
          variant="standard"
          onChange={(e) => setCycle(e.target.value)}
        >
         <MenuItem value={'Daily'}>Daily</MenuItem>
          <MenuItem value={'Weekly'}>Weekly</MenuItem>
          <MenuItem value={'Monthly'}>Monthly</MenuItem>
          
        </TextField>
        </ListItem>
          <ListItem>
          <Divider variant="fullWidth"/>
          </ListItem>
          </List>
         
          
          
        </DialogContent>

          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleCreateList}>Create</Button>
        </DialogActions>

      </Dialog>
    </Box>

   
    
  )
}

export default Lists