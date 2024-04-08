import { useEffect, useState } from "react"
import { getMyLists } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

import './Lists.css'
import { Box, Typography } from "@mui/material"

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
    <Box sx={{  height: '100%', padding: '50px'}}>

        <Typography variant="h4" color={'primary.main'} >Lists</Typography>
        <ListsDisplay lists={myLists.assignedLists} />

    </Box>
    
  )
}

export default Lists