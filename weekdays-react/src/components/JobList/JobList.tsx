import React from "react";
import "./JobList.css";
import JobCard from "../JobCard/JobCard";

const JobList: React.FC = () => {
  // Dummy data for demonstration
  const jobs = [
    {
      jobTitle: "Software Engineer",
      companyName: "Tech Corp",
      location: "New York, NY",
      description: "Develop and maintain software applications.",
      experienceRequired: 3,
      applyLink: "#",
    },
    {
      jobTitle: "Product Manager",
      companyName: "Innovate Inc.",
      location: "San Francisco, CA",
      description: "Manage product lifecycle from conception to launch.",
      experienceRequired: 5,
      applyLink: "#",
    },
    // Add more jobs as needed
  ];

  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle}
          companyName={job.companyName}
          location={job.location}
          description={job.description}
          experienceRequired={job.experienceRequired}
          applyLink={job.applyLink}
        />
      ))}
    </div>
  );
};

export default JobList;
