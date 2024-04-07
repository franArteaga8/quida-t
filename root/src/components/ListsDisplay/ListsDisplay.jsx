import PropTypes from 'prop-types'
import ListCard from '../ListCard/ListCard'

const ListsDisplay = ({ lists }) => {

  return (
    <>
         <p> List Display </p>
        { lists && lists.map((l) => {
            return(
                <ListCard key={l.id} list={l} />
            )
         })
        }

    </>
  )
}

ListsDisplay.propTypes = {
    lists: PropTypes.array
}

export default ListsDisplay