import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch } from "../../utils/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = () => {

  const {isLoading, contactList } = useFetch();



  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          {contactList?.map((item, index) => {
            const {username, phoneNumber, gender} =item;
            return(
              <TableRow key={index}>
                  <TableCell align="left">{username}</TableCell>
                  <TableCell align="left">{phoneNumber} </TableCell>
                  <TableCell align="left">{gender} </TableCell>
                  <TableCell align="left">
                    <DeleteIcon/>
                  </TableCell>
                  <TableCell align="left">
                  <EditIcon />
                  </TableCell>
              </TableRow>
            )
          })}
  
          </TableHead>

          <TableBody>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
