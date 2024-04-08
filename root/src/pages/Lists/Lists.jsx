import { useEffect, useState } from "react"
import { getMyLists } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

import './Lists.css'
import { Box } from "@mui/material"

const Lists = () => {
    const [ myLists, setMyLists ] = useState([])

    const handleMyLists = async () => {
        const result = await getMyLists()
        result && setMyLists(result)


    }


    useEffect(() => {
        handleMyLists()
    }, [])

  return (
    <Box sx={{ backgroundColor: 'lightpink', height: '100%', padding: '50px'}}>
        <div>Lists</div>
        <p> asignadas</p>
        <ListsDisplay lists={myLists.assignedLists} />

    </Box>
    
  )
}

export default Lists