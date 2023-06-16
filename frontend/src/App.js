import React from 'react';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Layout from './layout/Layout';
import Login from './components/Login';
import DBConnection from './components/DBConnection';
import DBDiagram from './components/DBDiagram';
import ReportSelection from './components/ReportSelection';
import SqlGeneration from './components/SqlGeneration';
import DataVisualization from './components/DataVisualization';
import Account from './components/Account';

const fixTableData = `
    Table follows {
      following_user_id integer
      followed_user_id integer
      created_at timestamp 
    }

    Table users {
      id integer [primary key]
      username varchar
      role varchar
      created_at timestamp
    }

    Table posts {
      id integer [primary key]
      title varchar
      body text [note: 'Content of the post']
      user_id integer
      status varchar
      created_at timestamp
    }

    Ref: posts.user_id > users.id // many-to-one

    Ref: users.id < follows.following_user_id

    Ref: users.id < follows.followed_user_id
  `;

function App() {
  // const mode = useSelector((state) => state.global.mode);
  const mode = 'light'
  const theme = createTheme(themeSettings(mode));
  return (
    // Wrap the root of your application in a <Provider> component
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              {/* <Route element={<Layout />}> */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/db-connection" element={<DBConnection />} />
                <Route path="/db-diagram" element={<DBDiagram tableData={fixTableData} />} />
                <Route path="/report-selection" element={<ReportSelection />} />
                <Route path="/sql-generation" element={<SqlGeneration />} />
                <Route path="/data-visualization" element={<DataVisualization />} />
                <Route path="/account" element={<Account />} /> 
              {/* </Route> */}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
