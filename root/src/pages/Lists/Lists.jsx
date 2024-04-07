import { useEffect, useState } from "react"
import { getMyLists } from "../../services/lists"
import ListsDisplay from "../../components/ListsDisplay/ListsDisplay"

const Lists = () => {
    const [ myLists, setMyLists ] = useState([])

    const handleMyLists = async () => {
        const result = await getMyLists()
        result && setMyLists(result)
        myLists && console.log(myLists.createdLists)
    }


    useEffect(() => {
        handleMyLists()
    }, [])

  return (
    <>
        <div>Lists</div>
        <ListsDisplay lists={myLists.createdLists} />

    </>
    
  )
}

export default Lists