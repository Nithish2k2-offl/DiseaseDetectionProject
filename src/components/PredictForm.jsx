import React, { useState } from 'react';
import "./PredictForm.css";

function PredictForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePredict = async () => {
    // Check if no file is chosen
    if (!file) {
      setError('Please choose an image file before predicting.');
      return;
    }

    // Clear previous error
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setResult(null); // Clearing previous result
        setError('Prediction failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="predictButton" onClick={handlePredict}>Predict</button>
      {error && <p className="errorMessage">{error}</p>}
  
      {result && (
        <div className="resultContainer">
          <p><span className="resultLabel">Class:</span> {result.class}</p>
          <p><span className="resultLabel">Confidence:</span> {result.confidence * 100 + " %"}</p>
          <p><span className="resultLabel">Remedies:</span> {result.remedies}</p>
        </div>
      )}
    </div>
  );
  
}
export default PredictForm;
