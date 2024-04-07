import { useEffect, useState } from "react"
import { getMyLists } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

import './Lists.css'

const Lists = () => {
    const [ myLists, setMyLists ] = useState([])

    const handleMyLists = async () => {
        const result = await getMyLists()
        result && setMyLists(result)
        myLists && console.log(myLists.createdLists)
        myLists && console.log(myLists.assignedLists)
    }


    useEffect(() => {
        handleMyLists()
    }, [])

  return (
    <>
        <div>Lists</div>
        <ListsDisplay lists={myLists.createdLists} />
        <ListsDisplay lists={myLists.assignedLists} />

    </>
    
  )
}

export default Lists