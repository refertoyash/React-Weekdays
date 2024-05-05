import React from "react";
import "./App.css";
import JobList from "./components/JobList/JobList";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Job Listings</h1>
      </header>
      <main>
        <JobList />
      </main>
    </div>
  );
};

export default App;
