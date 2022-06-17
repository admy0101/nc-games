import React from "react";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate(-1);
  };

  return (
    <div>
      <p className="submit-success">Post added!</p>

      <button onClick={handleSubmit}>Return to review</button>
    </div>
  );
};

export default Submitted;
