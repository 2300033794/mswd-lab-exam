import React from "react";
import PropTypes from "prop-types";
import StudentItem from "./StudentItem";

export default function StudentListDisplay({ students }) {
  if (!students || students.length === 0) {
    return (
      <p className="text-center text-gray-500 italic">
        No students found.
      </p>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {students.map((name, i) => (
        <StudentItem key={i} studentName={name} index={i} />
      ))}
    </ul>
  );
}

StudentListDisplay.propTypes = {
  students: PropTypes.arrayOf(PropTypes.string).isRequired,
};
