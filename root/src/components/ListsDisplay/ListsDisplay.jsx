import PropTypes from 'prop-types'
import ListCard from '../ListCard/ListCard'
import { Box } from '@mui/material'

const ListsDisplay = ({ lists }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'peru'}} >
         <p> List Display </p>
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