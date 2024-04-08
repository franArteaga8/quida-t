import { useEffect, useState } from "react"
import { getTasksFromList } from "../../services/tasks"

import PropTypes from 'prop-types'

const ListCard = ({ list }) => {

  const [ tasks , setTasks ] = useState([])

  const listId = list.id

  const handleTasks = async () => {
    const result = await getTasksFromList(list.id)
    console.log(listId)
    result && setTasks(result)
    result && console.log(result[0])
    result && console.log(tasks[0])
  }

  useEffect(() => {
    handleTasks()
  }, [])

  return (
    <div>ListCard</div>
  )
}

ListCard.propTypes = {
  list: PropTypes.array
}

export default ListCard