import React from "react";
import StudentList from "./components/StudentList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <StudentList />
    </div>
  );
}
