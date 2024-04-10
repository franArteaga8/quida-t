import { useEffect, useState } from "react"
import { getAList, getMyLists, postAList } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

import './Lists.css'
import { Box,Button, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, Divider, List, ListItem, TextField, Typography, IconButton } from "@mui/material"
import { AddCircle } from "@mui/icons-material"

const Lists = () => {
    const [ myLists, setMyLists ] = useState([])
    const [ assignedLists, setAssignedLists ] = useState([])

    const [open, setOpen] = useState(false);
    const [title, setTitle ] = useState('')
    const [description, setDesc ] = useState('')

    const [createdList, setCreatedList ] = useState({})


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
      const result = await postAList({ title, description})
      result && setCreatedList(result)
    }

    // {
    //  "title": "patient list",
    //  "description": "description patient list"
    // }

    useEffect(() => {
        handleMyLists()
        
    }, [createdList])

    

  return (
    <Box sx={{ width: '80%', maxWidth: '1200px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', marginBottom: '150px', overflowY: 'scroll', padding:'20px', scrollbarWidth: 'none'}}>

        <Typography variant="h2" color={'primary.main'} >Lists</Typography>
        <Divider sx={{ margin: '20px'}}/>

        <Typography variant="h3" textAlign={'left'} color={'primary.main'} margin={'20px'}> Assigned Lists</Typography>
        <ListsDisplay  lists={assignedLists} />

        <Divider sx={{ margin: '20px'}}/>

        <Box display={'flex'} alignItems={'center'} padding={'10px'} >
        <Typography variant="h3" textAlign={'left'} color={'primary.main'} margin={'20px'} >My Lists</Typography>
        <IconButton onClick={() => {handleClickOpen()}} sx={{ width:'min-content', marginLeft:'auto', color: 'primary.main', backgroundColor: 'peru' }}>
          <AddCircle sx={{ fontSize: '2em'}} />
        </IconButton>
        </Box>
        
        <ListsDisplay lists={myLists} />


        

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

         
            <ListItem>
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