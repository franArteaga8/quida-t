import { useEffect, useState } from "react"
import { getTasksFromList } from "../../services/tasks"

import PropTypes from 'prop-types'
import { Box, Typography } from "@mui/material"

const ListCard = ({ list }) => {

  const [ tasks , setTasks ] = useState([])
  const [listId, setListId] = useState(list.listId)
  

  const handleTasks = async () => {
    console.log(list.id)
    const result = await getTasksFromList(list.listId)
    result && setTasks(result)
  }



  useEffect(() => {
    handleTasks()
  }, [listId])



  return (
    <Box sx={{ backgroundColor: 'cyan', border: '2px solid black' }} >  
        <Typography>
          List Card
        </Typography>
        <Typography>
          {list.listId}
        </Typography>

        { tasks && tasks.map((t) => {
          return (
            <p key={t.id}> {t.title }</p>
          )
        })
      }
    </Box>
  )
}

ListCard.propTypes = {
  list: PropTypes.array
}

export default ListCard