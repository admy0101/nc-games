import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadingBar } from "./LoadingBar";

const Submitted = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    setLoading()
    navigate(-1);
  };
  if (loading) {
    return <LoadingBar />
  }

  return (
    <div>
      <p className="submit-success">Post added!</p>

      <button onClick={handleSubmit}>Return to review</button>
    </div>
  );
};

export default Submitted;
