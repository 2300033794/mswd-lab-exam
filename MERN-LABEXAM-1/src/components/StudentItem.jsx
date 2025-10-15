import React from "react";
import PropTypes from "prop-types";

export default function StudentItem({ studentName, index }) {
  return (
    <li className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
      <span className="font-medium text-gray-700">
        {index + 1}. {studentName}
      </span>
      <span className="text-sm text-blue-600 font-semibold">🎓 Student</span>
    </li>
  );
}

StudentItem.propTypes = {
  studentName: PropTypes.string.isRequired,
  index: PropTypes.number,
};
