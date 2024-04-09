import './Home.css'
import {Box, AppBar, Toolbar, Typography} from '@mui/material';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';



const Home = () => {

  const [date, setDate] = useState('')
  const [selectDate, setSelectDate] = useState('')

  const [taskDay, setTaskDay] = useState([])
  const [taskWeek, setTaskWeek] = useState([])
  const [taskMonth, setTaskMonth] = useState([])

  const handleFormatDate = ()=>{
    const dateCurrent = new Date()
    const day = dateCurrent.getDate()
    const month = dateCurrent.getMonth() + 1
    const year =  dateCurrent.getFullYear()
    setDate(`${month}/${day}/${year}`)
  }



  useEffect(()=>{
    handleFormatDate()
    
  },[])


  return (
    <>
    <div className="position">

    <Box >
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'center'}} >
            <LocalizationProvider dateAdapter={AdapterDayjs}   >
              <DemoContainer components={['DatePicker']}  >
                <DatePicker value={dayjs(date)} onChange={(e)=> {setSelectDate(e)
                }}/>
              </DemoContainer>
            </LocalizationProvider>
        </Toolbar>
      </AppBar>
    </Box>

    <Box>
      <Typography variant='h1'>
        {selectDate && (parseInt(selectDate.$d.getMonth()) + 1)+ '/'+ selectDate.$d.getDate() + '/'+ selectDate.$d.getFullYear()}
      </Typography>
    </Box>
    
    </div>
    </>
  )
}

export default Home