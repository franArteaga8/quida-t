import { Box } from "@mui/material"
import TaskCard from "../TaskCard/TaskCard"
import PropTypes from "prop-types"

const OpenTasks = ({ oT }) => {
<<<<<<< HEAD
 
=======

>>>>>>> main
  
  return (
    <>
      {oT && oT.map((oTItem) => {
        return (
          <Box key={oTItem.id} paddingBottom={'50px'} >
            {oTItem.registryTasks.map((task) => {
              return (
                <div key={task.id}>
                  <TaskCard
                    task={task.task}
                    taskRegistry={task.id}
                    checkeable={true}
                    checkbox={task.checkbox}
                  />
                </div>
              )
            })}
          </Box>
        )
      })}
    </>
  )
}

OpenTasks.propTypes = {
  oT: PropTypes.array.isRequired,
}

export default OpenTasks;
