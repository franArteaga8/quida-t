
import PropTypes from 'prop-types'
import { Accordion, AccordionSummary, AccordionDetails, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Typography } from "@mui/material"
import { ArrowDownward, RemoveCircle } from "@mui/icons-material"
import TaskDisplay from "../TaskDisplay.jsx/TaskDisplay"
import { useState } from 'react'
import { deleteAList } from '../../services/lists'

const ListCard = ({ list, setDeletedList }) => {

  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleDeleteList = async () => {
      const result = await deleteAList({listId: list.id})
      result && console.log(result)
      result && setDeletedList(result)
     

    }



    

  return (
    <>

        

    <Accordion  sx={{ border: '1px solid', borderColor:'primary.main', borderRadius: '10px'}} >
        <AccordionSummary
          expandIcon={<ArrowDownward sx={{ color: 'secondary.main'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'primary.main'}}
        >
          <Typography variant="h5" color={'secondary.main'}> {list.title} </Typography>
          <IconButton onClick={handleClickOpen} sx={{ width:'min-content', marginLeft:'auto', color: 'secondary.main',  }}>
          <RemoveCircle sx={{ fontSize: '1em'}} />
        </IconButton>

        </AccordionSummary>
        
        <AccordionDetails>
        
        <Typography variant="subtitle2" color={'primary.main'} textAlign={'left'} margin={'10px'} > {list.description} </Typography>

        <Divider/>

        { list && <TaskDisplay list={list} >

          </TaskDisplay>}

          
        </AccordionDetails>
      </Accordion>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          {"Delete List"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            Are you sure you wanna delete this list: &apos;{list.title}&apos; ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go back</Button>
          <Button onClick={handleDeleteList} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
   
  )
}

ListCard.propTypes = {
  list: PropTypes.object,
  setDeletedList: PropTypes.func
}

export default ListCard