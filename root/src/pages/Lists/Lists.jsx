import { useEffect, useState } from "react"
import { getLists } from "../../services/lists"

const Lists = () => {
    const [ list, setList ] = useState([])

    const handleList = async () => {
        const result = await getLists(1)
        console.log(result)
       
     
        const mappedResult = result.map((t, idx) => 
            <p key={idx}> { t.title } </p>
        )

        mappedResult && setList(mappedResult)
        
    }

    

    useEffect(() => {
        handleList()
    }, [])

  return (
    <>
        <div>Lists</div>
        { list }

    </>
    
  )
}

export default Lists