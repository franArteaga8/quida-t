import PropTypes from 'prop-types'

const ListCard = ( {list} ) => {

  return (
    <>
        <div>ListCard</div>
        <p> { list.title } </p>
    </>
   
  )
}

ListCard.propTypes = {
    list: PropTypes.object
}

export default ListCard