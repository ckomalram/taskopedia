import React from "react";

const StudentReview = () => {
  return (
    <div className="p-2">
      <i
        class="bi bi-hand-thumbs-up text-success p-1"
        style={{ cursor: "pointer" }}
      ></i>
      <i
        class="bi bi-hand-thumbs-down text-danger p-1"
        // usar -fill al final para llenar
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default StudentReview;
