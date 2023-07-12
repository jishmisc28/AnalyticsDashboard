Next-Supabase based Analytics App.

Problem Statement

Create a SaaS Data Analytics App that can configure, manipulate and represent databases and user data. This app must provide a smooth and advanced analytics solution targeting niche sectors that require data analysis. The App should be developed by employing best practices of UI/UX Design principles using Material UI and Tailwind CSS for maximum responsiveness and efficiency.

Layout The application can have a Side Navigation Bar on the left with following sections:

Login DB Connection DB Diagram Report Selection SQL Generation Data Visualization Account Each section represents a unique component of the application.

Components Login Implement an authentication system that ensures the security of the user data. This should be in the form of a login form that has an option for Google Authentication.

DB Connection Allows the user to connect to their desired database. The input form should contain the following fields: database name, host, username, password, and port. An option to connect to the database should also be present.

DB Diagram A visual representation of the database structure should be displayed. The layout should be similar to the one mentioned in the reference link as https://supabase-schema.vercel.app/. The user should be able to edit and save table relationships.

Report Selection A data table that contains domain, report-name, query, and table-columns fields. The user should be able to select any one entry.

SQL Generation The user clicks a button 'Generate SQL' to see the SQL Query on-screen, which also has an option for editing and saving. The user should also have the ability to run the SQL query and view the results on the same page but in a different data table. Display the query execution progress to keep users informed.

Data Visualization The user clicks a 'Generate Visualization' button which generates a responsive data visualization on the screen according to the selected report from the 'Report Selection' component.

Account Account management section where a user can view and edit their account details, view billing information, email, and have the option to log out. Display the username and provide an option to change the password.

Admin Panel Implement an admin panel to manage the overall app components and user activities.

Deliverables Complete codebase for the SaaS Data Analytics App as per the problem statement Proper documentation explaining the code flows, functions, and component structures to maintain and manage the codebase in the future Required unit and integration tests ensuring the functionality of the App Technology Stack Backend - Node.js/ Supabase (Auth, Billing, Pagination, Frontend - Next JS with Tailwind CSS or Material UI Database - MongoDB/ Postgres Deployment and SaaS platform - AWS/ Google Cloud Platform Data Visualization Tool - D3.js/ Chart.js and or Cube Js AI Integration - ChatGPT API or Langchain API

The SaaS Data Analytics App is expected to provide a comprehensive solution for configuring, manipulating, and visualizing complex databases, serving as an engine of growth for the niche sectors targeted. This task not only involves coding proficiency but also requires a good understanding of UI/UX principles, a keen eye for design details, and adaptability to work with diverse technologies.
