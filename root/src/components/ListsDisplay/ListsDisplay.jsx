import PropTypes from 'prop-types'
import ListCard from '../ListCard/ListCard'
import { Box } from '@mui/material'

const ListsDisplay = ({ lists }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', color:'primary.main', padding:'20px', border:'2px  solid', borderColor:'primary.main', borderRadius: '20px'}} >
        { lists && lists.map((l) => {
            return(
                <ListCard key={l.id} list={l} />
            )
         })
        }

    </Box>
  )
}

ListsDisplay.propTypes = {
    lists: PropTypes.array
}

export default ListsDisplay