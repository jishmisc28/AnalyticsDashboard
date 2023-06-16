import React, { useState } from 'react';
import './styles.css';
// import SchemaTable from './SchemaTable';

const DBConnection = () => {
  const [database, setDbType] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [schemaDict, setSchemaDict] = useState(null);
  console.log("******* RENDERED ********")

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle database connection and schema extraction here
    try {
      const response = await fetch('http://127.0.0.1:5000/get_schema', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          host,
          database,
          port,   
        }),
      });
      if (response.ok) {
        
        const schemaDict = await response.json();
        setSchemaDict(schemaDict);

      } else {
        // handle error here
      }
    } catch (error) {
      // handle error here
    }
  };

  return (
    <>
    <h2>Database Connection Page</h2>
      <form onSubmit={handleSubmit} className="connection-form">
        <label>
          DB Name:
          <input
            type="text"
            value={database}
            onChange={(event) => setDbType(event.target.value)}
          />
        </label>
        <br />
        <label>
          Host:
          <input
            type="text"
            value={host}
            onChange={(event) => setHost(event.target.value)}
          />
        </label>
        <br />
        <label>
          Port:
          <input
            type="text"
            value={port}
            onChange={(event) => setPort(event.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Connect" />
      </form>
      {/* {schemaDict && <SchemaTable schema_dict={schemaDict} />} */}
      {schemaDict && (
        <>
          <h2>Extracting schema information and saving file in localhost.. :</h2>
          <pre>{JSON.stringify(schemaDict, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default DBConnection;