import { Box, CssBaseline, Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { green } from "@mui/material/colors";

const Sidebar = () => {
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
        <Box sx={{ overflow: 'auto', background: green[200]}}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </Box>
     
     
    </Box>
  )
}

export default Sidebar