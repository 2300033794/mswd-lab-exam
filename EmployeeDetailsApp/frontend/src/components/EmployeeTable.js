    // src/components/EmployeeTable.js
import React from "react";
import PropTypes from "prop-types";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@mui/material";

export default function EmployeeTable({ employees }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Position</b></TableCell>
            <TableCell><b>Department</b></TableCell>
            <TableCell><b>Salary</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp, index) => (
            <TableRow key={index}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.position}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
};
