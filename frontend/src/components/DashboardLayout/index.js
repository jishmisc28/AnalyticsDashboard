import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import { Drawer, List, ListItem, ListItemText, makeStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  drawerPaper: {
    width: '240px',
  },
});

const navItems = [
  { name: 'Login', href: '/login' },
  { name: 'DB Connection', href: '/db-connection' },
  { name: 'DB Diagram', href: '/db-diagram' },
  { name: 'Report Selection', href: '/report-selection' },
  { name: 'SQL Generation', href: '/sql-generation' },
  { name: 'Data Visualization', href: '/data-visualization' },
  { name: 'Account', href: '/account' }
//   { name: 'Billing', href: '/billing' },
//   { name: 'Contact', href: '/contact' },
];

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
      <Drawer
        variant="persistent"
        open={isNavOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className="flex items-center mb-8 p-4">
          <Logo className="h-8 w-auto mr-2" />
          <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        </div>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} component={NavLink} to={item.href}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className="flex-grow p-6">
        <IconButton
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="mb-4"
        >
          <MenuIcon />
        </IconButton>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
