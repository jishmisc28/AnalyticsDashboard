import React, { useState } from 'react';
// import Form from '@rjsf/core';
import Form from 'react-jsonschema-form';
import './styles.css';

//import { useGetReportSelectionQuery } from '../../state/api';

const generateSchema = (data) => {
  const schema = {
    type: 'object',
    properties: {}
  };

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      schema.properties[key] = generateSchema(value);
    } else {
      schema.properties[key] = { type: typeof value };
    }
  }

  return schema;
};

const ReportSelection = () => {
  const [report_name, setReportName] = useState('');
  const [fieldMapping, setFieldMapping] = useState(null);
  const [savedFilePath] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/calc_similarity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report_name,
        }),
      });
      if (response.ok) {
        const field_mapping = await response.json();
        setFieldMapping(field_mapping);
      } else {
        // handle error here
      }
    } catch (error) {
      // handle error here
    }
  };

  const onChange = ({ formData }) => {
    setFieldMapping(formData);
  };

  const onSave = async () => {
    const response = await fetch('http://127.0.0.1:5000/calc_similarity/override', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fieldMapping)
    });
    if (response.ok) {
      console.log('Data saved successfully');
    } else {
      console.error('An error occurred while saving the data');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h2>Report Selection Page</h2>
        <label>
          Report To Emulate:
          <input type="text" value={report_name} onChange={(e) => setReportName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {fieldMapping && (
        <>
          <h3>Field Mapping Result</h3>
          <Form schema={generateSchema(fieldMapping)} formData={fieldMapping} onChange={onChange} />
          <br />
          <button onClick={onSave}>Save</button>
          {savedFilePath && <p>Saved file path: {savedFilePath}</p>}
        </>
      )}
    </>
  );
};

export default ReportSelection;
