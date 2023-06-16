import React, { useState } from 'react';
import Plotly from 'plotly.js-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const DataVisualization = ({ query, reportName, sparkExecParameter }) => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    // Call the Flask generate_data_visualization_api() endpoint with the provided query, reportName, and sparkExecParameter values
    fetch(`http://127.0.0.1:5000/gen_data_viz`)
      .then(response => response.json())
      .then(data => setData(data.data));
  };

  return (
    <div>
      <h2>DataViz Generation Page</h2>
      <button onClick={handleClick}>Generate</button>
      {data.length > 0 && (
        <>
          <h3>Generated Visual</h3>
          <Plot
            data={data}
            layout={{ title: reportName }}
          />
        </>
      )}
    </div>
  );
};

export default DataVisualization;
