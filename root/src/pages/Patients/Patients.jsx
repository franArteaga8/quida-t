
import {
  Box,
  Typography,
} from "@mui/material";

import PatientList from "../../components/PatientsList/PatientList";

const Patients = () => {

  return (
    <Box sx={{ width: '1200px', minWidth: 'max-content', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>

        <Typography variant="h4" color={'primary.main'}> Patients </Typography>
        <PatientList />

    </Box>
  );
};

export default Patients;
