import { useEffect, useState } from "react"
import { getTasksFromList } from "../../services/tasks"

import PropTypes from 'prop-types'
import { Typography } from "@mui/material"
import { getAList } from "../../services/lists"

const ListCard = ({ list }) => {

  const [ tasks , setTasks ] = useState([])
  const [listId, setListId] = useState(list.id)
  

  const handleTasks = async () => {
    const result = await getTasksFromList(list.id)
    result && setTasks(result)
  }



  useEffect(() => {
    handleTasks()
  }, [listId])



  return (
    <>
        <Typography>
          {list.listId}
        </Typography>

        { tasks && tasks.map((t) => {
          return (
            <p key={t.id}> {t.title }</p>
          )
        })
      }
    </>
  )
}

ListCard.propTypes = {
  list: PropTypes.array
}

export default ListCard