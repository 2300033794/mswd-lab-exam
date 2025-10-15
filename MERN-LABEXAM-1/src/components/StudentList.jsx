import React from "react";
import StudentListDisplay from "./StudentListDisplay";

export default function StudentList() {
  const students = ["vijay","gowtham","hemanth", "Rohan Verma"];

  return (
    <section className="max-w-md mx-auto mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        🧑‍🎓 Student List (Parent Component)
      </h2>
      <p className="text-center text-gray-600 mb-3">
        Below is the list of enrolled students:
      </p>
      <StudentListDisplay students={students} />
    </section>
  );
}
