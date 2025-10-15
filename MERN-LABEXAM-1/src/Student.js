import React from "react";

export default function Student({ names }) {
  if (!names || names.length === 0) {
    return <div className="student-empty">No students found.</div>;
  }

  return (
    <div className="student-card">
      <h3 className="student-title">Student Names</h3>
      <ul className="student-list">
        {names.map((n, i) => (
          <li key={i} className="student-item">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}





// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Error connecting MongoDB:", err));
