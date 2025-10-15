// src/components/EmployeeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeForm from "./AddEmployeeForm";
import { Typography, CircularProgress, Container } from "@mui/material";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Employee Details
      </Typography>

      <AddEmployeeForm onEmployeeAdded={fetchEmployees} />

      {loading ? (
        <CircularProgress sx={{ mt: 3 }} />
      ) : (
        <EmployeeTable employees={employees} />
      )}
    </Container>
  );
}
