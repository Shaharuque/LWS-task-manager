import React from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import IndividualProject from "./IndividualProject/IndividualProject";

const ProjectsList = () => {
  // Getting project list from api
  const {
    data: projectsList,
    isSuccess: getProjectsSuccess,
    isError: getProjectsError,
  } = useGetProjectsQuery();

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      {projectsList?.map((single) => (
        <IndividualProject
          key={single?.id}
          project={single}
        ></IndividualProject>
      ))}
    </div>
  );
};

export default ProjectsList;
