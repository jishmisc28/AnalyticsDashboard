import React, { useState } from 'react';

const SqlGeneration = () => {
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/gensql');
      if (response.ok) {
        const data = await response.text();
        setResult(data);
      } else {
        // handle error here
      }
    } catch (error) {
      // handle error here
    }
  };

  return (
    <div>
      <h2>SQL Generation Page</h2>
      <button onClick={handleClick}>Generate SQL</button>
      {result && (
        <>
          <h3>Generated SQL Result</h3>
          <pre>{result}</pre>
        </>
      )}
    </div>
  );
};

export default SqlGeneration;