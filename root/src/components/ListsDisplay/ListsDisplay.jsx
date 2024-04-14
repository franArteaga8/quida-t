import PropTypes from 'prop-types'
import ListCard from '../ListCard/ListCard'
import { Box, Typography } from '@mui/material'

const ListsDisplay = ({ lists, setDeletedList, editable }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',height:'content', gap: '20px', color:'primary.main'}} >
        { lists.length ? lists.map((l) => {
            return(
                <ListCard key={l.id} list={l} setDeletedList={setDeletedList} editable={editable} />
            )
         })
         :
         <Typography variant='h6' textAlign={'left'} ml={'30px'}>
           {editable ? 'No created lists yet.' : 'No assigned lists yet.'}
         </Typography>
         
        }

    </Box>
  )
}

ListsDisplay.propTypes = {
    lists: PropTypes.array,
    setDeletedList: PropTypes.func,
    editable: PropTypes.bool
}

export default ListsDisplay