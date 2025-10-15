import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";

export default function AddEmployeeForm({ onEmployeeAdded }) {
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employee.name || !employee.position || !employee.department || !employee.salary) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/employees", employee);
      alert("✅ Employee added successfully!");
      setEmployee({ name: "", position: "", department: "", salary: "" });
      onEmployeeAdded(); // Refresh list
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("❌ Failed to add employee.");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom>Add New Employee</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Position"
          name="position"
          value={employee.position}
          onChange={handleChange}
          required
        />
        <TextField
          label="Department"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <TextField
          label="Salary"
          name="salary"
          type="number"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Employee
        </Button>
      </Box>
    </Paper>
  );
}
