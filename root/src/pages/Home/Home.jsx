import './Home.css'
import {Box, AppBar, Toolbar, Typography} from '@mui/material';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { useCookies } from 'react-cookie'
import { getAllOpenTasks } from '../../services/user';
import TaskCard from '../../components/TaskCard/TaskCard';



const Home = () => {

  

  const [date, setDate] = useState('')
  const [selectDate, setSelectDate] = useState('')

  const [ openTasks, setOpenTasks ] = useState([])

 /*  const [taskDay, setTaskDay] = useState([])
  const [taskWeek, setTaskWeek] = useState([])
  const [taskMonth, setTaskMonth] = useState([]) */

  const handleFormatDate = ()=>{
    const dateCurrent = new Date()
    const day = dateCurrent.getDate()
    const month = dateCurrent.getMonth() + 1
    const year =  dateCurrent.getFullYear()
    setDate(`${month}/${day}/${year}`)
  }


  const { user: cookieUser } = useCookies(['user'])[0]


  
  const handleOpenTasks = async () => {
    const result = await getAllOpenTasks()
    result && setOpenTasks(result.openTasks)
  }


  useEffect(()=>{
    handleFormatDate()
    handleOpenTasks()
  },[])


  return (
    <>
    <Box width={'80%'} maxWidth={'1200px'} >
      <Box textAlign={'left'}  color={'primary.main'} sx={{ marginBottom: '30px'}}>

      <Typography variant='h6'>
        Welcome,
      </Typography>
      <Typography variant='h2'>
      {cookieUser && cookieUser.username} 
      </Typography>

      

      </Box>
      
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'center'}} >
            <LocalizationProvider dateAdapter={AdapterDayjs}  >
              <DemoContainer components={['DatePicker']} sx={{padding: 1}}  >
                <DatePicker value={dayjs(date)} onChange={(e)=> {setSelectDate(e)
                }} sx={{backgroundColor: 'secondary.main'}}/>
               
              </DemoContainer>
            </LocalizationProvider>
        </Toolbar>
      </AppBar>
    </Box>

    <Box width={'80%'}  sx={{ backgroundColor:'pink', overflowY:'auto', scrollbarWidth:'none'}} >
      <Typography variant='h1'>
        {selectDate && (parseInt(selectDate.$d.getMonth()) + 1)+ '/'+ selectDate.$d.getDate() + '/'+ selectDate.$d.getFullYear()}
      </Typography>
      { openTasks && openTasks.map((oT) => {
        return (
          <>
               {oT.registryTasks.map((t) => <TaskCard key={t.id} task={t.task} checkeable={true} />)} 
          </>


          
          
        )
      })} 
    </Box>
    
    
    
    </>
  )
}

export default Home