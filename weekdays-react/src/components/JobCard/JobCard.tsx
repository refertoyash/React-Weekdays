import React from "react";
import "./JobCard.css";

// Define a type for the props that the JobCard component will accept
type JobCardProps = {
  jobTitle: string;
  companyName: string;
  location: string;
  description: string;
  experienceRequired: number;
  applyLink: string;
};

const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  companyName,
  location,
  description,
  experienceRequired,
  applyLink,
}) => {
  return (
    <div className="job-card">
      <h3>{jobTitle}</h3>
      <p className="company-name">{companyName}</p>
      <p className="location">{location}</p>
      <p className="description">{description}</p>
      <p className="experience">
        Experience Required: {experienceRequired} years
      </p>
      <a href={applyLink} className="apply-button">
        Apply
      </a>
    </div>
  );
};

export default JobCard;
