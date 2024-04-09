import { useEffect, useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { getAllUsers } from "../../services/user";
import PropTypes from "prop-types";

const PatientList = ({ users }) => {
    console.log(users)
  const [listUser, setListUser] = useState([]);

  const handleUsers = async () => {
    const result = await getAllUsers();
    setListUser(result)
  };

  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <>
      <Accordion
        sx={{
          border: "1px green solid",
          borderColor: "primary.main",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownward sx={{ color: "secondary.main" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "primary.main" }}
        ></AccordionSummary>
        <AccordionDetails>
          {/*   <Typography key={p.id} color={"secondary.main"}>{p.name}</Typography> */}
          {listUser &&
            listUser.map((p) => {
              return (
                <>
                  <Typography
                    key={p.id}
                    textAlign={"left"}
                    color={"primary.main"}
                  >
                    {" "}
                    
                  </Typography>
                </>
              );
            })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

PatientList.propTypes = {
  users: PropTypes.object,
};

export default PatientList;
